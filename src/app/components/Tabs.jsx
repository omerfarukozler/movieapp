"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const tabs =[
     {
      name:"En Populer",
      url:"popular"
     },
     {
      name:"En Son",
      url:"latest"
     },
     {
      name:"Yakında Gelecekler",
      url:"upcoming"
     }
  ]
  return (
    <div className='p-5 m-5 bg-gray-300 dark:bg-gray-800 flex items-center justify-center gap-7'>
     {
      tabs.map((tab,i)=>(
        <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline und text-amber-600":""}`} key={tab.name} href={`/?genre=${tab.url}`}>{tab.name}</Link>
      ))
     }
    </div>
  )
}

export default Tabs
