import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardBadge,
} from '@/components/ui/card'

interface Education {
	institution: string
	degree: string
	period: string
	description: string
	courses?: string
}

interface EducationSectionProps {
	education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
	return (
		<section className='space-y-6'>
			<h2 className='font-inter font-bold text-2xl md:text-3xl text-foreground'>
				Education
			</h2>
			{education.map((edu, index) => (
				<Card key={index}>
					<CardHeader>
						<div>
							<CardTitle>{edu.institution}</CardTitle>
							<CardDescription>{edu.degree}</CardDescription>
						</div>
						<CardBadge>{edu.period}</CardBadge>
					</CardHeader>
					<CardContent>
						<CardDescription>{edu.description}</CardDescription>
						{edu.courses && (
							<CardDescription className='mt-2'>
								Related Courses: {edu.courses}
							</CardDescription>
						)}
					</CardContent>
				</Card>
			))}
		</section>
	)
}
