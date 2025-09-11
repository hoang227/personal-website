const boldText = 'font-medium text-primary'
const coloredText =
	'font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'

export const MusicDescription = () => (
	<div className='mb-8 animate-slide-up animation-delay-200'>
		<p className='font-light text-sm md:text-lg font-inter text-muted-foreground leading-relaxed max-w-full'>
			Music has always been where I go to feel grounded. I’m drawn to the kind
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
	</div>
)
