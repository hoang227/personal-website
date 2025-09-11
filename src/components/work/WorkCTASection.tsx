import { Button } from '@/components/ui/button'

interface WorkCTASectionProps {
	title?: string
	description?: string
	buttonText?: string
	email?: string
}

export default function WorkCTASection({
	title = 'Interested in Working Together?',
	description = "I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!",
	buttonText = 'Get In Touch',
	email = 'hoangg227@gmail.com',
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
				<Button
					size='lg'
					className='w-full sm:w-auto text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
					onClick={() => window.open(`mailto:${email}`, '_blank')}>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}
