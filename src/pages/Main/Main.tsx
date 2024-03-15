import * as S from "./Main.styled"
import Pagination from "../../components/Pagination/Pagination"
import PostList from "../../components/PostsList/PostsList"
import { useSelector } from "react-redux"
import { flagSelector } from "../../store/toolkitSelectors"
import Modal from "../../components/Modal/Modal"

function Main() {
  const flag: boolean = useSelector(flagSelector)
  return (
    <S.GeneralBlock>
      <PostList />
      <Pagination />
      {flag && <Modal />}
    </S.GeneralBlock>
  )
}

export default Main
