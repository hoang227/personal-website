import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
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

	return (
		<div className='h-full lg:pb-12 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='flex flex-col lg:flex-row items-start justify-between gap-6 animate-slide-up'>
					{/* Button - positioned above iframe on mobile, to the right on desktop */}
					<div className='w-full lg:w-auto lg:order-2 animate-slide-up animation-delay-100'>
						<Button
							onClick={handleDownload}
							className='w-full lg:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-inter font-medium px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
							<Download className='w-4 h-4' />
							Download PDF
						</Button>
					</div>

					{/* Iframe - positioned below button on mobile, to the left on desktop */}
					<div className='w-full lg:w-auto lg:order-1 animate-slide-up animation-delay-200'>
						<div className='bg-card rounded-lg border border-border overflow-hidden shadow-lg'>
							<iframe
								key={iframeKey}
								src='/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=50'
								className='w-full lg:w-[750px] xl:w-[850px] h-[800px] border-0'
								title='Nguyen Minh Hoang - Resume'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
