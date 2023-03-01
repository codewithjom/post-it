export type PostType = {
  title: string
  id: string
  createdAt: string
  user: {
    name: string
    image: string
  }
  Comment?: {
    createdAt: string
    id: string
    postID: string
    userID: string
  }[]
}
