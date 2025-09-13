import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Shuffle } from 'lucide-react'
import {
	extractFirstEightShotsEXIF,
	extractRemainingShotsEXIF,
	type ShotEXIFData,
} from '@/lib/shotsExtract'

export const ShotsGallery = () => {
	const [shotsData, setShotsData] = useState<ShotEXIFData[]>([])
	const [initialLoading, setInitialLoading] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const [imageLoadStates, setImageLoadStates] = useState<
		Record<string, boolean>
	>({})
	const [selectedShot, setSelectedShot] = useState<string | null>(null)
	const remainingDataLoaded = useRef<boolean>(false)

	// Function to preload images
	const preloadImage = (src: string): Promise<void> => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => resolve()
			img.onerror = reject
			img.src = src
		})
	}

	// Function to handle image load
	const handleImageLoad = (shotId: string) => {
		setImageLoadStates((prev) => ({ ...prev, [shotId]: true }))
	}

	// Function to handle shot selection
	const handleShotClick = (shotId: string) => {
		if (selectedShot === shotId) {
			// If clicking the same shot, deselect it
			setSelectedShot(null)
		} else {
			// Select the new shot
			setSelectedShot(shotId)
		}
	}

	// Function to shuffle the current shots data
	const shuffleShots = () => {
		setShotsData((prev) => {
			const shuffled = [...prev]
			for (let i = shuffled.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
			}
			return shuffled
		})
		// Keep existing load states - no need to reset since images are already loaded
	}

	useEffect(() => {
		const loadShotsData = async () => {
			try {
				setInitialLoading(true)
				console.log('loading EXIF')

				// Load first 8 images eagerly
				const firstEightData = await extractFirstEightShotsEXIF()
				setShotsData(firstEightData)
				setInitialLoading(false)
				console.log('done loading first 8 EXIF')

				// Preload first 8 images for better perceived performance
				const preloadPromises = firstEightData.map(
					(shot) => preloadImage(shot.imagePath).catch(() => {}) // Ignore preload errors
				)
				await Promise.all(preloadPromises)

				// Load remaining images in background (only once)
				if (!remainingDataLoaded.current) {
					remainingDataLoaded.current = true
					setLoading(true)
					const remainingData = await extractRemainingShotsEXIF()
					setShotsData((prev) => [...prev, ...remainingData])
					setLoading(false)
					console.log('done loading all EXIF')
				}
			} catch (error) {
				console.log(error)
				setInitialLoading(false)
				setLoading(false)
			}
		}

		loadShotsData()
	}, [])

	return (
		<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700'>
			<div className='flex items-center justify-between mb-3 sm:mb-4'>
				<h4 className='font-inter font-semibold text-lg sm:text-xl text-foreground'>
					Featured Shots
				</h4>
				<Button
					onClick={shuffleShots}
					disabled={initialLoading || loading}
					size='sm'
					className='hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-inter font-medium px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'>
					<Shuffle className='w-4 h-4' />
					Shuffle
				</Button>
			</div>
			{initialLoading ? (
				<div className='flex flex-col items-center justify-center py-12 space-y-4'>
					<div className='relative'>
						<div className='w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-primary rounded-full animate-spin'></div>
					</div>
					<p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
						Loading shots...
					</p>
				</div>
			) : (
				<div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6'>
					{shotsData.map((shot, index) => {
						const isSelected = selectedShot === shot.id
						return (
							<div
								key={shot.id}
								className='group hover:scale-105 transition-transform duration-500 cursor-pointer'
								onClick={() => handleShotClick(shot.id)}>
								{/* Image container with EXIF overlay */}
								<div className='aspect-square rounded-lg overflow-hidden relative border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary transition-colors duration-300'>
									{!imageLoadStates[shot.id] && (
										<div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg'>
											<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer'></div>
										</div>
									)}
									<img
										src={shot.imagePath}
										alt={shot.id}
										loading={index < 8 ? 'eager' : 'lazy'}
										onLoad={() => handleImageLoad(shot.id)}
										className={`w-full h-full object-cover group-hover:brightness-110 group-hover:scale-115 transition-all duration-500 ${
											imageLoadStates[shot.id] ? 'opacity-100' : 'opacity-0'
										}`}
									/>

									{/* EXIF Information Overlay */}
									{isSelected && imageLoadStates[shot.id] && (
										<div className='absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-3'>
											<div className='text-white space-y-1 sm:space-y-1.5'>
												<div className='text-[9px] font-light font-mono'>
													Camera: {shot.camera}
												</div>
												<div className='text-[9px] font-light font-mono'>
													Lens: {shot.lens}
												</div>
												<div className='text-[9px] font-light font-mono'>
													Aperture: {shot.aperture}
												</div>
												<div className='text-[9px] font-light font-mono'>
													Shutter: {shot.shutterSpeed}
												</div>
												<div className='text-[9px] font-light font-mono'>
													ISO: {shot.iso}
												</div>
												<div className='text-[9px] font-light font-mono'>
													Focal: {shot.focalLength}
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						)
					})}
				</div>
			)}
			{loading && (
				<div className='flex flex-col items-center justify-center py-12 space-y-4'>
					<div className='relative'>
						<div className='w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-primary rounded-full animate-spin'></div>
					</div>
					<p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
						Loading more shots...
					</p>
				</div>
			)}
		</div>
	)
}
