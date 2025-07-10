import ProjectCard from './ProjectCard'
import { type SkillName } from '@/data/skillConstants'

interface Project {
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

interface FeaturedProjectsSectionProps {
	projects: Project[]
	title?: string
}

export default function FeaturedProjectsSection({
	projects,
	title = 'Featured Projects',
}: FeaturedProjectsSectionProps) {
	const featuredProjects = projects.filter((project) => project.featured)

	return (
		<section className='mb-20'>
			<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground mb-8'>
				{title}
			</h2>
			<div className='grid lg:grid-cols-2 gap-8'>
				{featuredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} variant='featured' />
				))}
			</div>
		</section>
	)
}
