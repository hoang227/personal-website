import React from 'react'
import {
	SiPython,
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiNextdotjs,
	SiRedux,
	SiTailwindcss,
	SiWebdriverio,
	SiGraphql,
	SiFirebase,
	SiSupabase,
	SiGithubactions,
	SiGit,
	SiNodedotjs,
	SiPostgresql,
	SiStripe,
	SiSocketdotio,
	SiMongodb,
	SiChartdotjs,
	SiVuedotjs,
	SiSpringboot,
} from 'react-icons/si'
import { DiMysql, DiScrum } from 'react-icons/di'
import { FaJava, FaShopify } from 'react-icons/fa'
import { RiFileExcel2Line } from 'react-icons/ri'

import HydrogenLogo from '@/assets/svg/Hydrogen.svg'
import FabricJSLogo from '@/assets/svg/FabricJS.svg'
import RadixUILogo from '@/assets/svg/RadixUI.svg'

import { SKILLS, type SkillName } from './skillConstants'

export interface Skill {
	icon: React.ReactNode
	label: string
	color?: string
}

export interface SkillCategory {
	title: string
	skills: Skill[]
}

// All available skills with their icons
export const allSkills: Record<SkillName, Skill> = {
	// Programming Languages
	[SKILLS.JAVASCRIPT]: {
		icon: <SiJavascript className='text-yellow-400' />,
		label: SKILLS.JAVASCRIPT,
		color: 'text-yellow-400',
	},
	[SKILLS.TYPESCRIPT]: {
		icon: <SiTypescript className='text-blue-700' />,
		label: SKILLS.TYPESCRIPT,
		color: 'text-blue-700',
	},
	[SKILLS.HTML]: {
		icon: <SiHtml5 className='text-orange-500' />,
		label: SKILLS.HTML,
		color: 'text-orange-500',
	},
	[SKILLS.CSS]: {
		icon: <SiCss3 className='text-blue-400' />,
		label: SKILLS.CSS,
		color: 'text-blue-400',
	},
	[SKILLS.PYTHON]: {
		icon: <SiPython className='text-blue-500' />,
		label: SKILLS.PYTHON,
		color: 'text-blue-500',
	},
	[SKILLS.JAVA]: {
		icon: <FaJava className='text-orange-600' />,
		label: SKILLS.JAVA,
		color: 'text-orange-600',
	},

	// Frameworks & Libraries
	[SKILLS.REACT]: {
		icon: <SiReact className='text-cyan-500' />,
		label: SKILLS.REACT,
		color: 'text-cyan-500',
	},
	[SKILLS.REACT_JS]: {
		icon: <SiReact className='text-cyan-500' />,
		label: SKILLS.REACT_JS,
		color: 'text-cyan-500',
	},
	[SKILLS.NEXT_JS]: {
		icon: <SiNextdotjs className='text-black dark:text-white' />,
		label: SKILLS.NEXT_JS,
		color: 'text-black dark:text-white',
	},
	[SKILLS.REDUX]: {
		icon: <SiRedux className='text-purple-500' />,
		label: SKILLS.REDUX,
		color: 'text-purple-500',
	},
	[SKILLS.TAILWIND_CSS]: {
		icon: <SiTailwindcss className='text-sky-400' />,
		label: SKILLS.TAILWIND_CSS,
		color: 'text-sky-400',
	},
	[SKILLS.TAILWIND_CSS_ALT]: {
		icon: <SiTailwindcss className='text-sky-400' />,
		label: SKILLS.TAILWIND_CSS_ALT,
		color: 'text-sky-400',
	},
	[SKILLS.SHOPIFY]: {
		icon: <FaShopify className='text-green-500' />,
		label: SKILLS.SHOPIFY,
		color: 'text-green-500',
	},
	[SKILLS.HYDROGEN]: {
		icon: <img src={HydrogenLogo} alt='Hydrogen' className='w-4 h-4' />,
		label: SKILLS.HYDROGEN,
	},
	[SKILLS.FABRIC_JS]: {
		icon: <img src={FabricJSLogo} alt='Fabric.js' className='w-4 h-4' />,
		label: SKILLS.FABRIC_JS,
	},
	[SKILLS.RADIX_UI]: {
		icon: <img src={RadixUILogo} alt='RadixUI' className='w-4 h-4' />,
		label: SKILLS.RADIX_UI,
	},
	[SKILLS.NODE_JS]: {
		icon: <SiNodedotjs className='text-green-600' />,
		label: SKILLS.NODE_JS,
		color: 'text-green-600',
	},
	[SKILLS.VUE3]: {
		icon: <SiVuedotjs className='text-green-500' />,
		label: SKILLS.VUE3,
		color: 'text-green-500',
	},
	[SKILLS.SPRING_BOOT]: {
		icon: <SiSpringboot className='text-green-600' />,
		label: SKILLS.SPRING_BOOT,
		color: 'text-green-600',
	},
	[SKILLS.REACT_NATIVE]: {
		icon: <SiReact className='text-cyan-500' />,
		label: SKILLS.REACT_NATIVE,
		color: 'text-cyan-500',
	},

	// Database & APIs
	[SKILLS.MYSQL]: {
		icon: <DiMysql className='text-black' />,
		label: SKILLS.MYSQL,
		color: 'text-black',
	},
	[SKILLS.POSTGRESQL]: {
		icon: <SiPostgresql className='text-blue-600' />,
		label: SKILLS.POSTGRESQL,
		color: 'text-blue-600',
	},
	[SKILLS.GRAPHQL]: {
		icon: <SiGraphql className='text-pink-400' />,
		label: SKILLS.GRAPHQL,
		color: 'text-pink-400',
	},
	[SKILLS.FIREBASE]: {
		icon: <SiFirebase className='text-orange-400' />,
		label: SKILLS.FIREBASE,
		color: 'text-orange-400',
	},
	[SKILLS.SUPABASE]: {
		icon: <SiSupabase className='text-teal-600' />,
		label: SKILLS.SUPABASE,
		color: 'text-teal-600',
	},
	[SKILLS.MONGODB]: {
		icon: <SiMongodb className='text-green-500' />,
		label: SKILLS.MONGODB,
		color: 'text-green-500',
	},

	// Tools & Services
	[SKILLS.STRIPE]: {
		icon: <SiStripe className='text-purple-500' />,
		label: SKILLS.STRIPE,
		color: 'text-purple-500',
	},
	[SKILLS.SOCKET_IO]: {
		icon: <SiSocketdotio className='text-black' />,
		label: SKILLS.SOCKET_IO,
		color: 'text-black',
	},
	[SKILLS.CHART_JS]: {
		icon: <SiChartdotjs className='text-red-500' />,
		label: SKILLS.CHART_JS,
		color: 'text-red-500',
	},
	[SKILLS.OPENWEATHER_API]: {
		icon: <span className='text-orange-500 font-bold text-sm'>🌤️</span>,
		label: SKILLS.OPENWEATHER_API,
		color: 'text-orange-500',
	},
	[SKILLS.WEBDRIVER_IO]: {
		icon: <SiWebdriverio className='text-orange-400' />,
		label: SKILLS.WEBDRIVER_IO,
		color: 'text-orange-400',
	},
	[SKILLS.GIT]: {
		icon: <SiGit className='text-orange-500' />,
		label: SKILLS.GIT,
		color: 'text-orange-500',
	},
	[SKILLS.CI_CD]: {
		icon: <SiGithubactions className='text-blue-500' />,
		label: SKILLS.CI_CD,
		color: 'text-blue-500',
	},
	[SKILLS.EXCEL]: {
		icon: <RiFileExcel2Line className='text-green-600' />,
		label: SKILLS.EXCEL,
		color: 'text-green-600',
	},
	[SKILLS.AGILE_SCRUM]: {
		icon: <DiScrum className='text-black' />,
		label: SKILLS.AGILE_SCRUM,
		color: 'text-black',
	},

	// Additional technologies
	[SKILLS.LIQUID]: {
		icon: <span className='text-blue-600 font-bold text-sm'>L</span>,
		label: SKILLS.LIQUID,
		color: 'text-blue-600',
	},
}

// Helper function to get skill by name
export function getSkillByName(name: SkillName): Skill | undefined {
	return allSkills[name]
}

// Helper function to get skills by names array
export function getSkillsByNames(names: SkillName[]): Skill[] {
	return names.map((name) => allSkills[name]).filter(Boolean)
}

// Default skill categories for the About page
export const defaultSkillCategories: SkillCategory[] = [
	{
		title: 'Programming Languages',
		skills: [
			allSkills[SKILLS.JAVASCRIPT],
			allSkills[SKILLS.TYPESCRIPT],
			allSkills[SKILLS.HTML],
			allSkills[SKILLS.CSS],
			allSkills[SKILLS.PYTHON],
			allSkills[SKILLS.JAVA],
		],
	},
	{
		title: 'Frameworks',
		skills: [
			allSkills[SKILLS.REACT_JS],
			allSkills[SKILLS.NEXT_JS],
			allSkills[SKILLS.REDUX],
			allSkills[SKILLS.TAILWIND_CSS_ALT],
			allSkills[SKILLS.SHOPIFY],
			allSkills[SKILLS.HYDROGEN],
			allSkills[SKILLS.FABRIC_JS],
			allSkills[SKILLS.RADIX_UI],
		],
	},
	{
		title: 'Database Management',
		skills: [
			allSkills[SKILLS.MYSQL],
			allSkills[SKILLS.GRAPHQL],
			allSkills[SKILLS.FIREBASE],
			allSkills[SKILLS.SUPABASE],
		],
	},
	{
		title: 'Testing Tools',
		skills: [allSkills[SKILLS.WEBDRIVER_IO]],
	},
	{
		title: 'Others',
		skills: [
			allSkills[SKILLS.GIT],
			allSkills[SKILLS.CI_CD],
			allSkills[SKILLS.EXCEL],
			allSkills[SKILLS.AGILE_SCRUM],
		],
	},
]
