import type { SkillName } from '@/data/skillConstants'
import ProjectCard from './ProjectCard'

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

interface AllProjectsSectionProps {
	projects: Project[]
	title?: string
}

export default function AllProjectsSection({
	projects,
	title = 'All Projects',
}: AllProjectsSectionProps) {
	return (
		<section>
			<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground mb-8'>
				{title}
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} variant='compact' />
				))}
			</div>
		</section>
	)
}
