import { useEffect, useState } from 'react'
import { getAlbums } from '@/lib/spotify'
import type { FavoriteAlbumsSectionProps, SpotifyAlbum } from './types'
import { AlbumSkeleton } from './AlbumSkeleton'
import { ErrorState } from './ErrorState'
import { EmptyState } from './EmptyState'
import { AlbumCard } from './AlbumCard'

export default function FavoriteAlbumsSection({
	albumIds,
	title = 'Favorite Albums',
}: FavoriteAlbumsSectionProps) {
	const [albums, setAlbums] = useState<SpotifyAlbum[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchAlbums = async () => {
			try {
				setError(null)
				const albumData = await getAlbums(albumIds)
				setAlbums(albumData)
			} catch (error) {
				console.error('Error fetching albums:', error)
				setError('Failed to load albums')
			} finally {
				setLoading(false)
			}
		}

		if (albumIds.length > 0) {
			fetchAlbums()
		} else {
			setLoading(false)
		}
	}, [albumIds])

	// Loading state
	if (loading) {
		return (
			<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
				<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
					{title}
				</h4>
				<div className='space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:space-y-0'>
					{[...Array(6)].map((_, i) => (
						<AlbumSkeleton key={i} />
					))}
				</div>
			</div>
		)
	}

	// Error state
	if (error) {
		return <ErrorState title={title} error={error} />
	}

	// Empty state
	if (albums.length === 0) {
		return <EmptyState title={title} />
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
