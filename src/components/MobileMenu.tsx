import { X } from 'lucide-react'
import StyledNavLink from './StyledNavLink'
import { Button } from './ui/button'

interface MobileMenuProps {
	isOpen: boolean
	closeMenu: () => void
}

const navMenuItems = [
	{ title: 'Home', path: '/', icon: '🏠' },
	{ title: 'About', path: '/about', icon: '🙋🏻‍♂️' },
	{ title: 'Work', path: '/work', icon: '💼' },
	{ title: 'Music', path: '/music', icon: '🎵' },
	{ title: 'Shots', path: '/shots', icon: '📸' },
]

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, isOpen }) => {
	return (
		<>
			{/* Mobile Menu Overlay */}
			{isOpen && <div className='fixed inset-0 bg-black/50 z-40' />}

			{/* Mobile Menu Panel */}
			<div
				className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<Button
					variant='ghost'
					size='icon'
					onClick={closeMenu}
					className='absolute top-0 right-0 m-2'>
					<X className='h-7 w-7' />
				</Button>
				<div className='px-6 py-12'>
					<nav className='space-y-4'>
						{navMenuItems.map((item, index) => (
							<StyledNavLink
								key={item.title}
								to={item.path}
								onClick={closeMenu}
								className={`block py-3 px-4 rounded-lg hover:bg-accent ${
									isOpen ? 'animate-slide-in-right' : ''
								}`}
								style={{ animationDelay: `${(index + 1) * 80}ms` }}>
								<span className='text-sm opacity-80 mr-2'>{item.icon}</span>
								{item.title}
							</StyledNavLink>
						))}
					</nav>
				</div>
			</div>
		</>
	)
}

export default MobileMenu
