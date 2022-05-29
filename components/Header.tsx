import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'
import Router, { useRouter } from 'next/router'

function Header() {
  const { logout, loading } = useAuth()


  if (loading) return null //for slow internet connection if loading is true return null

  return (
    <div className="fixed top-0 z-[1000] flex h-[65px] w-full items-center justify-between space-x-2 bg-black px-10 md:space-x-10 ">
      <div className="flex items-center">
        <h2 className=" -mt-2 bg-gradient-to-r  from-sky-500 to-indigo-500 bg-clip-text pr-10 text-3xl font-extrabold text-transparent">
          matinee
        </h2>

        <BasicMenu />

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

      <div className="flex cursor-pointer  items-center space-x-4 text-sm font-light text-white">
        <Link href="/Search">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        </Link>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <img
          onClick={logout}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </div>
  )
}

export default Header
