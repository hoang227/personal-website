import { Button } from '@/components/ui/button'
import ShotsHeader from '@/components/shots/ShotsHeader'
import { ShotsDescription } from '@/components/shots/ShotsDescription'
import { ShotsGallery } from '@/components/shots/ShotsGallery'
import VSCOSeal from '@/assets/svg/VSCO_Seal.svg'

export default function ShotsPage() {
	return (
		<div className='h-full lg:pb-12 px-6 lg:px-12 xl:px-20'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 lg:mb-4'>
					<div className='flex-1'>
						<ShotsHeader
							title='Shots'
							description='My Photography Collection'
						/>
					</div>
					<div className='flex-shrink-0 animate-slide-up animation-delay-200'>
						<a
							href='https://vsco.co/hoangg227/gallery'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block'>
							<Button
								size='default'
								className='rounded-full text-white text-sm font-inter font-medium px-3 py-3 h-auto bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0'>
								<img
									src={VSCOSeal}
									alt='VSCO'
									className='w-6 h-6 mr-1 invert brightness-0 contrast-200 dark:brightness-100 dark:contrast-0'
								/>
								Follow me on VSCO
							</Button>
						</a>
					</div>
				</div>

				{/* Shots Description */}
				<ShotsDescription />

				{/* Photo Gallery */}
				<div className='mb-16 space-y-8'>
					<div className='space-y-6 animate-slide-up animation-delay-200'>
						<ShotsGallery />
					</div>
				</div>
			</div>
		</div>
	)
}
