interface WorkHeaderProps {
	title?: string
	description?: string
}

export default function WorkHeader({
	title = 'My Work',
	description = 'A collection of projects that showcase my passion for creating meaningful digital experiences.',
}: WorkHeaderProps) {
	return (
		<div className='mb-12 animate-slide-up'>
			<h1 className='font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4'>
				{title}
			</h1>
			<p className='text-base md:text-lg font-inter text-muted-foreground max-w-3xl'>
				{description}
			</p>
		</div>
	)
}
