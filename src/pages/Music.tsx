import { Button } from '@/components/ui/button'
import MusicHeader from '@/components/music/MusicHeader'
import { MusicDescription } from '@/components/music/MusicDescription'
import FavoriteAlbumsSection from '@/components/music/FavoriteAlbumsSection'
import { musicData } from '@/data/musicData'

export default function MusicPage() {
	return (
		<div className='h-full lg:pb-12 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-7xl mx-auto'>
				{/* Header with Spotify Button */}
				<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 lg:mb-4'>
					<div className='flex-1'>
						<MusicHeader
							title={musicData.header.title}
							description={musicData.header.description}
						/>
					</div>
					<div className='flex-shrink-0 animate-slide-up animation-delay-200'>
						<a
							href='https://open.spotify.com/user/21lz6lh7u57jyx76372fti4ta'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block'>
							<Button
								size='default'
								className='rounded-full text-white text-sm font-inter font-medium px-12 py-3 h-auto bg-[#1DB954] hover:bg-[#1ed760] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0'>
								<svg
									className='w-5 h-5 mr-2'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
								</svg>
								Follow me on Spotify
							</Button>
						</a>
					</div>
				</div>

				{/* Music Description */}
				<MusicDescription />

				<div className='mb-16 space-y-8'>
					<div className='space-y-6 animate-slide-up animation-delay-200'>
						{/* Favorite Albums */}
						<FavoriteAlbumsSection
							albums={musicData.favoriteAlbums}
							title='Current Favorite Albums'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
