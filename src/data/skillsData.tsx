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
export const allSkills: Record<string, Skill> = {
	// Programming Languages
	JavaScript: {
		icon: <SiJavascript className='text-yellow-400' />,
		label: 'JavaScript',
		color: 'text-yellow-400',
	},
	TypeScript: {
		icon: <SiTypescript className='text-blue-700' />,
		label: 'TypeScript',
		color: 'text-blue-700',
	},
	HTML: {
		icon: <SiHtml5 className='text-orange-500' />,
		label: 'HTML',
		color: 'text-orange-500',
	},
	CSS: {
		icon: <SiCss3 className='text-blue-400' />,
		label: 'CSS',
		color: 'text-blue-400',
	},
	Python: {
		icon: <SiPython className='text-blue-500' />,
		label: 'Python',
		color: 'text-blue-500',
	},
	Java: {
		icon: <FaJava className='text-orange-600' />,
		label: 'Java',
		color: 'text-orange-600',
	},

	// Frameworks & Libraries
	React: {
		icon: <SiReact className='text-cyan-500' />,
		label: 'React',
		color: 'text-cyan-500',
	},
	'React.js': {
		icon: <SiReact className='text-cyan-500' />,
		label: 'React.js',
		color: 'text-cyan-500',
	},
	'Next.js': {
		icon: <SiNextdotjs className='text-black dark:text-white' />,
		label: 'Next.js',
		color: 'text-black dark:text-white',
	},
	Redux: {
		icon: <SiRedux className='text-purple-500' />,
		label: 'Redux',
		color: 'text-purple-500',
	},
	'Tailwind CSS': {
		icon: <SiTailwindcss className='text-sky-400' />,
		label: 'Tailwind CSS',
		color: 'text-sky-400',
	},
	TailwindCSS: {
		icon: <SiTailwindcss className='text-sky-400' />,
		label: 'TailwindCSS',
		color: 'text-sky-400',
	},
	Shopify: {
		icon: <FaShopify className='text-green-500' />,
		label: 'Shopify',
		color: 'text-green-500',
	},
	Hydrogen: {
		icon: <img src={HydrogenLogo} alt='Hydrogen' className='w-4 h-4' />,
		label: 'Hydrogen',
	},
	'Fabric.js': {
		icon: <img src={FabricJSLogo} alt='Fabric.js' className='w-4 h-4' />,
		label: 'Fabric.js',
	},
	RadixUI: {
		icon: <img src={RadixUILogo} alt='RadixUI' className='w-4 h-4' />,
		label: 'RadixUI',
	},
	'Node.js': {
		icon: <SiNodedotjs className='text-green-600' />,
		label: 'Node.js',
		color: 'text-green-600',
	},
	Vue3: {
		icon: <SiVuedotjs className='text-green-500' />,
		label: 'Vue3',
		color: 'text-green-500',
	},
	'Spring Boot': {
		icon: <SiSpringboot className='text-green-600' />,
		label: 'Spring Boot',
		color: 'text-green-600',
	},
	'React Native': {
		icon: <SiReact className='text-cyan-500' />,
		label: 'React Native',
		color: 'text-cyan-500',
	},

	// Database & APIs
	MySQL: {
		icon: <DiMysql className='text-black' />,
		label: 'MySQL',
		color: 'text-black',
	},
	PostgreSQL: {
		icon: <SiPostgresql className='text-blue-600' />,
		label: 'PostgreSQL',
		color: 'text-blue-600',
	},
	GraphQL: {
		icon: <SiGraphql className='text-pink-400' />,
		label: 'GraphQL',
		color: 'text-pink-400',
	},
	Firebase: {
		icon: <SiFirebase className='text-orange-400' />,
		label: 'Firebase',
		color: 'text-orange-400',
	},
	Supabase: {
		icon: <SiSupabase className='text-teal-600' />,
		label: 'Supabase',
		color: 'text-teal-600',
	},
	MongoDB: {
		icon: <SiMongodb className='text-green-500' />,
		label: 'MongoDB',
		color: 'text-green-500',
	},

	// Tools & Services
	Stripe: {
		icon: <SiStripe className='text-purple-500' />,
		label: 'Stripe',
		color: 'text-purple-500',
	},
	'Socket.io': {
		icon: <SiSocketdotio className='text-black' />,
		label: 'Socket.io',
		color: 'text-black',
	},
	'Chart.js': {
		icon: <SiChartdotjs className='text-red-500' />,
		label: 'Chart.js',
		color: 'text-red-500',
	},
	'OpenWeather API': {
		icon: <span className='text-orange-500 font-bold text-sm'>🌤️</span>,
		label: 'OpenWeather API',
		color: 'text-orange-500',
	},
	WebdriverIO: {
		icon: <SiWebdriverio className='text-orange-400' />,
		label: 'WebdriverIO',
		color: 'text-orange-400',
	},
	Git: {
		icon: <SiGit className='text-orange-500' />,
		label: 'Git',
		color: 'text-orange-500',
	},
	'CI/CD': {
		icon: <SiGithubactions className='text-blue-500' />,
		label: 'CI/CD',
		color: 'text-blue-500',
	},
	Excel: {
		icon: <RiFileExcel2Line className='text-green-600' />,
		label: 'Excel',
		color: 'text-green-600',
	},
	'Agile/Scrum': {
		icon: <DiScrum className='text-black' />,
		label: 'Agile/Scrum',
		color: 'text-black',
	},

	// Additional technologies
	Liquid: {
		icon: <span className='text-blue-600 font-bold text-sm'>L</span>,
		label: 'Liquid',
		color: 'text-blue-600',
	},
}

// Helper function to get skill by name
export function getSkillByName(name: string): Skill | undefined {
	return allSkills[name]
}

// Helper function to get skills by names array
export function getSkillsByNames(names: string[]): Skill[] {
	return names.map((name) => allSkills[name]).filter(Boolean)
}

// Default skill categories for the About page
export const defaultSkillCategories: SkillCategory[] = [
	{
		title: 'Programming Languages',
		skills: [
			allSkills['JavaScript'],
			allSkills['TypeScript'],
			allSkills['HTML'],
			allSkills['CSS'],
			allSkills['Python'],
			allSkills['Java'],
		],
	},
	{
		title: 'Frameworks',
		skills: [
			allSkills['React.js'],
			allSkills['Next.js'],
			allSkills['Redux'],
			allSkills['TailwindCSS'],
			allSkills['Shopify'],
			allSkills['Hydrogen'],
			allSkills['Fabric.js'],
			allSkills['RadixUI'],
		],
	},
	{
		title: 'Database Management',
		skills: [
			allSkills['MySQL'],
			allSkills['GraphQL'],
			allSkills['Firebase'],
			allSkills['Supabase'],
		],
	},
	{
		title: 'Testing Tools',
		skills: [allSkills['WebdriverIO']],
	},
	{
		title: 'Others',
		skills: [
			allSkills['Git'],
			allSkills['CI/CD'],
			allSkills['Excel'],
			allSkills['Agile/Scrum'],
		],
	},
]
