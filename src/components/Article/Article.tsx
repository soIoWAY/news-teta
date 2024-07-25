import IArticle from '../../interfaces/app_interfaces'
import ArticleFooter from './ArticleFooter'

interface IArticleProps {
	article: IArticle
	saveNewHandler: (article: IArticle) => void
	savedNews: IArticle[]
}

const Article = ({ article, saveNewHandler, savedNews }: IArticleProps) => {
	return (
		<article className='bg-white mt-5 w-full rounded-md shadow-lg'>
			<img
				src={
					article.urlToImage ||
					'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
				}
				alt='img'
				className='rounded-t-md w-full h-90'
			/>
			<div className='py-2 px-3'>
				<div className='border-b border-gray-300 pb-1'>
					<div>
						<h2 className='text-xl font-semibold'>{article.title}</h2>
					</div>
					<p className='mt-2'>{article.description}</p>
					<a
						href={article.url || '#'}
						target='_blank'
						className='block bg-green-400 text-white px-3 py-1 my-2 w-fit rounded-md hover:bg-green-500 transition-all'
					>
						Читати далі
					</a>
				</div>
				<ArticleFooter
					article={article}
					savedNews={savedNews}
					saveNewHandler={saveNewHandler}
				/>
			</div>
		</article>
	)
}

export default Article
