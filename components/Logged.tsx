'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

type User = {
  image: string
}

export default function Logged({ image }: User) {
  return (
    <li className="flex items-center gap-8">
      <button onClick={() => signOut()} className="px-6 py-2 text-sm text-white bg-gray-700 rounded-md">
        Sign out
      </button>
      <Link href={'/dashboard'}>
        <Image width={64} height={64} className="rounded-full w-14" src={image} alt="" priority />
      </Link>
    </li>
  )
}
