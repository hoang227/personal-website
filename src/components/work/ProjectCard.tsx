import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import TechnologyIcons from './TechnologyIcons'
import ProjectScreenshot from './ProjectScreenshot'
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

interface ProjectCardProps {
	project: Project
	variant?: 'featured' | 'compact'
}

export default function ProjectCard({
	project,
	variant = 'compact',
}: ProjectCardProps) {
	const isFeatured = variant === 'featured'

	return (
		<div
			className={`group bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform ${
				isFeatured
					? 'rounded-2xl hover:-translate-y-2'
					: 'rounded-xl hover:-translate-y-1'
			}`}>
			<ProjectScreenshot
				image={project.image}
				emoji={project.emoji || '💻'}
				alt={`${project.title} preview`}
				className={isFeatured ? 'text-4xl' : 'text-2xl'}
			/>
			<div className={isFeatured ? 'p-6' : 'p-4'}>
				<div
					className={`flex items-start justify-between mb-${
						isFeatured ? '4' : '3'
					}`}>
					<h3
						className={`font-semibold text-foreground group-hover:text-primary transition-colors flex-1 mr-3 ${
							isFeatured ? 'text-xl' : 'text-lg'
						}`}>
						{project.title}
					</h3>
					<Badge
						variant={isFeatured ? 'secondary' : 'outline'}
						className='text-xs whitespace-nowrap min-w-fit px-3 flex-shrink-0'>
						{project.category}
					</Badge>
				</div>
				<p
					className={`text-muted-foreground font-inter leading-relaxed mb-${
						isFeatured ? '4' : '3'
					} ${isFeatured ? '' : 'text-sm'}`}>
					{project.description}
				</p>
				<div className={`mb-${isFeatured ? '4' : '3'}`}>
					<TechnologyIcons
						technologies={project.technologies}
						maxDisplay={5}
						showCount={true}
						className={isFeatured ? 'gap-2' : 'gap-1'}
					/>
				</div>
				<div className={`my-3 flex gap-${isFeatured ? '3' : '2'}`}>
					{project.github && (
						<Button
							variant='outline'
							size='sm'
							className='text-xs'
							onClick={() => window.open(project.github, '_blank')}>
							GitHub
						</Button>
					)}
					{project.live && (
						<Button
							variant='default'
							size='sm'
							className='text-xs'
							onClick={() => window.open(project.live, '_blank')}>
							Demo
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
