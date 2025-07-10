interface ProjectScreenshotProps {
	image?: string
	emoji?: string
	alt?: string
	className?: string
}

export default function ProjectScreenshot({
	image,
	emoji = '💻',
	alt = 'Project preview',
	className = '',
}: ProjectScreenshotProps) {
	const showEmoji = !image
	return (
		<div
			className={`aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ${className}`}>
			{!showEmoji ? (
				<img
					src={image}
					alt={alt}
					className='w-full h-full object-cover'
					onError={(e) => {
						const target = e.target as HTMLImageElement
						target.style.display = 'none'
						// fallback to emoji
						target.parentNode?.appendChild(
							Object.assign(document.createElement('div'), {
								className: className.includes('text-4xl')
									? 'text-4xl'
									: 'text-2xl',
								textContent: emoji,
							})
						)
					}}
				/>
			) : (
				<div
					className={className.includes('text-4xl') ? 'text-4xl' : 'text-2xl'}>
					{emoji}
				</div>
			)}
		</div>
	)
}
