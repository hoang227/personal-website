import type { Album } from '@/data/musicData'
import { MobileAlbumCard } from './MobileAlbumCard'
import { DesktopAlbumCard } from './DesktopAlbumCard'

interface AlbumCardProps {
	album: Album
	onImageLoad?: () => void
}

export const AlbumCard = ({ album, onImageLoad }: AlbumCardProps) => (
	<div className='group'>
		<a
			href={album.spotifyUrl}
			target='_blank'
			rel='noopener noreferrer'
			className='block'>
			<MobileAlbumCard album={album} onImageLoad={onImageLoad} />
			<DesktopAlbumCard album={album} onImageLoad={onImageLoad} />
		</a>
	</div>
)
