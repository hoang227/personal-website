import { Music } from 'lucide-react'

interface EmptyStateProps {
	title: string
}

export const EmptyState = ({ title }: EmptyStateProps) => (
	<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700'>
		<h4 className='font-inter font-semibold text-xl text-foreground mb-4'>
			{title}
		</h4>
		<div className='flex items-center space-x-3'>
			<div className='w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center'>
				<Music className='w-8 h-8 text-gray-400' />
			</div>
			<div className='flex-1'>
				<p className='text-gray-600 dark:text-gray-300 font-inter'>
					No albums found
				</p>
			</div>
		</div>
	</div>
)
