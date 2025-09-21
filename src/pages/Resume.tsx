import { Button } from '@/components/ui/button'
import { Download, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ResumePage() {
	const [iframeKey, setIframeKey] = useState(0)

	useEffect(() => {
		// Force iframe reload when component mounts
		setIframeKey((prev) => prev + 1)
	}, [])
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/resume.pdf'
		link.download = 'Nguyen_Minh_Hoang_Resume.pdf'
		link.click()
	}

	const handleViewPDF = () => {
		window.open('/resume.pdf', '_blank')
	}

	return (
		<div className='h-full lg:pb-12 pt-16 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='flex flex-col lg:flex-row items-start justify-between gap-6 animate-slide-up'>
					{/* Buttons - positioned above iframe on mobile, to the right on desktop */}
					<div className='w-full lg:w-auto lg:order-2 animate-slide-up animation-delay-100 flex flex-col sm:flex-row md:flex-col gap-3'>
						{/* View Resume button - only visible on screens below 768px */}
						<Button
							onClick={handleViewPDF}
							className='flex-1 lg:w-auto flex items-center justify-center gap-2 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-inter font-medium px-4 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl md:hidden'>
							<ExternalLink className='w-4 h-4' />
							View Resume
						</Button>

						<Button
							onClick={handleDownload}
							className='flex-1 lg:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-inter font-medium px-4 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
							<Download className='w-4 h-4' />
							Download Resume
						</Button>
					</div>

					{/* Iframe - positioned below button on mobile, to the left on desktop */}
					<div className='w-full lg:w-auto lg:order-1 animate-slide-up animation-delay-200 hidden md:block'>
						<div className='bg-card rounded-lg border border-border overflow-hidden shadow-lg'>
							<iframe
								key={iframeKey}
								src='/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=50'
								className='w-full lg:w-[750px] xl:w-[850px] h-[600px] md:h-[700px] lg:h-[800px] border-0'
								title='Nguyen Minh Hoang - Resume'
								allowFullScreen
								style={{
									overflow: 'auto',
									WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on iOS
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
