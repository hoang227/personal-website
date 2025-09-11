// Spotify API integration for public album/track data
// You'll need to set up a Spotify App and get these credentials
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

// Types for Spotify data
interface SpotifyAlbum {
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

interface SpotifyTrack {
	id: string
	name: string
	artists: Array<{ name: string }>
	album: {
		name: string
		images: Array<{ url: string; width: number; height: number }>
	}
	external_urls: {
		spotify: string
	}
	duration_ms: number
	popularity: number
}

// Get access token using client credentials flow (for public data)
async function getAccessToken(): Promise<string> {
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(
				`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
			)}`,
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
		}),
	})

	const data = await response.json()
	return data.access_token
}

// Fetch album by ID
export async function getAlbum(albumId: string): Promise<SpotifyAlbum | null> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/albums/${albumId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to fetch album: ${response.status}`)
		}

		return await response.json()
	} catch (error) {
		console.error('Error fetching album:', error)
		return null
	}
}

// Fetch multiple albums by IDs
export async function getAlbums(albumIds: string[]): Promise<SpotifyAlbum[]> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/albums?ids=${albumIds.join(',')}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to fetch albums: ${response.status}`)
		}

		const data = await response.json()
		return data.albums.filter((album: SpotifyAlbum | null) => album !== null)
	} catch (error) {
		console.error('Error fetching albums:', error)
		return []
	}
}

// Fetch track by ID
export async function getTrack(trackId: string): Promise<SpotifyTrack | null> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/tracks/${trackId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to fetch track: ${response.status}`)
		}

		return await response.json()
	} catch (error) {
		console.error('Error fetching track:', error)
		return null
	}
}

// Fetch multiple tracks by IDs
export async function getTracks(trackIds: string[]): Promise<SpotifyTrack[]> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/tracks?ids=${trackIds.join(',')}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to fetch tracks: ${response.status}`)
		}

		const data = await response.json()
		return data.tracks.filter((track: SpotifyTrack | null) => track !== null)
	} catch (error) {
		console.error('Error fetching tracks:', error)
		return []
	}
}

// Search for albums
export async function searchAlbums(
	query: string,
	limit: number = 10
): Promise<SpotifyAlbum[]> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/search?q=${encodeURIComponent(
				query
			)}&type=album&limit=${limit}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to search albums: ${response.status}`)
		}

		const data = await response.json()
		return data.albums.items
	} catch (error) {
		console.error('Error searching albums:', error)
		return []
	}
}

// Search for tracks
export async function searchTracks(
	query: string,
	limit: number = 10
): Promise<SpotifyTrack[]> {
	try {
		const token = await getAccessToken()
		const response = await fetch(
			`https://api.spotify.com/v1/search?q=${encodeURIComponent(
				query
			)}&type=track&limit=${limit}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to search tracks: ${response.status}`)
		}

		const data = await response.json()
		return data.tracks.items
	} catch (error) {
		console.error('Error searching tracks:', error)
		return []
	}
}
