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
	return (
		<div className='flex items-center justify-between w-full'>
			{/* Navigation Menu - Left Side */}
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

			{/* Theme Toggle - Right Side */}
			<ModeToggle />
		</div>
	)
}

export default MainHeader
