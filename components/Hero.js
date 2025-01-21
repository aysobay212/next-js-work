import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>
        This website helps you <span className='textGradient'> track </span> and log 
        your <span className='textGradient'> daily moods </span>
      </h1>

      {/* font-medium adjusts the weight on the text*/}
      <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>
          Create your mood record and view past <span className='font-semibold'> mood data </span>
      </p>
      
    </div>
  )
}
