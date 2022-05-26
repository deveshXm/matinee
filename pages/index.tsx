import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Slider from '../components/Slider'
import requests from '../utils/requests'
import { Movie } from '../typings'
import Row from '../components/Row'
import Genre from '../components/Genre'
import useAuth from '../hooks/useAuth'
import {modalState, movieState} from '../atoms/modalAtom'
import { useRecoilValue } from 'recoil'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'


interface Props {
  recommended: Movie[]
  netflixOriginals: Movie[]
  // trendingNow: Movie[]
  // topRated: Movie[]
  // actionMovies: Movie[]
  // comedyMovies: Movie[]
  // horrorMovies: Movie[]
  // romanceMovies: Movie[]
  // documentaries: Movie[]
  // products: Product[]
}

const Home = ({
  recommended,
  netflixOriginals,
  // actionMovies,
  // comedyMovies,
  // documentaries,
  // horrorMovies,
  // romanceMovies,
  // topRated,
  // trendingNow,
}: // products,
Props) => {

  const {loading} = useAuth()
  const showModal = useRecoilValue(modalState)
  console.log(netflixOriginals)

  if(loading) return null
  return (
    <div className="relative h-screen scrollbar-hide overflow-y-auto bg-hero-pattern bg-cover bg-no-repeat">
      <Head>
        <title>matinee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="  mt-20 pl-2.5 pb-24 lg:space-y-24 lg:pl-0 ">
        <Slider netflixOriginals={netflixOriginals} />
        <section className="mx-10 space-y-14">
          <Genre />
          <Row title="Recommended" movies={recommended} />
          {/* <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} /> */}
        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {

  const [
    recommended,
    netflixOriginals,
    // trendingNow,
    // topRated,
    // actionMovies,
    // comedyMovies,
    // horrorMovies,
    // romanceMovies,
    // documentaries,
  ] = await Promise.all([
    fetch('http://localhost:5000/movies').then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    // fetch(requests.fetchTrending).then((res) => res.json()),
    // fetch(requests.fetchTopRated).then((res) => res.json()),
    // fetch(requests.fetchActionMovies).then((res) => res.json()),
    // fetch(requests.fetchComedyMovies).then((res) => res.json()),
    // fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    // fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    // fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      recommended: recommended,
      netflixOriginals: netflixOriginals.results,
      // trendingNow: trendingNow.results,
      // topRated: topRated.results,
      // actionMovies: actionMovies.results,
      // comedyMovies: comedyMovies.results,
      // horrorMovies: horrorMovies.results,
      // romanceMovies: romanceMovies.results,
      // documentaries: documentaries.results,
      // products,
    },
  }
}
