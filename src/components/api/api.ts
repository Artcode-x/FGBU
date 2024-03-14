import axios from "axios"

export default function testQuerry() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export async function test() {
  const response = await axios("https://jsonplaceholder.typicode.com/todos/1")
  console.log(response.data)
  return response.data
}

export async function getPosts() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts")
  return response.data
}
