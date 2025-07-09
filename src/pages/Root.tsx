import { Outlet } from 'react-router-dom'

import MainHeader from '@/components/MainHeader'

function RootLayout() {
	return (
		<div className='min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden'>
			{/* Dotted Background Pattern */}
			<div
				className='fixed pt-12 inset-0 opacity-50 dark:opacity-60'
				style={{
					backgroundImage:
						'radial-gradient(circle, rgba(120,120,120,1) 1.4px, transparent 1px)',
					backgroundSize: '60px 60px',
				}}></div>

			{/* Navigation */}
			<nav className='relative z-10 flex justify-between items-center px-8 pt-10 pb-4 md:py-10'>
				{/* Navigation Menu */}
				<MainHeader />
			</nav>

			{/* Main Content */}
			<main className='mx-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default RootLayout
