import exifr from 'exifr'

export interface ShotEXIFData {
	id: string
	filename: string
	imagePath: string
	camera?: string
	lens?: string
	aperture?: string
	shutterSpeed?: string
	iso?: string
	focalLength?: string
}

interface RawEXIFData {
	ExposureTime?: number
	Make?: string
	Model?: string
	LensModel?: string
	FNumber?: number
	ISO?: number
	FocalLength?: number
}

// List of all image files in the public/shots folder
const originalShotFiles = [
	'DSCF7449.jpg',
	'DSCF7437.jpg',
	'DSCF7436.jpg',
	'DSCF7420.jpg',
	'DSCF7417.jpg',
	'DSCF7413.jpg',
	'DSCF7402.jpg',
	'DSCF7397.jpg',
	'DSCF7395.jpg',
	'DSCF7377.jpg',
	'DSCF7367.jpg',
	'DSCF7266.jpg',
	'DSCF7239.jpg',
	'DSCF7213.jpg',
	'DSCF3556.jpg',
	'DSCF3519.jpg',
	'DSCF3386.jpg',
	'DSCF3176.jpg',
	'DSCF3065.jpg',
	'DSCF3055.jpg',
	'DSCF2787.jpg',
	'DSCF2746.JPG',
	'DSCF2679.jpg',
	'DSCF2451.jpg',
	'DSCF2321.jpg',
	'DSCF2320.jpg',
	'fxn 2025-07-20 081553.684.jpg',
	'DSCF2050.jpg',
	'DSCF1992.jpg',
	'DSCF1858.jpg',
	'DSCF1826.jpg',
	'DSCF1799.jpg',
	'DSCF1779.jpg',
	'DSCF1465.jpg',
	'DSCF1198.jpg',
	'DSCF0360.jpg',
	'DSCF1160.jpg',
	'DSCF0918.JPG',
	'DSCF0755.jpg',
]

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = <T>(array: T[]): T[] => {
	const shuffled = [...array]
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}
	return shuffled
}

// Generate shuffled array on each module load
const shotFiles = shuffleArray(originalShotFiles)

// Function to format EXIF data
const formatEXIFData = (rawData: RawEXIFData | null): Partial<ShotEXIFData> => {
	if (!rawData) {
		return {
			camera: 'Fujifilm X-T5',
			lens: 'XF 16-55mm f/2.8',
			aperture: 'f/2.8',
			shutterSpeed: '1/125s',
			iso: 'ISO 200',
			focalLength: '35mm',
		}
	}

	const exposureTime = rawData.ExposureTime ? 1 / rawData.ExposureTime : 125
	const shutterSpeed = `SS 1/${Math.round(exposureTime)}`

	return {
		camera:
			rawData.Make && rawData.Model
				? `${rawData.Make} ${rawData.Model}`
				: 'Fujifilm X-T5',
		lens: rawData.LensModel || 'XF 16-55mm f/2.8',
		aperture: rawData.FNumber
			? `f/${Math.round(rawData.FNumber * 10) / 10}`
			: 'f/2.8',
		shutterSpeed: shutterSpeed,
		iso: rawData.ISO ? `ISO ${Math.round(rawData.ISO)}` : 'ISO 200',
		focalLength: rawData.FocalLength
			? `${Math.round(rawData.FocalLength)}mm`
			: '35mm',
	}
}

// Function to extract EXIF data from a single image
export const extractEXIFFromImage = async (
	filename: string,
	customIndex?: number
): Promise<ShotEXIFData> => {
	const imagePath = `/shots/${filename}`
	const id =
		customIndex !== undefined
			? `shot-${customIndex + 1}`
			: `shot-${shotFiles.indexOf(filename) + 1}`

	try {
		const rawExifData = await exifr.parse(imagePath)
		const formattedData = formatEXIFData(rawExifData)

		return {
			id,
			filename,
			imagePath,
			...formattedData,
		}
	} catch (error) {
		// Return default data if extraction fails
		return {
			id,
			filename,
			imagePath,
			camera: 'Fujifilm X-T5',
			lens: 'XF 16-55mm f/2.8',
			aperture: 'f/2.8',
			shutterSpeed: '1/125s',
			iso: 'ISO 200',
			focalLength: '35mm',
		}
	}
}

// Function to extract EXIF data from all images
export const extractAllShotsEXIF = async (): Promise<ShotEXIFData[]> => {
	const results: ShotEXIFData[] = []

	// Process images in batches to avoid overwhelming the browser
	const batchSize = 5
	for (let i = 0; i < shotFiles.length; i += batchSize) {
		const batch = shotFiles.slice(i, i + batchSize)

		const batchPromises = batch.map((filename) =>
			extractEXIFFromImage(filename)
		)
		const batchResults = await Promise.all(batchPromises)

		results.push(...batchResults)

		// Small delay between batches
		if (i + batchSize < shotFiles.length) {
			await new Promise((resolve) => setTimeout(resolve, 100))
		}
	}

	return results
}

// Function to extract EXIF data from first 8 images only
export const extractFirstEightShotsEXIF = async (): Promise<ShotEXIFData[]> => {
	const results: ShotEXIFData[] = []
	const firstEightFiles = shotFiles.slice(0, 8)

	// Process first 8 images with their correct indices
	const promises = firstEightFiles.map((filename, index) =>
		extractEXIFFromImage(filename, index)
	)

	const batchResults = await Promise.all(promises)
	results.push(...batchResults)

	return results
}

// Function to extract EXIF data from remaining images (after first 8)
export const extractRemainingShotsEXIF = async (): Promise<ShotEXIFData[]> => {
	const results: ShotEXIFData[] = []
	const remainingFiles = shotFiles.slice(8)

	if (remainingFiles.length === 0) {
		return results
	}

	// Process remaining images with their correct indices (starting from 8)
	const promises = remainingFiles.map((filename, index) =>
		extractEXIFFromImage(filename, 8 + index)
	)

	const batchResults = await Promise.all(promises)
	results.push(...batchResults)

	return results
}
