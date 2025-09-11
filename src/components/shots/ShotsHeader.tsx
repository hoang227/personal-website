interface ShotsHeaderProps {
	title?: string
	description?: string
}

export default function ShotsHeader({
	title = 'Shots',
	description = 'My Photography Collection',
}: ShotsHeaderProps) {
	return (
		<div className='lg:mb-6 animate-slide-up'>
			<h1 className='font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4'>
				{title}
			</h1>
			<p className='text-base md:text-lg font-inter text-muted-foreground max-w-3xl'>
				{description}
			</p>
		</div>
	)
}
