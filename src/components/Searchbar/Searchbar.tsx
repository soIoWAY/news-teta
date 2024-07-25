import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface ISearchbarProps {
	setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = ({ setSearchPhrase }: ISearchbarProps) => {
	const [inputSearchPhrase, setInputSearchPhrase] = useState('')
	const sendFormHandler = (e: React.FormEvent) => {
		e.preventDefault()
		setSearchPhrase(inputSearchPhrase)
	}
	return (
		<form
			className='w-full flex items-center bg-white shadow-lg py-3 px-3 rounded-md'
			onSubmit={e => sendFormHandler(e)}
		>
			<input
				type='text'
				className='outline-none text-center text-xl font-medium w-full'
				placeholder='Пошук'
				onChange={e => setInputSearchPhrase(e.target.value)}
			/>
			<button className='text-2xl'>
				<FaSearch />
			</button>
		</form>
	)
}

export default Searchbar
