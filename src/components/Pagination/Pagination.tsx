import * as S from "./Pagination.styled"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { pageNumberSelector, totalPagesCountSelector } from "../../store/toolkitSelectors"
import { pageNumberUpdate, setCurrentPageData } from "../../store/reducersSlice"

function Pagination() {
  const dispatch = useDispatch()
  const currentPage = useSelector(pageNumberSelector)
  const allPagesCount = useSelector(totalPagesCountSelector)

  const prev = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1
      dispatch(pageNumberUpdate(newCurrentPage))
      dispatch(setCurrentPageData())
    }
  }

  const next = () => {
    if (currentPage < allPagesCount) {
      dispatch(pageNumberUpdate(currentPage + 1))
      dispatch(setCurrentPageData())
    }
  }
  return (
    <S.PagesContainer>
      <S.BtnPrev type="button" onClick={prev}>
        Назад
      </S.BtnPrev>

      <S.CurrentNumberPageDiv>{currentPage}</S.CurrentNumberPageDiv>
      <S.BtnNext type="button" onClick={next}>
        Вперед
      </S.BtnNext>
    </S.PagesContainer>
  )
}

export default Pagination
