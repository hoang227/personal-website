import { useState, useEffect, useRef } from 'react'
import {
	extractFirstEightShotsEXIF,
	extractRemainingShotsEXIF,
	type ShotEXIFData,
} from '@/lib/shotsExtract'

export const ShotsGallery = () => {
	const [shotsData, setShotsData] = useState<ShotEXIFData[]>([])
	const [initialLoading, setInitialLoading] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const remainingDataLoaded = useRef<boolean>(false)

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
		<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
			<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
				Featured Shots
			</h4>
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
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{shotsData.map((shot, index) => {
						return (
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

									{/* Image container with conditional loading */}
									<div className='aspect-square rounded-lg overflow-hidden relative'>
										<img
											src={shot.imagePath}
											alt={shot.id}
											loading={index < 8 ? 'eager' : 'lazy'}
											className='w-full h-full object-cover group-hover:brightness-110 transition-all duration-300'
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
						)
					})}
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
			)}
		</div>
	)
}
