import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import TechnologyIcons from './TechnologyIcons'

interface Project {
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
			<div
				className={`aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ${
					isFeatured ? '' : 'from-blue-500/10 to-purple-500/10'
				}`}>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className='w-full h-full object-cover'
					/>
				) : (
					<div
						className={`text-muted-foreground ${
							isFeatured ? 'text-4xl' : 'text-2xl'
						}`}>
						{project.emoji || '💻'}
					</div>
				)}
			</div>
			<div className={isFeatured ? 'p-6' : 'p-4'}>
				<div
					className={`flex items-start justify-between mb-${
						isFeatured ? '4' : '3'
					}`}>
					<h3
						className={`font-semibold text-foreground group-hover:text-primary transition-colors ${
							isFeatured ? 'text-xl' : 'text-lg'
						}`}>
						{project.title}
					</h3>
					<Badge
						variant={isFeatured ? 'secondary' : 'outline'}
						className='text-xs'>
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
						maxDisplay={isFeatured ? undefined : 2}
						showCount={!isFeatured}
						className={isFeatured ? 'gap-2' : 'gap-1'}
					/>
				</div>
				<div className={`flex gap-${isFeatured ? '3' : '2'}`}>
					{project.github && (
						<Button
							variant={isFeatured ? 'outline' : 'ghost'}
							size='sm'
							className={isFeatured ? '' : 'text-xs'}
							onClick={() => window.open(project.github, '_blank')}>
							GitHub
						</Button>
					)}
					{project.live && (
						<Button
							variant={isFeatured ? 'default' : 'ghost'}
							size='sm'
							className={isFeatured ? '' : 'text-xs'}
							onClick={() => window.open(project.live, '_blank')}>
							{isFeatured ? 'Live Demo' : 'Demo'}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
