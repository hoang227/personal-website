export const AlbumSkeleton = () => (
	<div>
		{/* Mobile Loading: Horizontal */}
		<div className='flex items-start space-x-4 md:hidden'>
			<div className='w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse flex-shrink-0'></div>
			<div className='flex-1 space-y-2'>
				<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
				<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3'></div>
				<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2'></div>
			</div>
		</div>
		{/* Desktop Loading: Vertical */}
		<div className='hidden md:block space-y-3'>
			<div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse'></div>
			<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
			<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3'></div>
		</div>
	</div>
)
