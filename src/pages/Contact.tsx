import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, X, Link } from 'lucide-react'
import { FaSpotify } from 'react-icons/fa'
import VSCOSeal from '@/assets/svg/VSCO_Seal.svg'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle')
	const [progress, setProgress] = useState(100)
	const [showSuccess, setShowSuccess] = useState(false)
	const [copiedItem, setCopiedItem] = useState<string | null>(null)

	// Auto-dismiss success message with progress bar
	useEffect(() => {
		if (submitStatus === 'success') {
			setShowSuccess(true)
			setProgress(100)

			const interval = setInterval(() => {
				setProgress((prev) => {
					if (prev <= 0) {
						setShowSuccess(false)
						setSubmitStatus('idle')
						return 100
					}
					return prev - 2 // Decrease by 2% every 100ms (5 seconds total)
				})
			}, 100)

			return () => clearInterval(interval)
		}
	}, [submitStatus])

	const handleCloseMessage = () => {
		setShowSuccess(false)
		setSubmitStatus('idle')
		setProgress(100)
	}

	const handleCopyToClipboard = async (text: string, item: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setCopiedItem(item)
			setTimeout(() => setCopiedItem(null), 2000) // Reset after 2 seconds
		} catch (err) {
			console.error('Failed to copy: ', err)
		}
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			// Initialize EmailJS
			emailjs.init('MeArJZR8uaXR20_HG')

			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject || 'Contact from Portfolio',
				message: formData.message,
				to_email: 'hoangg227@gmail.com',
			}

			await emailjs.send('service_5xgzkoq', 'template_wgw3wcu', templateParams)

			setSubmitStatus('success')
			setFormData({ name: '', email: '', subject: '', message: '' })
		} catch (error) {
			console.error('Email sending failed:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	const contactInfo = [
		{
			emoji: '📧',
			label: 'Email',
			value: 'hoangg227@gmail.com',
			copyable: true,
		},
		{
			emoji: '📱',
			label: 'Phone',
			value: '+65 8748 8566',
			copyable: true,
		},
		{
			emoji: '🇸🇬',
			label: 'Location',
			value: 'Singapore, Singapore',
			copyable: false,
		},
	]

	const socialLinks = [
		{
			icon: Github,
			label: 'GitHub',
			url: 'https://github.com/hoang227',
			color: 'hover:text-gray-800 dark:hover:text-gray-200',
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/nguyen-minh-hoang-2437aa219/',
			color: 'hover:text-blue-600',
		},
		{
			icon: FaSpotify,
			label: 'Spotify',
			url: 'https://open.spotify.com/user/21lz6lh7u57jyx76372fti4ta',
			color: 'hover:text-green-500',
		},
		{
			icon: VSCOSeal,
			label: 'VSCO',
			url: 'https://vsco.co/hoangg227/gallery',
			color: 'hover:text-gray-800 dark:hover:text-gray-200',
		},
	]

	return (
		<div className='h-full pb-24 pt-16 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-10 animate-slide-up hidden sm:block'>
					<h1 className='font-inter font-bold text-4xl md:text-5xl text-foreground mb-4'>
						Get In Touch
					</h1>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information - First on mobile, second on desktop */}
					<div className='space-y-8 animate-slide-up animation-delay-200 lg:order-2'>
						<Card className='p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800'>
							<h3 className='font-inter font-semibold text-xl sm:text-2xl text-foreground mb-3'>
								Let's Connect
							</h3>
							<p className='text-muted-foreground mb-4'>
								I'm always interested in discussing interesting topics and
								sharing insights. Whether it's web development, photography,
								music discoveries, or creative projects. I'd love to hear from
								you and exchange ideas.
							</p>
							<div className='flex flex-wrap gap-2'>
								<span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'>
									Web Development
								</span>
								<span className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium'>
									Photography
								</span>
								<span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium'>
									Music
								</span>
							</div>
						</Card>

						<Card className='p-6'>
							<h2 className='font-inter font-semibold text-xl sm:text-2xl text-foreground mb-4'>
								Contact Information
							</h2>
							<div className='space-y-3'>
								{contactInfo.map((info, index) => (
									<div key={index} className='flex items-center space-x-3'>
										<div className='flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg'>
											{info.emoji}
										</div>
										<div className='flex-1'>
											{info.copyable ? (
												<button
													onClick={() =>
														handleCopyToClipboard(info.value, info.label)
													}
													className={`text-sm transition-all duration-200 cursor-pointer relative flex items-center gap-2 ${
														copiedItem === info.label
															? 'text-green-600 dark:text-green-400'
															: 'text-foreground hover:text-primary'
													}`}>
													<span>{info.value}</span>
													{copiedItem === info.label ? (
														<span className='text-xs'>✓ Copied!</span>
													) : (
														<Link className='w-3 h-3 opacity-60' />
													)}
												</button>
											) : (
												<p className='text-sm text-foreground'>{info.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</Card>

						<Card className='px-6 py-4'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
								<h2 className='font-inter font-semibold text-xl sm:text-2xl text-foreground'>
									Follow Me
								</h2>
								<div className='flex space-x-5'>
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.url}
											target='_blank'
											rel='noopener noreferrer'
											className={`flex items-center justify-center w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-125 ${social.color}`}
											aria-label={social.label}>
											{social.icon === VSCOSeal ? (
												<img
													src={VSCOSeal}
													alt='VSCO'
													className='w-5.5 h-5.5 dark:invert'
												/>
											) : (
												<social.icon className='w-5.5 h-5.5' />
											)}
										</a>
									))}
								</div>
							</div>
						</Card>
					</div>

					{/* Contact Form - Second on mobile, first on desktop */}
					<Card className='p-6 animate-slide-up animation-delay-200 lg:order-1'>
						<h2 className='font-inter font-semibold text-xl sm:text-2xl text-foreground mb-4'>
							Send me a message!
						</h2>

						{showSuccess && (
							<div className='mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg relative'>
								<div className='flex items-center justify-between'>
									<span className='flex items-center'>
										✅ Message sent successfully! I'll get back to you soon.
									</span>
									<button
										onClick={handleCloseMessage}
										className='ml-4 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors'>
										<X className='w-4 h-4' />
									</button>
								</div>
								<div className='mt-2 w-full bg-green-200 dark:bg-green-800 rounded-full h-1'>
									<div
										className='bg-green-600 dark:bg-green-400 h-1 rounded-full transition-all duration-100 ease-linear'
										style={{ width: `${progress}%` }}></div>
								</div>
							</div>
						)}

						{submitStatus === 'error' && (
							<div className='mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg'>
								<div className='flex items-center justify-between'>
									<span className='flex items-center'>
										❌ Failed to send message. Please try again or contact me
										directly.
									</span>
									<button
										onClick={() => setSubmitStatus('idle')}
										className='ml-4 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors'>
										<X className='w-4 h-4' />
									</button>
								</div>
							</div>
						)}

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-foreground mb-2'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
										placeholder='Your name'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-foreground mb-2'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
										placeholder='email@example.com'
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-foreground mb-2'>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									value={formData.subject}
									onChange={handleInputChange}
									className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
									placeholder='What would you like to discuss?'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-foreground mb-2'>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleInputChange}
									rows={6}
									className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none'
									placeholder='Tell me about your project or just say hello!'
									required
								/>
							</div>
							<Button
								type='submit'
								size='lg'
								disabled={isSubmitting}
								className='w-full text-md font-inter font-medium px-8 py-6 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</Button>
						</form>
					</Card>
				</div>
			</div>
		</div>
	)
}
