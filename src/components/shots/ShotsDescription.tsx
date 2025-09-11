const boldText = 'font-medium text-primary'
const coloredText =
	'font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'

export const ShotsDescription = () => (
	<div className='mb-8 animate-slide-up animation-delay-200'>
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
	</div>
)
