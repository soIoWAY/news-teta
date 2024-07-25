import { useEffect, useState } from 'react'
import Article from '../../interfaces/app_interfaces'
import News from '../News/News'

const SavedNews = () => {
	const [savedNews, setSavedNews] = useState<Article[]>([])
	useEffect(() => {
		const saved = localStorage.getItem('savedNews')
		if (saved) {
			setSavedNews(JSON.parse(saved))
		}
	}, [])
	return <News news={savedNews} />
}

export default SavedNews
