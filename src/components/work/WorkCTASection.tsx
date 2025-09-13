import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface WorkCTASectionProps {
	title?: string
	description?: string
	buttonText?: string
}

export default function WorkCTASection({
	title = "Let's Work Together",
	description = "I'm always interested in new opportunities and exciting projects.",
	buttonText = 'Get In Touch',
}: WorkCTASectionProps) {
	return (
		<div className='mt-20 text-center'>
			<div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-border/50'>
				<h3 className='font-inter font-bold text-2xl md:text-3xl text-foreground mb-4'>
					{title}
				</h3>
				<p className='text-muted-foreground font-inter text-lg mb-6 max-w-2xl mx-auto'>
					{description}
				</p>
				<Link
					to='/contact'
					onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
					className='w-full sm:w-auto'>
					<Button
						size='lg'
						className='w-full sm:w-auto text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
						{buttonText}
					</Button>
				</Link>
			</div>
		</div>
	)
}
