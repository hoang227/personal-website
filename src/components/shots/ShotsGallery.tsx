import { useState, useEffect } from 'react'
import { extractAllShotsEXIF, type ShotEXIFData } from '@/lib/shotsExtract'

export const ShotsGallery = () => {
	const [shotsData, setShotsData] = useState<ShotEXIFData[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [imagesLoaded, setImagesLoaded] = useState(0)
	const [error, setError] = useState<string | null>(null)

	// Function to shuffle array randomly
	const shuffleArray = <T,>(array: T[]): T[] => {
		const shuffled = [...array]
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
		}
		return shuffled
	}

	useEffect(() => {
		const loadShotsData = async () => {
			try {
				const data = await extractAllShotsEXIF()
				const shuffledData = shuffleArray(data)
				setShotsData(shuffledData)
			} catch (error) {
				setError('Failed to load shots data')
				setIsLoading(false)
			}
		}

		loadShotsData()
	}, [])

	// Handle image loading
	const handleImageLoad = () => {
		setImagesLoaded((prev) => prev + 1)
	}

	// Check if all images are loaded
	useEffect(() => {
		if (shotsData.length > 0 && imagesLoaded >= shotsData.length) {
			setIsLoading(false)
		}
	}, [imagesLoaded, shotsData.length])

	return (
		<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
			<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
				Featured Shots
			</h4>

			{error && (
				<div className='mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded'>
					Error: {error}
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{shotsData.map((shot) => (
					<div
						key={shot.id}
						className='group hover:scale-105 transition-transform duration-300 cursor-pointer'>
						{/* Camera details border */}
						<div className='border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 group-hover:border-primary transition-colors duration-300'>
							{/* Top border - Camera and Lens */}
							<div className='mb-3 mt-1 px-2'>
								<div className='mb-1 text-xs font-medium text-gray-600 dark:text-gray-400 font-mono'>
									Camera: {shot.camera}
								</div>
								<div className='text-xs font-medium text-gray-600 dark:text-gray-400 font-mono'>
									Lens: {shot.lens}
								</div>
							</div>

							{/* Image container */}
							<div className='aspect-square rounded-lg overflow-hidden relative'>
								<img
									src={shot.imagePath}
									alt={shot.id}
									className='w-full h-full object-cover group-hover:brightness-110 transition-all duration-300'
									loading='lazy'
									onLoad={handleImageLoad}
								/>
							</div>

							{/* Bottom border - Technical details */}
							<div className='flex justify-between items-center mt-2 px-2 text-xs font-medium text-gray-600 dark:text-gray-400 font-mono'>
								<span>{shot.aperture}</span>
								<span>{shot.shutterSpeed}</span>
								<span>{shot.iso}</span>
								<span>{shot.focalLength}</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Loading state */}
			{isLoading && (
				<div className='text-center py-12'>
					<div className='text-6xl opacity-40 mb-4'>📸</div>
					<p className='text-gray-500 dark:text-gray-400 font-inter'>
						Loading images...
					</p>
					<div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4'>
						<div
							className='bg-blue-600 h-2 rounded-full transition-all duration-300'
							style={{
								width:
									shotsData.length > 0
										? `${(imagesLoaded / shotsData.length) * 100}%`
										: '0%',
							}}></div>
					</div>
				</div>
			)}
		</div>
	)
}
