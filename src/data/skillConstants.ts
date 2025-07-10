// Centralized skill constants to prevent hardcoding
// These constants define all available skills in the system
export const SKILLS = {
	// Programming Languages
	JAVASCRIPT: 'JavaScript',
	TYPESCRIPT: 'TypeScript',
	HTML: 'HTML',
	CSS: 'CSS',
	PYTHON: 'Python',
	JAVA: 'Java',

	// Frameworks & Libraries
	REACT: 'React',
	REACT_JS: 'React.js',
	NEXT_JS: 'Next.js',
	REDUX: 'Redux',
	TAILWIND_CSS: 'Tailwind CSS',
	TAILWIND_CSS_ALT: 'TailwindCSS',
	SHOPIFY: 'Shopify',
	HYDROGEN: 'Hydrogen',
	FABRIC_JS: 'Fabric.js',
	RADIX_UI: 'RadixUI',
	NODE_JS: 'Node.js',
	VUE3: 'Vue3',
	SPRING_BOOT: 'Spring Boot',
	REACT_NATIVE: 'React Native',

	// Database & APIs
	MYSQL: 'MySQL',
	POSTGRESQL: 'PostgreSQL',
	GRAPHQL: 'GraphQL',
	FIREBASE: 'Firebase',
	SUPABASE: 'Supabase',
	MONGODB: 'MongoDB',

	// Tools & Services
	STRIPE: 'Stripe',
	SOCKET_IO: 'Socket.io',
	CHART_JS: 'Chart.js',
	OPENWEATHER_API: 'OpenWeather API',
	WEBDRIVER_IO: 'WebdriverIO',
	GIT: 'Git',
	CI_CD: 'CI/CD',
	EXCEL: 'Excel',
	AGILE_SCRUM: 'Agile/Scrum',
	LIQUID: 'Liquid',
} as const

// Type for all skill names
export type SkillName = (typeof SKILLS)[keyof typeof SKILLS]

// Helper function to get all skill names
export function getAllSkillNames(): SkillName[] {
	return Object.values(SKILLS)
}

// Helper function to validate skill name
export function isValidSkillName(name: string): name is SkillName {
	return Object.values(SKILLS).includes(name as SkillName)
}
