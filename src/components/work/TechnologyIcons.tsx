import { getSkillsByNames } from '@/data/skillsData'

interface TechnologyIconsProps {
	technologies: string[]
	maxDisplay?: number
	showCount?: boolean
	className?: string
}

export default function TechnologyIcons({
	technologies,
	maxDisplay = 2,
	showCount = true,
	className = '',
}: TechnologyIconsProps) {
	const skills = getSkillsByNames(technologies)
	const displaySkills = skills.slice(0, maxDisplay)
	const remainingCount = technologies.length - maxDisplay

	return (
		<div className={`flex flex-wrap gap-1 ${className}`}>
			{displaySkills.map((skill, index) => (
				<span
					key={index}
					className='bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1'>
					{skill.icon}
					{skill.label}
				</span>
			))}
			{showCount && remainingCount > 0 && (
				<span className='bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium'>
					+{remainingCount}
				</span>
			)}
		</div>
	)
}
