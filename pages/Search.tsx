import { useEffect, useReducer, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import SearchRow from '../components/SearchRow'
import Modal from '../components/Modal'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Link from 'next/link'

function Search() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const showModal = useRecoilValue(modalState)
  const [ignored,forceUpdate] = useReducer(x=>x+1,0)
  
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/items/predict').then(
        (res) => res.json()
      )
      setResults(response)
      forceUpdate()
    })()
  }, [ignored])

  //taking event value from input field
  const handleChange = (event) => {
    setInput(event.target.value)
    console.log('input box:', event.target.value)
  }
  //fetching results when Search button is clicked
  const handleClick = (event) => {
    event.preventDefault()
    const response = fetch('http://localhost:8000/' + input).then((res) =>
      res.json()
    )
    console.log(response)
    console.log('on click: ', input)
  }

  

  return (
    <div className="h-screen overflow-y-auto bg-cover bg-no-repeat scrollbar-hide md:bg-hero-pattern">
      <Head>
        <title>matinee | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-2 md:mx-20 mt-5 flex items-center justify-between"><Link href="/">
        <h2 className=" -mt-8 bg-gradient-to-r  from-sky-500 to-indigo-500 bg-clip-text text-3xl font-extrabold text-transparent cursor-pointer">
          matinee
        </h2></Link>
        <div className="input-group relative ml-10 mb-4 flex md:w-[50vw]">
          
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={handleChange}
            />     

          <button
            onClick={handleClick}
            className="btn ml-1 flex items-center rounded bg-gray-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md  transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            type="button"
            id="button-addon2"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div>
        <div className="mx-8 mt-4">
          <SearchRow title="Results" movies={results} />
        </div>
      </div>

      {showModal && <Modal />}
    </div>
  )
}

export default Search
