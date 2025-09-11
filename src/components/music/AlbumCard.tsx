import type { Album } from '@/data/musicData'
import { MobileAlbumCard } from './MobileAlbumCard'
import { DesktopAlbumCard } from './DesktopAlbumCard'

interface AlbumCardProps {
	album: Album
}

export const AlbumCard = ({ album }: AlbumCardProps) => (
	<div className='group'>
		<a
			href={album.spotifyUrl}
			target='_blank'
			rel='noopener noreferrer'
			className='block'>
			<MobileAlbumCard album={album} />
			<DesktopAlbumCard album={album} />
		</a>
	</div>
)
