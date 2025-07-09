import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface StyledNavLinkProps {
	to: string
	children: React.ReactNode
	onClick?: () => void
	className?: string
	style?: React.CSSProperties
}

const StyledNavLink: React.FC<StyledNavLinkProps> = ({
	to,
	children,
	onClick,
	className,
	style,
	...props
}) => {
	return (
		<NavLink
			data-slot='navigation-menu-link'
			className={({ isActive }) =>
				cn(
					'px-4 py-2 text-md font-medium transition-colors duration-200 rounded-md',
					'text-muted-foreground hover:text-foreground',
					'focus-visible:outline-none focus-visible	:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					isActive && 'text-foreground font-semibold',
					className
				)
			}
			onClick={onClick}
			to={to}
			style={style}
			{...props}>
			{children}
		</NavLink>
	)
}

export default StyledNavLink
