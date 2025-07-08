import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './store/theme-context'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import WorkPage from './pages/Work'
import AboutPage from './pages/About'
import ShotsPage from './pages/Shots'
import MusicPage from './pages/Music'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'work', element: <WorkPage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'shots', element: <ShotsPage /> },
			{ path: 'music', element: <MusicPage /> },
		],
	},
])

function App() {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
