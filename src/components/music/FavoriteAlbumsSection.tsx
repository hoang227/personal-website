import { useState, useEffect } from 'react'
import type { FavoriteAlbumsSectionProps } from './types'
import { AlbumCard } from './AlbumCard'

export default function FavoriteAlbumsSection({
	albums,
	title = 'Favorite Albums',
}: FavoriteAlbumsSectionProps) {
	const [imagesLoaded, setImagesLoaded] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	// Handle image loading
	const handleImageLoad = () => {
		setImagesLoaded((prev) => {
			const newCount = prev + 1
			console.log(`Album image loaded: ${newCount}/${albums.length}`)
			return newCount
		})
	}

	// Check if all images are loaded
	useEffect(() => {
		if (albums.length > 0 && imagesLoaded >= albums.length) {
			console.log('All album images loaded!')
			setIsLoading(false)
		}
	}, [imagesLoaded, albums.length])

	// Show albums after a very short delay even if images aren't loaded
	useEffect(() => {
		if (albums.length > 0) {
			const quickTimer = setTimeout(() => {
				console.log('Quick fallback: showing albums')
				setIsLoading(false)
			}, 500) // Show albums after 500ms regardless

			return () => clearTimeout(quickTimer)
		}
	}, [albums.length])

	// Reset image counter when albums change
	useEffect(() => {
		if (albums.length > 0) {
			console.log(`Starting to load ${albums.length} albums`)
			setImagesLoaded(0)
			setIsLoading(true)
			// Fallback: if images don't load within 1 second, assume they're loaded
			const fallbackTimer = setTimeout(() => {
				console.log('Fallback: assuming all album images loaded')
				setImagesLoaded(albums.length)
			}, 1000)

			return () => clearTimeout(fallbackTimer)
		} else {
			setIsLoading(false)
		}
	}, [albums.length])

	// Loading state
	if (isLoading && albums.length > 0) {
		return (
			<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
				<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
					{title}
				</h4>
				<div className='text-center py-12'>
					<div className='text-6xl opacity-40 mb-4'>🎵</div>
					<p className='text-gray-500 dark:text-gray-400 font-inter'>
						Loading albums...
					</p>
				</div>
			</div>
		)
	}

	// Empty state
	if (albums.length === 0) {
		return (
			<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
				<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
					{title}
				</h4>
				<div className='text-center py-8'>
					<p className='text-gray-500 dark:text-gray-400 font-inter'>
						No albums found
					</p>
				</div>
			</div>
		)
	}

	// Success state
	return (
		<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
			<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
				{title}
			</h4>
			<div className='space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-y-0'>
				{albums.map((album) => (
					<AlbumCard
						key={album.id}
						album={album}
						onImageLoad={handleImageLoad}
					/>
				))}
			</div>
		</div>
	)
}
