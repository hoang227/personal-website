import { useState } from 'react'
import { Button } from '@/components/ui/button'

const boldText = 'font-medium text-primary'
const coloredText =
	'font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'

export const MusicDescription = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const fullText = (
		<p className='font-light text-sm md:text-lg font-inter text-muted-foreground leading-relaxed max-w-full'>
			Music has always been where I go to feel grounded. I'm drawn to the kind
			of sound that carries emotion, like the tenderness of{' '}
			<span className={boldText}>indie pop</span>, the smooth rhythms of{' '}
			<span className={boldText}>R&B</span>, the infectious energy of{' '}
			<span className={boldText}>funk</span>, and the layered beauty of{' '}
			<span className={boldText}>jazz</span>. Some of my favorite artists are{' '}
			<span className={boldText}>Lizzy McAlpine</span>,{' '}
			<span className={boldText}>H.E.R.</span>, and{' '}
			<span className={boldText}>Eloise </span>
			not just because of their sound but the stories they tell . Beyond just
			listening, I'm passionate about creating music myself, I sing{' '}
			<span className={coloredText}>a cappella</span> and write my own
			arrangements, finding joy in the pure expression of voice and harmony.
		</p>
	)

	const truncatedText = (
		<p className='font-light text-sm md:text-lg font-inter text-muted-foreground leading-relaxed max-w-full'>
			Music has always been where I go to feel grounded. I'm drawn to the kind
			of sound that carries emotion...
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
