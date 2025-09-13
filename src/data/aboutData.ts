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

interface Leadership {
	title: string
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
			title: 'Quality Assurance Intern',
			company: 'NUS Information Technology',
			location: 'Singapore, SG',
			period: 'Jun 2024 – Nov 2024',
			responsibilities: [
				'Built WebdriverIO automated tests, cutting manual QA time by 80% and standardizing regression coverage.',
				'Implemented the Page Object Model (POM) in automated scripts, increasing code reusability and cutting script maintenance efforts by 50%.',
				'Tested and validated critical features in the NUS Promotion and Tenure System, ensuring reliable performance for 500+ faculty and staff users.',
				'Partnered with developers, QA engineers, and project managers to identify and resolve bugs, contributing to a 30% reduction in post-release defects.',
				'Led weekly end-to-end UAT with stakeholders, securing 100% sign-off.',
				'Authored detailed test observation forms and bug reports, improving communication efficiency with stakeholders and accelerating bug resolution time by 25%.',
				'Managed and validated test data using SQL Developer, ensuring accuracy across multiple testing scenarios and reducing data-related test failures.',
			],
		},
		{
			title: 'Development Intern',
			company: 'Meyzer360',
			location: 'Singapore, SG',
			period: 'May 2023 – Aug 2023',
			responsibilities: [
				'Contributed to the development of a merchant portal using Vue3 and Spring Boot, contributing to a digital ecosystem that supports compliance, equity management, and global operations for enterprises.',
				'Partnered with UI/UX designers, product managers, and QA testers to deliver new functionality on schedule, achieving a 95% sprint completion rate and ensuring alignment with enterprise client needs.',
				'Improved code quality and maintainability by conducting peer reviews, reducing post-deployment defects by 20%.',
				'Executed unit and integration testing across key modules, resolving 30+ bugs and enhancing portal reliability and performance.',
				'Authored and maintained technical documentation that streamlined onboarding for new developers and reduced troubleshooting time by 25%.',
			],
		},
		{
			title: 'Freelance Software Developer',
			company: 'Freelance & Personal Projects',
			period: '2024 - Present',
			responsibilities: [
				'Developed a customizable photobook e-commerce store using Hydrogen and Shopify.',
				'Designed an interactive photobook editor, enabling users to customize layouts, images, and text for a personalized product experience.',
				'Coordinated regular requirement-gathering sessions with co-founders, ensuring development aligned with business objectives and design standards.',
				'Collaborated closely with the designer to implement consistent UI/UX and branding, delivering a visually cohesive, user-friendly e-commerce experience.',
			],
		},
		{
			title: 'Software Developer',
			company: 'Acapella Student Interest Group',
			period: '2023 - Present',
			responsibilities: [
				'Built and maintained the official website for the NUS Acapella Club, serving as a central platform for public engagement and member services.',
				'Developed a members’ portal with audition schedules, performance details, calendars, bulletins, and resource booking, enhancing communication and accessibility for 100+ members of the club.',
				'Developed a public-facing site to showcase the club’s mission, activities, and performances, increasing visibility and outreach to prospective members and audiences.',
				'Collaborated with a student team to deliver a user-friendly, visually cohesive website that aligned with the club’s branding and operational needs.',
			],
		},
	] as Experience[],

	leadership: [
		{
			title: 'NUS Sheares Hall',
			period: 'Aug 2020 - Aug 2024',
			responsibilities: [
				'President, Sheares Hall A capella – Led a team of 20+ singers, directed rehearsals, arranging scores that enabled 50+ residents to perform hall-wide showcases.',
				'Member, Arts Council – Coordinated with cultural CCA leaders to plan and execute annual hall-wide cultural events, engaging over 500 participants.',
				'Member, Block Committee / Sheares Choir / Sheares Band – Contributed actively to community life and music ensembles, supporting performances and block-level initiatives.',
			],
		},
		{
			title: 'NUS Resonance',
			period: 'Aug 2023 - Nov 2024',
			responsibilities: [
				'Achieved First Runner-Up at the 2024 A Cappella Championship, hosted by the Singapore A Cappella Society.',
				'Represented NUS in competitive and showcase a cappella groups through regular weekly rehearsals and campus performances.',
				'Performed in caroling gigs and external events to raise funds and increase visibility for the club.',
			],
		},
		{
			title: 'NUS Amplified',
			period: 'Aug 2022 - Aug 2024',
			responsibilities: [
				'Singer in a student a cappella band, participating in weekly rehearsals to refine arrangements.',
				'Performed at campus events and external gigs, contributing to live shows and community engagement.',
			],
		},
	] as Leadership[],

	cta: {
		title: "Let's Work Together",
		description:
			"I'm always interested in new opportunities and exciting projects.",
		primaryButtonText: 'View My Work',
		primaryButtonLink: '/work',
		secondaryButtonText: 'Get In Touch',
	},
}
