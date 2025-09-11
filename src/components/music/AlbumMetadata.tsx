import { Calendar, Disc } from 'lucide-react'
import type { Album } from '@/data/musicData'
import { formatReleaseDate } from './utils'

interface AlbumMetadataProps {
	album: Album
}

export const AlbumMetadata = ({ album }: AlbumMetadataProps) => {
	const artistNames = album.artists.join(', ')

	return (
		<>
			<h5 className='font-inter font-semibold text-foreground text-base md:text-lg mb-1 group-hover:text-blue-500 transition-colors line-clamp-2'>
				{album.name}
			</h5>
			<p className='text-gray-600 dark:text-gray-300 font-inter text-sm mb-2 line-clamp-1'>
				{artistNames}
			</p>
			<div className='flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400'>
				<div className='flex items-center space-x-1'>
					<Calendar className='w-3 h-3' />
					<span>{formatReleaseDate(album.releaseDate)}</span>
				</div>
				<div className='flex items-center space-x-1'>
					<Disc className='w-3 h-3' />
					<span>{album.totalTracks} tracks</span>
				</div>
			</div>
		</>
	)
}
