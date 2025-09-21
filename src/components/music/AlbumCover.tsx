import { Music } from 'lucide-react'
import type { Album } from '@/data/musicData'

interface AlbumCoverProps {
	album: Album
	className?: string
	onImageLoad?: () => void
}

export const AlbumCover = ({
	album,
	className = '',
	onImageLoad,
}: AlbumCoverProps) => {
	if (album.imageUrl) {
		return (
			<img
				src={album.imageUrl}
				alt={`${album.name} album cover`}
				className={`rounded-lg object-cover group-hover:scale-107 transition-transform duration-500 shadow-lg ${className}`}
				onLoad={() => {
					onImageLoad?.()
				}}
				onError={() => {
					onImageLoad?.() // Still call onImageLoad to prevent infinite loading
				}}
				loading='eager'
				fetchPriority='high'
			/>
		)
	}

	return (
		<div
			className={`bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ${className}`}>
			<Music className='w-8 h-8 text-gray-400' />
		</div>
	)
}
