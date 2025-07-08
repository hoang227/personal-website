import { Button } from '@/components/ui/button'
import { RightArrowSvg } from '@/components/svg/arrows'

export default function InterestsPage() {
	return (
		<div className='h-full flex flex-col justify-center px-8 lg:p-12'>
			{/* Hero Section */}
			<div className='max-w-6xl mx-auto'>
				{/* Main Heading */}
				<div className='mb-16 space-y-4'>
					<h1 className='font-inter font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground animate-slide-up leading-tight'>
						Interests
					</h1>
					<h2 className='font-inter font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground animate-slide-up animation-delay-200 leading-tight'>
						Photography & Music
					</h2>
				</div>

				{/* Photography Section */}
				<div className='mb-20 space-y-8'>
					<h3 className='font-inter font-bold text-3xl md:text-4xl text-foreground animate-slide-up animation-delay-400'>
						Photography
					</h3>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-600 max-w-4xl'>
						I love capturing moments through the lens. Photography allows me to
						see the world from different perspectives and share stories through
						visual storytelling.
					</p>

					{/* Photo Grid Placeholder */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up animation-delay-800'>
						{/* Photo Placeholders */}
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 1
							</p>
						</div>
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 2
							</p>
						</div>
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 3
							</p>
						</div>
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 4
							</p>
						</div>
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 5
							</p>
						</div>
						<div className='aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center'>
							<p className='text-gray-500 dark:text-gray-400 font-inter'>
								Photo 6
							</p>
						</div>
					</div>
				</div>

				{/* Music Section */}
				<div className='mb-16 space-y-8'>
					<h3 className='font-inter font-bold text-3xl md:text-4xl text-foreground animate-slide-up animation-delay-1000'>
						Music
					</h3>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-1200 max-w-4xl'>
						Music is a huge part of my life. I love discovering new artists,
						exploring different genres, and sharing the songs that inspire me.
					</p>

					{/* Music Recommendations */}
					<div className='space-y-6 animate-slide-up animation-delay-1400'>
						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
							<h4 className='font-inter font-semibold text-xl text-foreground mb-2'>
								Currently Listening
							</h4>
							<p className='text-gray-600 dark:text-gray-300 font-inter'>
								Share what you're currently enjoying...
							</p>
						</div>

						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
							<h4 className='font-inter font-semibold text-xl text-foreground mb-2'>
								Favorite Albums
							</h4>
							<p className='text-gray-600 dark:text-gray-300 font-inter'>
								Your top albums and why they matter to you...
							</p>
						</div>

						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
							<h4 className='font-inter font-semibold text-xl text-foreground mb-2'>
								Music Discovery
							</h4>
							<p className='text-gray-600 dark:text-gray-300 font-inter'>
								How you discover new music and recommendations...
							</p>
						</div>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-1600'>
					<Button
						size='lg'
						className='text-white text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
						View Photography Portfolio
						<RightArrowSvg className='ml-2 w-5 h-5' />
					</Button>
					<Button
						variant='default'
						size='lg'
						className='bg-black dark:bg-white text-white dark:text-black text-lg font-inter font-medium px-8 py-6 h-auto dark:hover:bg-gray-300 hover:bg-black/70 transition-all duration-300 transform hover:scale-105'>
						Music Playlist
					</Button>
				</div>
			</div>
		</div>
	)
}
