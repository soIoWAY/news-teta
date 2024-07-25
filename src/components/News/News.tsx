import { useEffect, useState } from 'react'
import IArticle from '../../interfaces/app_interfaces'
import Article from '../Article/Article'

interface INewsProps {
	news: IArticle[]
}
const News = ({ news }: INewsProps) => {
	const [savedNews, setSavedNews] = useState<IArticle[]>([])
	useEffect(() => {
		const saved = localStorage.getItem('savedNews')
		if (saved) {
			setSavedNews(JSON.parse(saved))
		}
	}, [])

	const saveNewHandler = (article: IArticle) => {
		let updatedSavedNews = [...savedNews]
		const isArticleSaved = updatedSavedNews.some(
			savedArticle => savedArticle.title === article.title
		)
		if (isArticleSaved) {
			updatedSavedNews = updatedSavedNews.filter(
				savedArticle => savedArticle.title !== article.title
			)
		} else {
			updatedSavedNews.push(article)
		}
		localStorage.setItem('savedNews', JSON.stringify(updatedSavedNews))
		setSavedNews(updatedSavedNews)
	}
	return (
		<div className='mt-12 w-full sm:w-9/12 flex flex-col items-center'>
			<h1 className='text-4xl font-bold tracking-wide'>News</h1>
			<div className='flex flex-col items-center h-[80vh] overflow-y-auto'>
				{news.map((article, index) => (
					<Article
						article={article}
						key={index}
						saveNewHandler={saveNewHandler}
						savedNews={savedNews}
					/>
				))}
			</div>
		</div>
	)
}

export default News
