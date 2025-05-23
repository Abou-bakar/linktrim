"use client"
import Link from 'next/link'
// This is a client component
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [generated, setgenerated] = useState(false)

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl,
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          // setgenerated(true)
          seturl("")
          setshorturl("")
          console.log(result)
          alert(result.message)})

        .catch((error) => console.error(error));
    }
    
  return (
    <div className='mx-auto my-10 w-1/2 bg-purple-100 p-10 rounded-lg shadow-lg flex flex-col gap-4'>
      <h1 className='text-xl font-bold text-center'>Generate your short URLs </h1>
      <div className='flex flex-col gap-3'> 
        <input value={url} className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" placeholder='Enter your URL' onChange={e=>{seturl(e.target.value)}} />
        <input   value={shorturl} className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" placeholder='Enter your preferred short URL' onChange={e=>{setshorturl(e.target.value)}} />
        <button onClick={generate} type="button" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md px-4 py-2 text-center">Generate</button>
      </div>
        {generated && <> <span className='font-bold text-lg'>Your short URL is:</span>
        <code><Link target='_blank' href={generated}>{generated}</Link>
        </code>
        </>}
    </div>
  )
}

export default Shorten
