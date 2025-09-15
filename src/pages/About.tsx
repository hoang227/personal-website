import AboutHeader from '@/components/about/AboutHeader'
import EducationSection from '@/components/about/EducationSection'
import ExperienceSection from '@/components/about/ExperienceSection'
import SkillsSection from '@/components/about/SkillsSection'
import CTASection from '@/components/about/CTASection'
import { aboutData } from '@/data/aboutData'
import LeadershipSection from '@/components/about/LeadershipSection'

export default function AboutPage() {
	return (
		<div className='h-full pb-24 pt-16 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<AboutHeader
					title={aboutData.header.title}
					description={aboutData.header.description}
				/>

				{/* Main Content - Single Column Layout */}
				<div className='space-y-16 animate-slide-up animation-delay-200'>
					{/* Education */}
					<EducationSection education={aboutData.education} />

					{/* Skills */}
					<SkillsSection />

					{/* Experience */}
					<ExperienceSection experience={aboutData.experience} />

					{/* Leadership */}
					<LeadershipSection leadership={aboutData.leadership} />
				</div>

				{/* CTA Section */}
				<CTASection {...aboutData.cta} />
			</div>
		</div>
	)
}
