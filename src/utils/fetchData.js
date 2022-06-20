export const exerciseOptions = {
	method: 'GET',
	headers: {
	'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
    },
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	'X-RapidAPI-Key': '9660c8ce41msh5dd729ed68864a7p1ca539jsn6fb00ba54199',
	},
};

export const fetchData = async (url, options) => {
	console.log(fetchData);
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};