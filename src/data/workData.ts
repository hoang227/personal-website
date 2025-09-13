import { SKILLS, type SkillName } from './skillConstants'

export interface Project {
	id: number
	title: string
	description: string
	technologies: SkillName[]
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
				'A customizable photobook web store hosted by Shopify, enabling users to create and order personalized photobooks.',
			technologies: [
				SKILLS.TYPESCRIPT,
				SKILLS.SHOPIFY,
				SKILLS.HYDROGEN,
				SKILLS.TAILWIND_CSS_ALT,
				SKILLS.FABRIC_JS,
				SKILLS.JAVASCRIPT,
				SKILLS.CSS,
			],
			category: 'E-Commerce',
			github: 'https://github.com/hoang227/REISE-storefront',
			live: 'https://photobook-06bc4488c3eaac14ed3a.o2.myshopify.dev',
			featured: true,
			emoji: '📸',
			image: '/screenshots/reise-sc.png',
		},
		// Task Management App
		// {
		// 	id: generateProjectId(),
		// 	title: 'Task Management App',
		// 	description:
		// 		'A collaborative task management application with real-time updates.',
		// 	technologies: [
		// 		SKILLS.REACT_JS,
		// 		SKILLS.TYPESCRIPT,
		// 		SKILLS.SOCKET_IO,
		// 		SKILLS.MONGODB,
		// 	],
		// 	category: 'Full Stack',
		// 	github: 'https://github.com/yourusername/task-manager',
		// 	live: 'https://task-manager-demo.com',
		// 	featured: false,
		// 	emoji: '📋',
		// },
		// Personal Website
		{
			id: generateProjectId(),
			title: 'Personal Website',
			description: 'My personal website.',
			technologies: [
				SKILLS.REACT_JS,
				SKILLS.TYPESCRIPT,
				SKILLS.TAILWIND_CSS_ALT,
			],
			category: 'Frontend',
			github: 'https://github.com/hoang227/personal-website',
			live: 'https://www.hoangcodes.com/',
			featured: false,
			emoji: '🎨',
			image: '/screenshots/portfolio-sc.png',
		},
		// Dating App
		// {
		// 	id: generateProjectId(),
		// 	title: 'Dating App',
		// 	description:
		// 		'A mobile dating app focusing on user experience and real-time features for meaningful connections.',
		// 	technologies: [
		// 		SKILLS.REACT_NATIVE,
		// 		SKILLS.FIREBASE,
		// 		SKILLS.SOCKET_IO,
		// 		SKILLS.REDUX,
		// 	],
		// 	category: 'Mobile',
		// 	github: 'https://github.com/yourusername/dating-app',
		// 	live: 'https://dating-app-demo.com',
		// 	featured: false,
		// 	emoji: '💕',
		// },
		// Resonance Website
		{
			id: generateProjectId(),
			title: 'NUS Resonance Website',
			description:
				'A comprehensive portal for NUS Resonance members to access announcements, administrative tools and resource sharing within the club.',
			technologies: [
				SKILLS.REACT_JS,
				SKILLS.JAVASCRIPT,
				SKILLS.TAILWIND_CSS_ALT,
			],
			category: 'Frontend',
			live: 'https://www.nusresonance.com/',
			featured: true,
			emoji: '🎶',
			image: '/screenshots/resonance-sc.png',
		},
	] as Project[],

	cta: {
		title: 'Interested in Working Together?',
		description:
			"I'm always open to discussing new opportunities and exciting projects!",
		buttonText: 'Get In Touch',
	},
}
