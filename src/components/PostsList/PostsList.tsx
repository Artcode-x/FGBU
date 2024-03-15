import React, { useEffect } from "react"
import * as S from "./PostList.styled"
import { useDispatch, useSelector } from "react-redux"
import { currentPageNumberSelector } from "../../store/toolkitSelectors"
import { IData, IPosts } from "../../interface/interface"
import { getPostInfo, getPosts } from "../api/api"
import {
  allDataUpdate,
  flagUpdate,
  setCurrentPageData,
  setSelectPostData,
  setTotalPageCount,
} from "../../store/reducersSlice"
import { ForPagination } from "../hooks/hooks"

function PostList() {
  const dispatch = useDispatch()
  const curPage = useSelector(currentPageNumberSelector)

  const getAllPosts = async () => {
    const response: IPosts = await getPosts()
    const resultCountPages = ForPagination(response)
    dispatch(setTotalPageCount(resultCountPages))
    dispatch(allDataUpdate(response))
    dispatch(setCurrentPageData())
  }

  const clickToPost = async (id: number) => {
    const resp: IData = await getPostInfo(id)
    dispatch(setSelectPostData(resp))
    dispatch(flagUpdate(true))
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <S.Parent>
      <S.UserListBlock>
        {curPage?.map((el: IPosts, index: number) => (
          <S.UserInfo key={el.id}>
            <S.TextUrl>id:{el.id}</S.TextUrl>
            <S.TextBold>{el.title}</S.TextBold>
            <S.TextUrl>{el.body}</S.TextUrl>
            <S.TextUrl>{el.userId}</S.TextUrl>
            <S.GoToPost
              onClick={() => {
                clickToPost(el.id)
              }}
            >
              Перейти на страницу поста
            </S.GoToPost>
          </S.UserInfo>
        ))}
      </S.UserListBlock>
    </S.Parent>
  )
}
export default PostList
