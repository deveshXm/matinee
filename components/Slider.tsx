import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Movie } from '../typings'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  popularMovies: Movie[]
}

function Slider({ popularMovies }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [movie, setMovie] = useState<Movie | null>(null)
  

  useEffect(() => {
    setMovie(
      popularMovies[Math.floor(Math.random() * popularMovies.length)]
    )
  }, [popularMovies])

  console.log(movie)

  return (
    <section className="mx-auto mt-3 min-h-[35vh] w-[95vw]  text-white shadow-2xl hover:cursor-pointer sm:h-[55vh] md:h-[95vh] lg:h-[85vh]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        {popularMovies.map((movie) => (
          <div className="flex min-h-[35vh] flex-col space-y-2 py-1 pl-10 sm:min-h-[55vh] md:space-y-4 lg:h-[85vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 min-h-[35vh] w-screen sm:min-h-[55vh] md:min-h-[95vh]">
              <Image
                layout="fill"
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                objectFit="cover"
              />
            </div>
            <div className="w-full space-y-4 text-left text-gray-100">
              <h1 className="text-2xl font-bold text-shadow-md md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
              </p>
              <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black" >
                  <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                  Play
                </button>

                <button
                  className="bannerButton bg-[gray]/70"
                  onClick={() => {
                    setCurrentMovie(movie)
                    setShowModal(true)
                  }}
                >
                  <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />{' '}
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Slider
