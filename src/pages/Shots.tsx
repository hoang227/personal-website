import { Button } from '@/components/ui/button'
import { RightArrowSvg } from '@/components/svg/arrows'

export default function ShotsPage() {
	return (
		<div className='h-full flex flex-col justify-center px-8 lg:p-12'>
			<div className='max-w-6xl mx-auto'>
				<div className='mb-16 space-y-4'>
					<h1 className='font-inter font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground animate-slide-up leading-tight'>
						Shots
					</h1>
					<h2 className='font-inter font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground animate-slide-up animation-delay-200 leading-tight'>
						Photography Collection
					</h2>
				</div>

				<div className='mb-16 space-y-8'>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-400 max-w-4xl'>
						I love capturing moments through the lens. Photography allows me to
						see the world from different perspectives and share stories through
						visual storytelling.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up animation-delay-600'>
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

				<div className='flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800'>
					<Button
						size='lg'
						className='text-white text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
						View Full Portfolio
						<RightArrowSvg className='ml-2 w-5 h-5' />
					</Button>
				</div>
			</div>
		</div>
	)
}
