import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
// import useAuth from '../hooks/useAuth'
import Link from 'next/link'
// import BasicMenu from './BasicMenu'

function Header() {

  return (
    <div className="fixed top-0 w-full flex px-10 z-[1000] h-[72px] items-center space-x-2 bg-black md:space-x-10 justify-between ">
      <div className='flex items-center'>
        <h2 className=" -mt-2 bg-gradient-to-r  from-sky-500 to-indigo-500 bg-clip-text text-3xl font-extrabold text-transparent pr-10">
        matinee
      </h2>

      {/* <BasicMenu /> */}

      <ul className="hidden space-x-9 md:flex">
        <li className="headerLink cursor-pointer font-semibold text-white hover:text-indigo-600">
          Home
        </li>
        <li className="headerLink">TV Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
      </ul>
      </div>
      
      <div className="flex items-center  space-x-4 text-sm font-light text-white cursor-pointer">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
