import axios from "axios"

export async function getPosts() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts")
  return response.data
}

export async function getPostInfo(id: number) {
  const response = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  return response.data
}
