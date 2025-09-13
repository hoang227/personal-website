export interface Album {
	id: string
	name: string
	artists: string[]
	imageUrl: string
	spotifyUrl: string
	releaseDate: string
	totalTracks: number
	albumType: string
	description?: string
}

export const musicData = {
	header: {
		title: 'Music',
		description: 'Collection of My Favorite Music',
	},

	favoriteAlbums: [
		{
			id: '7aJuG4TFXa2hmE4z1yxc3n',
			name: 'HIT ME HARD AND SOFT',
			artists: ['Billie Eilish'],
			imageUrl: '/albums/HIT ME HARD AND SOFT.jpg',
			spotifyUrl: 'https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n',
			releaseDate: '2024-05-17',
			totalTracks: 10,
			albumType: 'album',
			description:
				"Billie Eilish's third studio album showcasing her evolution as an artist with haunting melodies and introspective lyrics.",
		},
		{
			id: '5jsfwcWxZIPtF5aaWx0mlL',
			name: 'empathogen',
			artists: ['WILLOW'],
			imageUrl: '/albums/empathogen.jpg',
			spotifyUrl: 'https://open.spotify.com/album/5jsfwcWxZIPtF5aaWx0mlL',
			releaseDate: '2024-07-19',
			totalTracks: 12,
			albumType: 'album',
			description:
				"Clairo's dreamy indie pop album that explores themes of love, growth, and self-discovery.",
		},
		{
			id: '1KNUCVXgIxKUGiuEB8eG0i',
			name: 'Charm',
			artists: ['Clairo'],
			imageUrl: '/albums/Charm.jpg',
			spotifyUrl: 'https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i',
			releaseDate: '2024-04-05',
			totalTracks: 14,
			albumType: 'album',
			description:
				"Lizzy McAlpine's sophomore album featuring her signature storytelling and intricate musical arrangements.",
		},
		{
			id: '5r36AJ6VOJtp00oxSkBZ5h',
			name: "Harry's House",
			artists: ['Harry Styles'],
			imageUrl: "/albums/Harry's House.jpg",
			spotifyUrl: 'https://open.spotify.com/album/5r36AJ6VOJtp00oxSkBZ5h',
			releaseDate: '2022-05-20',
			totalTracks: 13,
			albumType: 'album',
			description:
				"Harry Styles' third studio album that blends pop, rock, and folk influences with personal and introspective themes.",
		},
	] as Album[],
}
