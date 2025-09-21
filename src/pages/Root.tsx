import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import MainHeader from '@/components/MainHeader'
import MobileMenu from '@/components/MobileMenu'
import ScrollToTop from '@/components/ScrollToTop'
import { useScrollDirection } from '@/hooks/useScrollDirection'

function RootLayout() {
	const { isVisible } = useScrollDirection()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<div className='min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden'>
			{/* Scroll to top on route change */}
			<ScrollToTop />

			{/* Dotted Background Pattern */}
			<div
				className='fixed pt-12 inset-0 opacity-50 dark:opacity-60'
				style={{
					backgroundImage:
						'radial-gradient(circle, rgba(120,120,120,1) 1.4px, transparent 1px)',
					backgroundSize: '60px 60px',
				}}></div>

			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 transition-transform duration-300 ${
					isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}>
				<div className='flex justify-between items-center px-8 py-2 890:py-0'>
					{/* Navigation Menu */}
					<MainHeader toggleMobileMenu={toggleMobileMenu} />
				</div>
			</nav>

			{/* Main Content */}
			<main className='mx-6 pt-8 890:pt-14'>
				<Outlet />
			</main>

			{/* Footer */}
			<footer className='mt-8 pb-8 px-6 text-center'>
				<div className='max-w-6xl mx-auto'>
					<p className='text-sm text-gray-600 dark:text-gray-400 font-inter'>
						© 2025 Nguyen Minh Hoang. All rights reserved.
					</p>
				</div>
			</footer>

			{/* Mobile Menu - Outside nav to avoid positioning constraints */}
			<MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
		</div>
	)
}

export default RootLayout
