import * as S from "./Main.styled"
import Pagination from "../../components/Pagination/Pagination"
import PostList from "../../components/PostsList/PostsList"

function Main() {
  return (
    <S.GeneralBlock>
      <PostList />
      <Pagination />
    </S.GeneralBlock>
  )
}

export default Main
