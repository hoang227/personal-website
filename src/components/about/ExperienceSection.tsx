import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardBadge,
} from '@/components/ui/card'

interface Experience {
	title: string
	company: string
	location?: string
	period: string
	responsibilities: string[]
}

interface ExperienceSectionProps {
	experience: Experience[]
}

export default function ExperienceSection({
	experience,
}: ExperienceSectionProps) {
	return (
		<section className='space-y-6'>
			<h2 className='font-inter font-bold text-2xl md:text-3xl text-foreground'>
				Experience
			</h2>
			<div className='space-y-6'>
				{experience.map((exp, index) => (
					<Card key={index}>
						<CardHeader>
							<div>
								<CardTitle>{exp.title}</CardTitle>
								<CardDescription>{exp.company}</CardDescription>
								{exp.location && (
									<CardDescription>{exp.location}</CardDescription>
								)}
							</div>
							<CardBadge>{exp.period}</CardBadge>
						</CardHeader>
						<CardContent>
							<ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
								{exp.responsibilities.map((responsibility, idx) => (
									<li key={idx}>{responsibility}</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
