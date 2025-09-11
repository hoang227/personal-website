import type { FavoriteAlbumsSectionProps } from './types'
import { AlbumCard } from './AlbumCard'

export default function FavoriteAlbumsSection({
	albums,
	title = 'Favorite Albums',
}: FavoriteAlbumsSectionProps) {
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
					<AlbumCard key={album.id} album={album} />
				))}
			</div>
		</div>
	)
}
