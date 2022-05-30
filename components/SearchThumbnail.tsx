import React from 'react'
import Image from 'next/image'
import {Movie} from '../typings'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props{
    movie:Movie
}

//taking movie as prop
function SearchThumbnail({movie}:Props) {

  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  
  return (
    < div className={`relative h-48 min-w-[140px] cursor-pointer transition duration-200 ease-out md:h-[73vh] md:min-w-[25vw] md:hover:scale-105 md:hover:border-4 md:hover:rounded-md border-white border-2 rounded-md border-opacity-40 md:hover:border-opacity-100`} onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)}}>
        <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default SearchThumbnail