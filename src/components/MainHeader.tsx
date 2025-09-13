import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
} from '@/components/ui/navigation-menu'

import { ModeToggle } from './ModeToggle'
import StyledNavLink from './StyledNavLink'
import MobileMenu from './MobileMenu'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

const navMenuItems = [
	{
		title: 'Home',
		path: '/',
		icon: '🏠',
	},
	{
		title: 'About',
		path: '/about',
		icon: '📋',
	},
	{
		title: 'Work',
		path: '/work',
		icon: '💼',
	},
	{
		title: 'Music',
		path: '/music',
		icon: '🎵',
	},
	{
		title: 'Shots',
		path: '/shots',
		icon: '📸',
	},
]

const MainHeader: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<div className='flex items-center justify-between w-full'>
			{/* Navigation Menu - Left Side (Hidden on mobile) */}

			<div className='hidden md:block'>
				<NavigationMenu>
					<NavigationMenuList className='flex space-x-1'>
						{navMenuItems.map((item) => (
							<NavigationMenuItem key={item.title}>
								<StyledNavLink className='flex items-center' to={item.path}>
									<span className='text-sm opacity-80 mr-2'>{item.icon}</span>
									{item.title}
								</StyledNavLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			{/* Hamburger Button */}
			<div className='md:hidden'>
				<Button variant='ghost' size='icon' onClick={toggleMenu}>
					<Menu />
				</Button>
			</div>

			{/* Right Side - Resume Button, Theme Toggle (Desktop) and Mobile Menu */}
			<div className='flex items-center gap-2'>
				{/* Resume Button - Hidden on mobile */}
				<StyledNavLink to='/resume'>
					<Button
						variant='ghost'
						size='sm'
						className='hidden md:flex items-center gap-2 text-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-500'>
						📄 Resume
					</Button>
				</StyledNavLink>

				{/* Theme Toggle - Hidden on mobile */}
				<ModeToggle />

				{/* Mobile Menu */}
				<MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
			</div>
		</div>
	)
}

export default MainHeader
