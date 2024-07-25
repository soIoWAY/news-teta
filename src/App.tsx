import { useEffect, useState } from 'react'
import { getNews, getTopNews } from './api/news'
import News from './components/News/News'
import SavedNews from './components/SavedNews/SavedNews'
import Searchbar from './components/Searchbar/Searchbar'
import Article from './interfaces/app_interfaces'

function App() {
	const [searchPhrase, setSearchPhrase] = useState('')
	const [news, setNews] = useState<Article[]>([])
	const [selectedNews, setSelectedNews] = useState(false)
	const [lastTabPress, setLastTabPress] = useState<number>(0)

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Tab') {
				const currentTime = Date.now()
				if (currentTime - lastTabPress < 500) {
					setSelectedNews(!selectedNews)
				}
				setLastTabPress(currentTime)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [lastTabPress])

	useEffect(() => {
		if (searchPhrase) {
			const fetchNews = async () => {
				try {
					const data = await getNews(searchPhrase)
					setNews(data)
				} catch (err) {
					console.error(err)
				}
			}
			fetchNews()
		} else {
			const fetchTopNew = async () => {
				try {
					const data = await getTopNews()
					setNews(data)
				} catch (err) {
					console.error(err)
				}
			}
			fetchTopNew()
		}
	}, [searchPhrase])
	return (
		<div className='bg-gray-100 p-5 sm:p-0 w-full sm:w-3/4 md:w-2/4 m-auto flex flex-col items-center mt-10'>
			<Searchbar setSearchPhrase={setSearchPhrase} />
			<div className='mt-10 flex gap-10'>
				<button
					onClick={() => setSelectedNews(false)}
					className={`${
						selectedNews ? 'bg-transparent' : 'bg-yellow-400'
					} border-2 border-yellow-500 py-1 w-36 rounded-md font-semibold`}
				>
					News
				</button>
				<button
					onClick={() => setSelectedNews(true)}
					className={`${
						selectedNews ? 'bg-yellow-400' : 'bg-transparent'
					} border-2 border-yellow-500 py-1 w-36 rounded-md font-semibold`}
				>
					Saved News
				</button>
			</div>
			{selectedNews ? <SavedNews /> : <News news={news} />}
		</div>
	)
}

export default App
