import axios from "axios"

export async function getPosts() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts")
  return response.data
}
