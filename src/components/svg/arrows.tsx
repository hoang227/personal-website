import React from 'react'

export function RightArrowSvg({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
			{...props}>
			<path d='M5 12h13M12 5l7 7-7 7' />
		</svg>
	)
}
