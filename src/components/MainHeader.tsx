import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
} from '@/components/ui/navigation-menu'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Work',
		path: '/work',
	},
]

const interestsItems = [
	{
		title: '📸 Shots',
		path: '/shots',
	},
	{
		title: '🎵 Music',
		path: '/music',
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
								<StyledNavLink to={item.path}>{item.title}</StyledNavLink>
							</NavigationMenuItem>
						))}

						{/* Interests Dropdown */}
						<NavigationMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className='flex items-center gap-1 px-4 py-2 text-md font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
										Interests
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='start' className='w-32'>
									{interestsItems.map((item) => (
										<DropdownMenuItem key={item.title} asChild>
											<StyledNavLink to={item.path}>{item.title}</StyledNavLink>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			{/* Hamburger Button */}
			<div className='md:hidden'>
				<Button variant='ghost' size='icon' onClick={toggleMenu}>
					<Menu />
				</Button>
			</div>

			{/* Right Side - Theme Toggle (Desktop) and Mobile Menu */}
			<div className='flex items-center gap-2'>
				{/* Theme Toggle - Hidden on mobile */}
				<ModeToggle />

				{/* Mobile Menu */}
				<MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
			</div>
		</div>
	)
}

export default MainHeader
