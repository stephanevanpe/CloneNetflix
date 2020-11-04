const API_KEY = 'bceb5e1005e7dc1d420fb309a8cf722e';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFecth = async (endpoint) =>{
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Séries Tv ',
				items: await basicFecth(`/discover/tv/?with_network=213&language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'trending',
				title: 'Recomendez pour Vous ',
				items: await basicFecth(`/trending/all/week?language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'toprated',
				title: 'Mieux notés',
				items: await basicFecth(`/movie/top_rated?&language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'action',
				title: 'Actions',
				items: await basicFecth(`/discover/movie?with_genres=28&language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'comedy',
				title: 'Comédie',
				items: await basicFecth(`/discover/movie?with_genres=35&language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'horror',
				title: 'Terreur',
				items: await basicFecth(`/discover/movie?with_genres=27&language=fr-Fr&api_key=${API_KEY}`),
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFecth(`/discover/movie?with_genres=10749&language=fr-FR&api_key=${API_KEY}`),
			},
			{
				slug: 'documentary',
				title: 'Documentaires',
				items: await basicFecth(`/discover/movie?with_genres=99&language=fr-FR&api_key=${API_KEY}`),
			},
		];
	},
	getTvList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Séries Tv',
				items: await basicFecth(`/discover/tv/?with_network=213&language=fr-FR&api_key=${API_KEY}`),
			},
		];
	},
	getMoviesList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Films',
				items: await basicFecth(`/discover/movie?language=fr-FR&api_key=${API_KEY}`),
			},
		];
	},
	getRecentlyList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Dernièrement Sorti',
				items: await basicFecth(`/discover/movie?latest&language=fr-FR&api_key=${API_KEY}`),
			},
		];
	},
	getKidsList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Jeunesse',
				items: await basicFecth(`/search/movie?page=25&query=disney&pixar&language=fr-FR&api_key=${API_KEY}`),
			},
		];
	},
	getMovieInfo: async (movieId, type) => {
		let info = {};
		if (movieId) {
			switch (type) {
				case 'movie':
					info = await basicFecth(`/movie/${movieId}?language=fr-FR&api_key=${API_KEY}`);
					break;
				case 'tv':
					info = await basicFecth(`/tv/${movieId}?language=fr-FR&api_key=${API_KEY}`);
					break;
				default:
					info = null;
					break;
			}
		}

		return info;
	},
};