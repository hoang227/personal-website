import { useState } from 'react'
import { Button } from '@/components/ui/button'

const boldText = 'font-medium text-primary'
const coloredText =
	'font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'

export const ShotsDescription = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const fullText = (
		<p className='font-light text-sm md:text-lg font-inter text-muted-foreground leading-relaxed max-w-full'>
			Photography is my way of seeing the world{' '}
			<span className={boldText}>differently</span>, of turning{' '}
			<span className={boldText}>ordinary</span> scenes into{' '}
			<span className={coloredText}>visual stories</span>. It invites a kind of{' '}
			<span className={boldText}>attention</span> that everyday life often
			rushes past, the way <span className={coloredText}>sunlight filters</span>{' '}
			through a window, the <span className={boldText}>quiet connection</span>{' '}
			between two people and the unnoticed{' '}
			<span className={boldText}>geometry</span> of daily life. Each image holds
			a <span className={boldText}>feeling</span>, a{' '}
			<span className={boldText}>memory</span>, and a{' '}
			<span className={coloredText}>story</span> waiting to be uncovered. It's
			not just about capturing what's there, but about{' '}
			<span className={coloredText}>revealing</span> something{' '}
			<span className={boldText}>deeper</span>, something{' '}
			<span className={boldText}>honest</span>,{' '}
			<span className={boldText}>fleeting</span>, and often{' '}
			<span className={boldText}>unspoken</span>.
		</p>
	)

	const truncatedText = (
		<p className='font-light text-sm md:text-lg font-inter text-muted-foreground leading-relaxed max-w-full'>
			Photography is my way of seeing the world{' '}
			<span className={boldText}>differently</span>, of turning{' '}
			<span className={boldText}>ordinary</span> scenes into{' '}
			<span className={coloredText}>visual stories</span>...
		</p>
	)

	return (
		<div className='mb-5 sm:mb-8 animate-slide-up animation-delay-200'>
			{/* Desktop: Always show full text */}
			<div className='hidden sm:block'>{fullText}</div>

			{/* Mobile: Show truncated/expanded text with toggle */}
			<div className='sm:hidden'>
				{isExpanded ? fullText : truncatedText}
				<Button
					variant='ghost'
					size='sm'
					onClick={() => setIsExpanded(!isExpanded)}
					className='mt-2 text-xs text-muted-foreground hover:text-foreground p-0 h-auto font-inter'>
					{isExpanded ? 'Show less' : 'Read more'}
				</Button>
			</div>
		</div>
	)
}
