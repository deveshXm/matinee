import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Slider from '../components/Slider'
import requests from '../utils/requests'
import { Movie } from '../typings'
import Row from '../components/Row'
import Genre from '../components/Genre'
import useAuth from '../hooks/useAuth'
import { modalState, movieState } from '../atoms/modalAtom'
import { useRecoilValue } from 'recoil'
import Modal from '../components/Modal'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'

interface Props {
  recommended: Movie[]
  popularMovies: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({
  recommended,
  popularMovies,
  actionMovies,
  comedyMovies,
  // documentaries,
  horrorMovies,
  romanceMovies,
  // topRated,
  trendingNow,
}: 
Props) => {
  const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  if (loading) return null
  return (
    <div className="relative h-screen overflow-y-auto bg-hero-pattern bg-cover bg-no-repeat scrollbar-hide">
      <Head>
        <title>matinee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="  mt-20 pl-2.5 pb-24 lg:space-y-24 lg:pl-0 ">
        <Slider popularMovies={popularMovies} />
        <section className="mx-10 space-y-14">
          <Genre />
          <Row title="Based on your Last Watch" movies={recommended} />
          <Row title="Trending Now" movies={popularMovies} />
          <Row title="Action Movies" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {

  const [
    recommended,
    popularMovies,
    trendingNow,
    // topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
  ] = await Promise.all([
    fetch('http://localhost:8000/items/predict').then((res) => res.json()),
    fetch(requests.fetchpopularMovies).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    // fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    // fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      recommended: recommended,
      popularMovies: popularMovies.results,
      trendingNow: trendingNow.results,
      // topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      // documentaries: documentaries.results,
    },
  }
}
