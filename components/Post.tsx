'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  avatar: any
  name: any
  postTitle: any
  id: any
  comments: any
}

export default function Post({ avatar, name, postTitle, id, comments }: Props) {
  return (
    <div className="p-8 my-8 bg-white rounded-lg">
      <div className="flex items-center gap-2">
        <Image className="rounded-full" width={32} height={32} src={avatar} alt="avatar" />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{postTitle}</p>
      </div>
      <div className="flex items-center cursor-pointer gap-4">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold text-gray-700">{comments.length} Comments</p>
        </Link>
      </div>
    </div>
  )
}
