import { ExternalLink } from 'lucide-react'
import type { SpotifyAlbum } from './types'
import { AlbumCover } from './AlbumCover'
import { AlbumMetadata } from './AlbumMetadata'

interface MobileAlbumCardProps {
	album: SpotifyAlbum
}

export const MobileAlbumCard = ({ album }: MobileAlbumCardProps) => (
	<div className='flex items-start space-x-4 md:hidden'>
		<div className='flex-shrink-0'>
			<AlbumCover album={album} className='w-16 h-16' />
		</div>
		<div className='flex-1 min-w-0'>
			<div className='flex items-start justify-between'>
				<div className='flex-1 min-w-0'>
					<AlbumMetadata album={album} />
				</div>
				<ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2' />
			</div>
		</div>
	</div>
)
