// Helper function to format release date
export const formatReleaseDate = (dateString: string) => {
	const date = new Date(dateString)
	return date.getFullYear()
}
