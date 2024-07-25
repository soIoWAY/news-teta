import { format, parseISO } from 'date-fns'
import { uk } from 'date-fns/locale'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import IArticle from '../../interfaces/app_interfaces'

interface IArticleFooter {
	article: IArticle
	saveNewHandler: (article: IArticle) => void
	savedNews: IArticle[]
}

const ArticleFooter = ({
	article,
	saveNewHandler,
	savedNews,
}: IArticleFooter) => {
	return (
		<div className='mt-1 flex items-center justify-between'>
			<p>
				{format(parseISO(article.publishedAt || ''), 'dd.MM.yy HH:mm', {
					locale: uk,
				})}
			</p>
			<button className='text-2xl' onClick={() => saveNewHandler(article)}>
				{savedNews.some(
					savedArticle => savedArticle.title === article.title
				) ? (
					<FaBookmark className='fill-yellow-400' />
				) : (
					<FaRegBookmark />
				)}
			</button>
		</div>
	)
}

export default ArticleFooter
