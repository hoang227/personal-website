export interface SpotifyAlbum {
	id: string
	name: string
	artists: Array<{ name: string }>
	images: Array<{ url: string; width: number; height: number }>
	external_urls: {
		spotify: string
	}
	release_date: string
	total_tracks: number
	album_type: string
}

export interface FavoriteAlbumsSectionProps {
	albumIds: string[]
	title?: string
}
