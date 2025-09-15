import { useState, useEffect } from 'react'

export const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
		null
	)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		let lastScrollY = window.scrollY
		let ticking = false

		const updateScrollDirection = () => {
			const scrollY = window.scrollY
			const direction = scrollY > lastScrollY ? 'down' : 'up'

			// Always update visibility based on scroll position and direction
			if (Math.abs(scrollY - lastScrollY) > 10) {
				setScrollDirection(direction)
				setIsVisible(direction === 'up' || scrollY < 100)
			}

			lastScrollY = scrollY > 0 ? scrollY : 0
			ticking = false
		}

		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(updateScrollDirection)
				ticking = true
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return { scrollDirection, isVisible }
}
