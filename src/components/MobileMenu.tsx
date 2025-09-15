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
	{ title: 'Contact', path: '/contact', icon: '📧' },
]

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, isOpen }) => {
	return (
		<>
			{/* Mobile Menu Overlay */}
			{isOpen && <div className='fixed inset-0 bg-black/50 z-[100]' />}

			{/* Mobile Menu Panel */}
			<div
				className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-[110] transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<Button
					variant='ghost'
					size='icon'
					onClick={closeMenu}
					className='absolute top-0 right-0 m-2'>
					<X className='h-7 w-7' />
				</Button>
				<div className='px-6 py-16'>
					<nav className='space-y-6'>
						{navMenuItems.map((item, index) => (
							<StyledNavLink
								key={item.title}
								to={item.path}
								onClick={closeMenu}
								className={`block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
									isOpen ? 'animate-slide-in-right' : ''
								}`}
								style={{ animationDelay: `${(index + 1) * 80}ms` }}>
								<span className='text-sm opacity-80 mr-2'>{item.icon}</span>
								{item.title}
							</StyledNavLink>
						))}

						{/* Resume Link */}
						<StyledNavLink
							to='/resume'
							onClick={closeMenu}
							className={`block py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white text-left transition-all duration-300 ${
								isOpen ? 'animate-slide-in-right' : ''
							}`}
							style={{ animationDelay: `${(navMenuItems.length + 1) * 80}ms` }}>
							<span className='text-sm opacity-80 mr-2'>📄</span>
							<span className='text-blue-500 font-medium'>Resume</span>
						</StyledNavLink>
					</nav>
				</div>
			</div>
		</>
	)
}

export default MobileMenu
