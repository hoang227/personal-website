import { ExternalLink } from 'lucide-react'
import type { Album } from '@/data/musicData'
import { AlbumCover } from './AlbumCover'
import { AlbumMetadata } from './AlbumMetadata'

interface DesktopAlbumCardProps {
	album: Album
}

export const DesktopAlbumCard = ({ album }: DesktopAlbumCardProps) => (
	<div className='hidden md:block'>
		<div className='relative mb-3'>
			<AlbumCover album={album} className='w-full aspect-square' />
			<div className='absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
				<ExternalLink className='w-3 h-3' />
			</div>
		</div>
		<div className='flex items-start justify-between'>
			<div className='flex-1 min-w-0'>
				<AlbumMetadata album={album} />
			</div>
			<ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2 md:hidden' />
		</div>
	</div>
)
