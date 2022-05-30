import React from 'react'
import Image from 'next/image'
import {Movie} from '../typings'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props{
    movie:Movie
}

//Movie Thumbnail componenets in Row
function Thumbnail({movie}:Props) {

  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  
  return (
    < div className="brand genre bg-black  flex max-w-[1400px] min-w-[45vw] md:min-w-[16vw] items-center justify-around font-normal text-xl md:font-medium md:text-[1.5rem] md:hover:text-shadow-xl md:hover:scale-110 text-transparent" onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)}}>
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path 
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
      <p className='relative'>{movie?.title || movie?.original_name}</p>
    </div>
  )
}

export default Thumbnail