import Image from 'next/image'
import React from 'react'

function Brands() {
  return (
    <section className="max-auto mt-10 flex max-w-[1400px] flex-col items-center justify-around gap-6 px-10 ml-5 xl:flex-row ">
      <div className="brand group genre bg-[url('/images/horror.jpg')]">
        <h2>Horror</h2>
      </div>
      <div className="brand group genre bg-[url('/images/kids.png')]">
        <h2>Kids</h2>
      </div>
      <div className="brand group genre bg-[url('/images/action.jpg')]">
        <h2>Action</h2>
      </div>
      <div className="brand group genre bg-[url('/images/scifi.jpg')]">
        <h2>Sci-fi</h2>
      </div>
      <div className="brand group genre bg-[url('/images/romance.webp')]">
        <h2>Romance</h2>
      </div>
    </section>
  )
}

export default Brands
