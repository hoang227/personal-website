import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardBadge,
	CardSkill,
} from '@/components/ui/card'
import {
	SiPython,
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiNextdotjs,
	SiRedux,
	SiTailwindcss,
	SiWebdriverio,
	SiGraphql,
	SiFirebase,
	SiSupabase,
	SiGithubactions,
	SiGit,
} from 'react-icons/si'

import { DiMysql, DiScrum } from 'react-icons/di'
import { FaJava, FaShopify } from 'react-icons/fa'
import { RiFileExcel2Line } from 'react-icons/ri'

import HydrogenLogo from '@/assets/svg/Hydrogen.svg'
import FabricJSLogo from '@/assets/svg/FabricJS.svg'
import RadixUILogo from '@/assets/svg/RadixUI.svg'

export default function AboutPage() {
	return (
		<div className='h-full pb-24 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='mb-16 text-center animate-slide-up'>
					<h1 className='font-inter font-semibold text-3xl md:text-5xl lg:text-6xl text-foreground mb-6'>
						About Me
					</h1>
					<p className='text-md md:text-lg lg:text-xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
						Passionate software developer with a love for creating elegant
						solutions and meaningful user experiences.
					</p>
				</div>

				{/* Main Content Grid */}
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
					{/* Left Column */}
					<div className='space-y-12 animate-slide-up animation-delay-200'>
						{/* Education */}
						<section className='space-y-6'>
							<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground'>
								Education
							</h2>
							<Card>
								<CardHeader>
									<div>
										<CardTitle>
											National University of Singapore (NUS)
										</CardTitle>
										<CardDescription>
											Bachelor of Computing (Computer Science)
										</CardDescription>
									</div>
									<CardBadge>2020 - 2025</CardBadge>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Graduated with a strong foundation in software engineering,
										algorithms, and web technologies. Focused on modern web
										development practices and user experience design.
									</CardDescription>
									<CardDescription>
										Related Courses: Software Engineering, Database Systems,
										Data Structure and Algorithms, Quality Assurance.
									</CardDescription>
								</CardContent>
							</Card>
						</section>

						{/* Skills */}
						<section className='space-y-6'>
							<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground'>
								Technical Skills
							</h2>
							<div className='space-y-4'>
								{/** Programming Languages */}
								<Card>
									<CardTitle className='mb-2'>Programming Languages</CardTitle>
									<div className='flex flex-wrap gap-2'>
										<CardSkill
											icon={<SiJavascript className='text-yellow-400' />}
											label='JavaScript'
										/>
										<CardSkill
											icon={<SiTypescript className='text-blue-700' />}
											label='TypeScript'
										/>
										<CardSkill
											icon={<SiHtml5 className='text-orange-500' />}
											label='HTML'
										/>
										<CardSkill
											icon={<SiCss3 className='text-blue-400' />}
											label='CSS'
										/>
										<CardSkill
											icon={<SiPython className='text-blue-500' />}
											label='Python'
										/>
										<CardSkill
											icon={<FaJava className='text-orange-600' />}
											label='Java'
										/>
									</div>
								</Card>
								{/** Frameworks */}
								<Card>
									<CardTitle className='mb-2'>Frameworks</CardTitle>
									<div className='flex flex-wrap gap-2'>
										<CardSkill
											icon={<SiReact className='text-cyan-500' />}
											label='React.js'
										/>
										<CardSkill
											icon={
												<SiNextdotjs className='text-black dark:text-white' />
											}
											label='Next.js'
										/>
										<CardSkill
											icon={<SiRedux className='text-purple-500' />}
											label='Redux'
										/>
										<CardSkill
											icon={<SiTailwindcss className='text-sky-400' />}
											label='TailwindCSS'
										/>
										<CardSkill
											icon={<FaShopify className='text-green-500' />}
											label='Shopify'
										/>
										<CardSkill
											icon={
												<img
													src={HydrogenLogo}
													alt='Hydrogen'
													className='w-4 h-4'
												/>
											}
											label='Hydrogen'
										/>
										<CardSkill
											icon={
												<img
													src={FabricJSLogo}
													alt='Fabric.js'
													className='w-4 h-4'
												/>
											}
											label='Fabric.js'
										/>
										<CardSkill
											icon={
												<img
													src={RadixUILogo}
													alt='RadixUI'
													className='w-4 h-4'
												/>
											}
											label='RadixUI'
										/>
									</div>
								</Card>
								{/** Database management */}
								<Card>
									<CardTitle className='mb-2'>Database Management</CardTitle>
									<div className='flex flex-wrap gap-2'>
										<CardSkill
											icon={<DiMysql className='text-black' />}
											label='MySQL'
										/>
										<CardSkill
											icon={<SiGraphql className='text-pink-400' />}
											label='GraphQL'
										/>
										<CardSkill
											icon={<SiFirebase className='text-orange-400' />}
											label='Firebase'
										/>
										<CardSkill
											icon={<SiSupabase className='text-teal-600' />}
											label='Supabase'
										/>
									</div>
								</Card>
								{/** Testing tools */}
								<Card>
									<CardTitle className='mb-2'>Testing Tools</CardTitle>
									<div className='flex flex-wrap gap-2'>
										<CardSkill
											icon={<SiWebdriverio className='text-orange-400' />}
											label='WebdriverIO'
										/>
									</div>
								</Card>
								{/** Others */}
								<Card>
									<CardTitle className='mb-2'>Others</CardTitle>
									<div className='flex flex-wrap gap-2'>
										<CardSkill
											icon={<SiGit className='text-orange-500' />}
											label='Git'
										/>
										<CardSkill
											icon={<SiGithubactions className='text-blue-500' />}
											label='CI/CD'
										/>
										<CardSkill
											icon={<RiFileExcel2Line className='text-green-600' />}
											label='Excel'
										/>
										<CardSkill
											icon={<DiScrum className='text-black' />}
											label='Agile/Scrum'
										/>
									</div>
								</Card>
							</div>
						</section>
					</div>

					{/* Right Column */}
					<div className='space-y-12 animate-slide-up animation-delay-400'>
						{/* Experience */}
						<section className='space-y-6'>
							<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground'>
								Experience
							</h2>
							<div className='space-y-6'>
								<Card>
									<CardHeader>
										<div>
											<CardTitle>Freelance Software Developer</CardTitle>
											<CardDescription>
												Freelance & Personal Projects
											</CardDescription>
										</div>
										<CardBadge>2024 - Present</CardBadge>
									</CardHeader>
									<CardContent>
										<ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
											<li>
												Engineered REISE by designing and developing a
												customizable photobook web platform using Shopify,
												enabling users to easily create and order personalized
												photobooks online.
											</li>
											<li>
												Architected a mobile dating app by focusing on user
												experience and real-time features, resulting in a
												scalable and engaging platform for meaningful
												connections.
											</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<div>
											<CardTitle>Quality Assurance Intern</CardTitle>
											<CardDescription>
												NUS Information Technology
											</CardDescription>
											<CardDescription>Singapore, SG</CardDescription>
										</div>
										<CardBadge>Jun 2024 – Nov 2024</CardBadge>
									</CardHeader>
									<CardContent>
										<ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
											<li>
												Automated testing by developing and maintaining
												WebdriverIO scripts, improving efficiency and
												consistency.
											</li>
											<li>
												Enhanced codebase by adopting the Page Object Model
												(POM), increasing maintainability and reusability of
												test scripts.
											</li>
											<li>
												Collaborated with cross-functional teams to identify and
												resolve bugs, ensuring higher product quality and
												smoother releases.
											</li>
											<li>
												Validated system functionality through User Acceptance
												Testing (UAT), guaranteeing fulfillment of user
												requirements.
											</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<div>
											<CardTitle>Software Developer</CardTitle>
											<CardDescription>
												Acapella Student Interest Group
											</CardDescription>
										</div>
										<CardBadge>2023 - Present</CardBadge>
									</CardHeader>
									<CardContent>
										<ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
											<li>
												Collaborated with a team of students to design and
												develop the website for the interest group, providing a
												central online presence for the community.
											</li>
											<li>
												Maintain and enhance the group portal, which is used to
												disseminate important information, support
												administrative tasks, and store resources for members.
											</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<div>
											<CardTitle>Development Team Member</CardTitle>
											<CardDescription>Meyzer360</CardDescription>
											<CardDescription>Singapore, SG</CardDescription>
										</div>
										<CardBadge>May 2023 – Aug 2023</CardBadge>
									</CardHeader>
									<CardContent>
										<ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
											<li>
												Contributed to the development of the Merchant portal
												using Vue3 and Spring Boot, a robust and scalable
												platform for business clients.
											</li>
											<li>
												Participated in code reviews by providing and
												implementing feedback to enhance code quality and
												maintainability.
											</li>
											<li>
												Conducted unit and integration tests, identifying and
												fixing bugs to increase the portal's reliability and
												performance.
											</li>
											<li>
												Maintained clear documentation of the development
												process, facilitating future updates and
												troubleshooting.
											</li>
										</ul>
									</CardContent>
								</Card>
							</div>
						</section>
					</div>
				</div>

				{/* CTA Section */}
				<div className='mt-20 text-center animate-slide-up animation-delay-600'>
					<div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-border/50'>
						<h3 className='font-inter font-bold text-2xl md:text-3xl text-foreground mb-4'>
							Let's Work Together
						</h3>
						<p className='text-muted-foreground font-inter text-lg mb-6 max-w-2xl mx-auto'>
							I'm always interested in new opportunities and exciting projects.
							Let's discuss how we can create something amazing together.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link to='/work'>
								<Button
									size='lg'
									className='text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
									View My Work
								</Button>
							</Link>
							<Button
								variant='outline'
								size='lg'
								className='text-lg font-inter font-medium px-8 py-6 h-auto border-2 hover:bg-accent transition-all duration-300 transform hover:scale-105'
								onClick={() =>
									window.open('mailto:your.email@example.com', '_blank')
								}>
								Get In Touch
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
