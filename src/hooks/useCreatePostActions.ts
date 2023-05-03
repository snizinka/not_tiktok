import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as CreatePostActionCreators from '../store/action-creator/createPost'

export default function useActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(CreatePostActionCreators, dispatch)
}
