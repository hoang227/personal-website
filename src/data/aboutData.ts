export interface Education {
	institution: string
	degree: string
	period: string
	description: string
	courses?: string
}

export interface Experience {
	title: string
	company: string
	location?: string
	period: string
	responsibilities: string[]
}

export interface Skill {
	icon: string // Icon name or component reference
	label: string
	color?: string
}

export interface SkillCategory {
	title: string
	skills: Skill[]
}

export const aboutData = {
	header: {
		title: 'About Me',
		description:
			'Passionate software developer with a love for creating elegant solutions and meaningful user experiences.',
	},

	education: [
		{
			institution: 'National University of Singapore (NUS)',
			degree: 'Bachelor of Computing (Computer Science)',
			period: '2020 - 2025',
			description:
				'Graduated with a strong foundation in software engineering, algorithms, and web technologies. Focused on modern web development practices and user experience design.',
			courses:
				'Software Engineering, Database Systems, Data Structure and Algorithms, Quality Assurance.',
		},
	] as Education[],

	experience: [
		{
			title: 'Freelance Software Developer',
			company: 'Freelance & Personal Projects',
			period: '2024 - Present',
			responsibilities: [
				'Engineered REISE by designing and developing a customizable photobook web platform using Shopify, enabling users to easily create and order personalized photobooks online.',
				'Architected a mobile dating app by focusing on user experience and real-time features, resulting in a scalable and engaging platform for meaningful connections.',
			],
		},
		{
			title: 'Quality Assurance Intern',
			company: 'NUS Information Technology',
			location: 'Singapore, SG',
			period: 'Jun 2024 – Nov 2024',
			responsibilities: [
				'Automated testing by developing and maintaining WebdriverIO scripts, improving efficiency and consistency.',
				'Enhanced codebase by adopting the Page Object Model (POM), increasing maintainability and reusability of test scripts.',
				'Collaborated with cross-functional teams to identify and resolve bugs, ensuring higher product quality and smoother releases.',
				'Validated system functionality through User Acceptance Testing (UAT), guaranteeing fulfillment of user requirements.',
			],
		},
		{
			title: 'Software Developer',
			company: 'Acapella Student Interest Group',
			period: '2023 - Present',
			responsibilities: [
				'Collaborated with a team of students to design and develop the website for the interest group, providing a central online presence for the community.',
				'Maintain and enhance the group portal, which is used to disseminate important information, support administrative tasks, and store resources for members.',
			],
		},
		{
			title: 'Development Team Member',
			company: 'Meyzer360',
			location: 'Singapore, SG',
			period: 'May 2023 – Aug 2023',
			responsibilities: [
				'Contributed to the development of the Merchant portal using Vue3 and Spring Boot, a robust and scalable platform for business clients.',
				'Participated in code reviews by providing and implementing feedback to enhance code quality and maintainability.',
				"Conducted unit and integration tests, identifying and fixing bugs to increase the portal's reliability and performance.",
				'Maintained clear documentation of the development process, facilitating future updates and troubleshooting.',
			],
		},
	] as Experience[],

	cta: {
		title: "Let's Work Together",
		description:
			"I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.",
		primaryButtonText: 'View My Work',
		primaryButtonLink: '/work',
		secondaryButtonText: 'Get In Touch',
		email: 'hoangg227@gmail.com',
	},
}
