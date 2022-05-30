import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function login() {
  const [login, setLogin] = useState(false)
  const {signIn,signUp} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if(login){
      await signIn(data.email,data.password)
    } else{
      await signUp(data.email,data.password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black text-white md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>matinee | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/hero-background.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <div className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 ">
        <h2 className="bg-gradient-to-r  from-sky-500 to-indigo-500 bg-clip-text pr-10 text-4xl font-extrabold text-transparent md:text-7xl">
          matinee
        </h2>
      </div>
      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:rounded-lg md:border md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full text-white">
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`input ${
                errors.password && 'border-b-2 border-orange-500'
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className="w-full rounded bg-gradient-to-r  from-sky-500 to-indigo-500 py-3 font-semibold" onClick={()=> setLogin(true)}>
          Sign In
        </button>
        <div>
          <p className="text-[gray]">
            Don't have an account?{' '}
            <button className="text-white hover:underline" onClick={()=>setLogin(false)}>Sign up now!</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default login
