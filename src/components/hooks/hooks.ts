import { IPosts } from "../../interface/interface"

export function ForPagination(arrData: IPosts) {
  const size: number = arrData.length
  const pageForShow = 10
  const resultCountPages: Number = Math.ceil(size / pageForShow)
  return resultCountPages
}
