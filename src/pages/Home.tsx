import { RightArrowSvg } from '@/components/svg/arrows'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import profilePic from '@/assets/images/profile pic.jpg'

export default function HomePage() {
	return (
		<div className='h-full flex flex-col justify-center px-8 pb-12 lg:pt-12'>
			{/* Hero Section */}
			<div className='max-w-6xl mx-auto'>
				{/* Profile and Heading Section */}
				<div className='flex flex-col md:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16'>
					{/* Profile Picture */}
					<div className='flex-shrink-0 animate-slide-up'>
						<img
							src={profilePic}
							alt='Profile picture'
							className='w-40 h-40 lg:w-52 lg:h-52 rounded-full object-cover object-top shadow-2xl border-4 border-white dark:border-gray-800'
							style={{ objectPosition: 'center 40%' }}
						/>
					</div>

					{/* Main Heading */}
					<div className='space-y-4 text-center lg:text-left'>
						<h1 className='font-inter font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground animate-slide-up leading-tight'>
							Hello, I'm Hoang.
						</h1>
						<h2 className='font-inter font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground animate-slide-up animation-delay-200 leading-tight'>
							I'm a software developer.
						</h2>
					</div>
				</div>

				{/* Description */}
				<div className='mb-16 max-w-4xl space-y-6'>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-400'>
						I am a recent graduate from the{' '}
						<span className='font-medium text-foreground'>
							National University of Singapore (NUS)
						</span>{' '}
						with a passion for{' '}
						<span className='font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
							web development
						</span>
						. I love creating simple yet powerful tools that enhance quality of
						life.
					</p>
					<p className='text-md md:text-lg lg:text-xl font-inter font-extralight leading-relaxed text-foreground animate-slide-up animation-delay-600'>
						<span className='font-medium text-foreground'>Simplicity</span>,{' '}
						<span className='font-medium text-foreground'>
							beautiful design
						</span>{' '}
						and{' '}
						<span className='font-medium text-foreground'>
							clear communication
						</span>{' '}
						are qualities that guide me in problem-solving, designing, and in
						life.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800'>
					<Link to='/about'>
						<Button
							size='lg'
							className='text-white text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
							Learn more about me
							<RightArrowSvg className='ml-2 w-5 h-5' />
						</Button>
					</Link>
					<Link to='/work'>
						<Button
							variant='default'
							size='lg'
							className='bg-black dark:bg-white text-white dark:text-black text-lg font-inter font-medium px-8 py-6 h-auto dark:hover:bg-gray-300 hover:bg-black/70 transition-all duration-300 transform hover:scale-105'>
							View my work
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
