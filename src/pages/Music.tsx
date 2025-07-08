import { Button } from '@/components/ui/button'
import { RightArrowSvg } from '@/components/svg/arrows'

export default function MusicPage() {
	return (
		<div className='h-full flex flex-col justify-center px-8 lg:p-12'>
			<div className='max-w-6xl mx-auto'>
				<div className='mb-16 space-y-4'>
					<h1 className='font-inter font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground animate-slide-up leading-tight'>
						Music
					</h1>
					<h2 className='font-inter font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground animate-slide-up animation-delay-200 leading-tight'>
						Sound & Inspiration
					</h2>
				</div>

				<div className='mb-16 space-y-8'>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-400 max-w-4xl'>
						Music is a huge part of my life. I love discovering new artists,
						exploring different genres, and sharing the songs that inspire me.
					</p>

					<div className='space-y-6 animate-slide-up animation-delay-600'>
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

				<div className='flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800'>
					<Button
						size='lg'
						className='text-white text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
						My Playlist
						<RightArrowSvg className='ml-2 w-5 h-5' />
					</Button>
				</div>
			</div>
		</div>
	)
}
