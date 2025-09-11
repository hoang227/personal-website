import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardBadge,
} from '@/components/ui/card'

interface Leadership {
	title: string
	period: string
	responsibilities: string[]
}

interface LeadershipSectionProps {
	leadership: Leadership[]
}

export default function LeadershipSection({
	leadership,
}: LeadershipSectionProps) {
	return (
		<section className='space-y-6'>
			<h2 className='font-inter font-bold text-2xl md:text-3xl text-foreground'>
				Leadership
			</h2>
			<div className='space-y-6'>
				{leadership.map((exp, index) => (
					<Card key={index}>
						<CardHeader>
							<div>
								<CardTitle>{exp.title}</CardTitle>
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
