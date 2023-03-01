export type AuthPosts = {
  email: string
  id: string
  image: string
  name: string
  Post: {
    createdAt: string
    id: string
    title: string
    Comment?: {
      createdAt: string
      id: string
      postID: string
      title: string
      userID: string
    }[]
  }[]
}
