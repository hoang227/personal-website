export interface Project {
	id: number
	title: string
	description: string
	technologies: string[]
	category: string
	github?: string
	live?: string
	featured?: boolean
	image?: string
	emoji?: string
}

function generateProjectId(): number {
	return Math.floor(Math.random() * 900000) + 100000
}

export const workData = {
	header: {
		title: 'My Work',
		description:
			'A collection of projects that showcase my passion for creating meaningful digital experiences.',
	},

	projects: [
		// REISE
		{
			id: generateProjectId(),
			title: 'REISE Customizable Photobook E-shop',
			description:
				'A customizable photobook web platform using Shopify, enabling users to create and order personalized photobooks online.',
			technologies: ['Shopify', 'Liquid', 'JavaScript', 'TypeScript', 'CSS'],
			category: 'E-Commerce',
			github: 'https://github.com/yourusername/reise',
			live: 'https://reise-photobooks.com',
			featured: true,
			emoji: '📸',
		},
		// Task Management App
		{
			id: generateProjectId(),
			title: 'Task Management App',
			description:
				'A collaborative task management application with real-time updates.',
			technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
			category: 'Full Stack',
			github: 'https://github.com/yourusername/task-manager',
			live: 'https://task-manager-demo.com',
			featured: false,
			emoji: '📋',
		},
		// Portfolio Website
		{
			id: generateProjectId(),
			title: 'Portfolio Website',
			description:
				'A modern, responsive portfolio website with dark mode and animations.',
			technologies: ['React', 'TypeScript', 'Tailwind CSS'],
			category: 'Frontend',
			github: 'https://github.com/yourusername/portfolio',
			live: 'https://your-portfolio.com',
			featured: false,
			emoji: '🎨',
		},
		// Dating App
		{
			id: generateProjectId(),
			title: 'Dating App',
			description:
				'A mobile dating app focusing on user experience and real-time features for meaningful connections.',
			technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
			category: 'Mobile',
			github: 'https://github.com/yourusername/dating-app',
			live: 'https://dating-app-demo.com',
			featured: false,
			emoji: '💕',
		},
		// Weather Dashboard
		{
			id: generateProjectId(),
			title: 'Weather Dashboard',
			description:
				'A beautiful weather dashboard with real-time data and interactive charts.',
			technologies: ['React', 'Chart.js', 'OpenWeather API'],
			category: 'Frontend',
			github: 'https://github.com/yourusername/weather-dashboard',
			live: 'https://weather-dashboard-demo.com',
			featured: false,
			emoji: '🌤️',
		},
	] as Project[],

	cta: {
		title: 'Interested in Working Together?',
		description:
			"I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!",
		buttonText: 'Get In Touch',
		email: 'hoangg227@gmail.com',
	},
}
