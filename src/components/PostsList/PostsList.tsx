import React, { useEffect } from "react"
import * as S from "./PostList.styled"
import { useDispatch, useSelector } from "react-redux"
import { currentPageNumberSelector } from "../../store/toolkitSelectors"
import { IPosts } from "../../interface/interface"
import { getPosts } from "../api/api"
import { allDataUpdate, setCurrentPageData, setTotalPageCount } from "../../store/reducersSlice"
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

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <S.Parent>
      <S.UserListBlock>
        {curPage?.map((el: IPosts) => (
          <S.UserInfo key={el.id}>
            <S.TextUrl>id:{el.id}</S.TextUrl>
            <S.TextBold>{el.title}</S.TextBold>
            <S.TextUrl>{el.body}</S.TextUrl>
            <S.TextUrl>{el.userId}</S.TextUrl>
          </S.UserInfo>
        ))}
      </S.UserListBlock>
    </S.Parent>
  )
}
export default PostList
