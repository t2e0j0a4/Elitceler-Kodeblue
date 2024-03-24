'use client' 
 
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
 
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

  useEffect(() => {
    console.error(error);
  }, [error])
 
  return (
    <main className='app__error'>
      <div className='error__center'>
        <Image src="/others/ServerDown.svg" priority={false} alt='Error Occured' width={500} height={380} />
        <h2>Something Went Wrong!</h2>
        <div className='error__options'>
          <button type="button" onClick={() => reset()}>Try Again!</button>
          <Link href="/dashboard" title='Dashboard'>Go To Dashboard</Link>
        </div>
      </div>
    </main>
  )
}