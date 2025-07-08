import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A modern e-commerce platform built with React, Node.js, and PostgreSQL.',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
		category: 'Full Stack',
		github: 'https://github.com/yourusername/ecommerce',
		live: 'https://ecommerce-demo.com',
		featured: true,
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates.',
		technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
		category: 'Full Stack',
		github: 'https://github.com/yourusername/task-manager',
		live: 'https://task-manager-demo.com',
		featured: true,
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description:
			'A beautiful weather dashboard with real-time data and interactive charts.',
		technologies: ['React', 'Chart.js', 'OpenWeather API'],
		category: 'Frontend',
		github: 'https://github.com/yourusername/weather-dashboard',
		live: 'https://weather-dashboard-demo.com',
		featured: false,
	},
	{
		id: 4,
		title: 'Portfolio Website',
		description:
			'A modern, responsive portfolio website with dark mode and animations.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS'],
		category: 'Frontend',
		github: 'https://github.com/yourusername/portfolio',
		live: 'https://your-portfolio.com',
		featured: false,
	},
]

export default function WorkPage() {
	return (
		<div className='min-h-screen py-12 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='mb-16 text-center'>
					<h1 className='font-inter font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6'>
						My Work
					</h1>
					<p className='text-xl md:text-2xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
						A collection of projects that showcase my passion for creating
						meaningful digital experiences.
					</p>
				</div>

				{/* Featured Projects */}
				<section className='mb-20'>
					<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground mb-8'>
						Featured Projects
					</h2>
					<div className='grid lg:grid-cols-2 gap-8'>
						{projects
							.filter((p) => p.featured)
							.map((project) => (
								<div
									key={project.id}
									className='group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
									<div className='aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
										<div className='text-4xl text-muted-foreground'>💻</div>
									</div>
									<div className='p-6'>
										<div className='flex items-start justify-between mb-4'>
											<h3 className='font-semibold text-xl text-foreground group-hover:text-primary transition-colors'>
												{project.title}
											</h3>
											<Badge variant='secondary' className='text-xs'>
												{project.category}
											</Badge>
										</div>
										<p className='text-muted-foreground font-inter leading-relaxed mb-4'>
											{project.description}
										</p>
										<div className='flex flex-wrap gap-2 mb-4'>
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className='bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium'>
													{tech}
												</span>
											))}
										</div>
										<div className='flex gap-3'>
											{project.github && (
												<Button
													variant='outline'
													size='sm'
													onClick={() => window.open(project.github, '_blank')}>
													GitHub
												</Button>
											)}
											{project.live && (
												<Button
													size='sm'
													onClick={() => window.open(project.live, '_blank')}>
													Live Demo
												</Button>
											)}
										</div>
									</div>
								</div>
							))}
					</div>
				</section>

				{/* All Projects */}
				<section>
					<h2 className='font-inter font-bold text-3xl md:text-4xl text-foreground mb-8'>
						All Projects
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{projects.map((project) => (
							<div
								key={project.id}
								className='group bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
								<div className='aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center'>
									<div className='text-2xl text-muted-foreground'>📱</div>
								</div>
								<div className='p-4'>
									<div className='flex items-start justify-between mb-3'>
										<h3 className='font-semibold text-lg text-foreground group-hover:text-primary transition-colors'>
											{project.title}
										</h3>
										<Badge variant='outline' className='text-xs'>
											{project.category}
										</Badge>
									</div>
									<p className='text-muted-foreground font-inter text-sm leading-relaxed mb-3'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-1 mb-3'>
										{project.technologies.slice(0, 2).map((tech) => (
											<span
												key={tech}
												className='bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium'>
												{tech}
											</span>
										))}
										{project.technologies.length > 2 && (
											<span className='bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium'>
												+{project.technologies.length - 2}
											</span>
										)}
									</div>
									<div className='flex gap-2'>
										{project.github && (
											<Button
												variant='ghost'
												size='sm'
												className='text-xs'
												onClick={() => window.open(project.github, '_blank')}>
												GitHub
											</Button>
										)}
										{project.live && (
											<Button
												variant='ghost'
												size='sm'
												className='text-xs'
												onClick={() => window.open(project.live, '_blank')}>
												Demo
											</Button>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<div className='mt-20 text-center'>
					<div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-border/50'>
						<h3 className='font-inter font-bold text-2xl md:text-3xl text-foreground mb-4'>
							Interested in Working Together?
						</h3>
						<p className='text-muted-foreground font-inter text-lg mb-6 max-w-2xl mx-auto'>
							I'm always open to discussing new opportunities and exciting
							projects. Let's create something amazing together!
						</p>
						<Button
							size='lg'
							className='text-lg font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
							onClick={() =>
								window.open('mailto:your.email@example.com', '_blank')
							}>
							Get In Touch
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
