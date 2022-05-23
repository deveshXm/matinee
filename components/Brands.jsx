import Image from 'next/image'
import React from 'react'

function Brands() {
  return (
    <section className="max-auto mt-10 flex max-w-[1400px] flex-col items-center justify-around gap-6 px-10 ml-5 xl:flex-row ">
      <div className="brand transform-[300] group items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-5xl font-bold hover:bg-[url('/images/horror.jpg')] hover:text-white">
        <h2>Horror</h2>
      </div>
      <div className="brand transform-[300] group items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-5xl font-bold hover:bg-[url('/images/kids.png')] hover:text-white">
        <h2>Kids</h2>
      </div>
      <div className="brand transform-[300] group items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-5xl font-bold hover:bg-[url('/images/action.jpg')] hover:text-white">
        <h2>Action</h2>
      </div>
      <div className="brand transform-[300] group items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-5xl font-bold hover:bg-[url('/images/scifi.jpg')] hover:text-white">
        <h2>Sci-fi</h2>
      </div>
      <div className="brand transform-[300] group items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-5xl font-bold hover:bg-[url('/images/romance.webp')] hover:text-white">
        <h2>Romance</h2>
      </div>
    </section>
  )
}

export default Brands
