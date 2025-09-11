import { Card, CardTitle, CardSkill } from '@/components/ui/card'
import { defaultSkillCategories } from '@/data/skillsData'
import type { SkillCategory } from '@/data/skillsData'

interface SkillsSectionProps {
	categories?: SkillCategory[]
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
	const skillsToShow = categories || defaultSkillCategories

	return (
		<section className='space-y-6'>
			<h2 className='font-inter font-bold text-2xl md:text-3xl text-foreground'>
				Technical Skills
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{skillsToShow.map((category, index) => (
					<Card key={index}>
						<CardTitle className='mb-2'>{category.title}</CardTitle>
						<div className='flex flex-wrap gap-2'>
							{category.skills.map((skill, skillIndex) => (
								<CardSkill
									key={skillIndex}
									icon={skill.icon}
									label={skill.label}
								/>
							))}
						</div>
					</Card>
				))}
			</div>
		</section>
	)
}
