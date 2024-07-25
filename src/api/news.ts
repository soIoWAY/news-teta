import axios from 'axios'

export const getNews = async (searchPhrase: string) => {
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/everything?q=${searchPhrase}&apiKey=1681d65828df489db7d4383fc0a61649`
		)
		return res.data.articles
	} catch (err) {
		console.error(err)
	}
}

export const getTopNews = async () => {
	try {
		const res = await axios.get(
			'https://newsapi.org/v2/top-headlines?country=ua&apiKey=1681d65828df489db7d4383fc0a61649'
		)
		return await res.data.articles
	} catch (err) {
		console.error(err)
	}
}
