import WorkHeader from '@/components/work/WorkHeader'
import FeaturedProjectsSection from '@/components/work/FeaturedProjectsSection'
import AllProjectsSection from '@/components/work/AllProjectsSection'
import WorkCTASection from '@/components/work/WorkCTASection'
import { workData } from '@/data/workData'

export default function WorkPage() {
	return (
		<div className='h-full pb-24 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<WorkHeader
					title={workData.header.title}
					description={workData.header.description}
				/>

				<div className='animate-slide-up animation-delay-200'>
					{/* Featured Projects */}
					<FeaturedProjectsSection
						projects={workData.projects}
						title='Featured Projects'
					/>

					{/* All Projects */}
					<AllProjectsSection
						projects={workData.projects}
						title='All Projects'
					/>

					{/* CTA Section */}
					<WorkCTASection {...workData.cta} />
				</div>
			</div>
		</div>
	)
}
