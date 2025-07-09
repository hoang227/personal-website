import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface CTASectionProps {
	title?: string
	description?: string
	primaryButtonText?: string
	primaryButtonLink?: string
	secondaryButtonText?: string
	email?: string
}

export default function CTASection({
	title = "Let's Work Together",
	description = "I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.",
	primaryButtonText = 'View My Work',
	primaryButtonLink = '/work',
	secondaryButtonText = 'Get In Touch',
	email = 'your.email@example.com',
}: CTASectionProps) {
	return (
		<div className='mt-20 text-center animate-slide-up animation-delay-600'>
			<div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-border/50'>
				<h3 className='font-inter font-bold text-2xl md:text-3xl text-foreground mb-4'>
					{title}
				</h3>
				<p className='text-muted-foreground font-inter text-lg mb-6 max-w-2xl mx-auto'>
					{description}
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Link to={primaryButtonLink}>
						<Button
							size='lg'
							className='text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
							{primaryButtonText}
						</Button>
					</Link>
					<Button
						variant='outline'
						size='lg'
						className='text-lg font-inter font-medium px-8 py-6 h-auto border-2 hover:bg-accent transition-all duration-300 transform hover:scale-105'
						onClick={() => window.open(`mailto:${email}`, '_blank')}>
						{secondaryButtonText}
					</Button>
				</div>
			</div>
		</div>
	)
}
