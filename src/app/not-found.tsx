import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='app__notFound'>
      <div className='notFound__center'>
        <h1>404</h1>
        <Image src={"/others/NotFound.svg"} alt='Not Found 404' width={500} height={280} priority={false} />
        <p>You&#39;re navigated to a Broken URL.</p>
        <Link href="/dashboard" title='Dashboard'>Back Dashboard</Link>
      </div>
    </main>
  )
}

export default NotFound;