import { useDispatch, useSelector } from "react-redux"
import { PostDataSelector } from "../../store/toolkitSelectors"
import * as S from "./Modal.styled"
import { flagUpdate } from "../../store/reducersSlice"
import { IData } from "../../interface/interface"

function Modal() {
  const dispatch = useDispatch()
  const dataFromPost: IData = useSelector(PostDataSelector)

  return (
    <S.Modal>
      <S.Parent>
        <S.UserBlock>
          <S.Close onClick={() => dispatch(flagUpdate(false))}>закрыть</S.Close>
          {dataFromPost.map((el: IData) => (
            <S.UserInfo key={el.id}>
              <S.BoldText>{el.id}</S.BoldText>
              <S.BoldText>{el.name}</S.BoldText>
              <S.TextUrlx>{el.body}</S.TextUrlx>
              <S.TextUrlx>{el.email}</S.TextUrlx>
              <S.TextUrlx>{el.postId}</S.TextUrlx>
            </S.UserInfo>
          ))}
        </S.UserBlock>
      </S.Parent>
    </S.Modal>
  )
}
export default Modal
