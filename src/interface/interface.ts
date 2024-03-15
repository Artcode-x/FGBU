export interface IPosts {
  length: number
  body: string
  id: number
  title: string
  userId: number
}

export interface IData {
  map(arg0: (el: IData) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  body: string
  email: string
  id: number
  name: string
  postId: number
}
