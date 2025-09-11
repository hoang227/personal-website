import type { SpotifyAlbum } from './types'
import { MobileAlbumCard } from './MobileAlbumCard'
import { DesktopAlbumCard } from './DesktopAlbumCard'

interface AlbumCardProps {
	album: SpotifyAlbum
}

export const AlbumCard = ({ album }: AlbumCardProps) => (
	<div className='group'>
		<a
			href={album.external_urls.spotify}
			target='_blank'
			rel='noopener noreferrer'
			className='block'>
			<MobileAlbumCard album={album} />
			<DesktopAlbumCard album={album} />
		</a>
	</div>
)
