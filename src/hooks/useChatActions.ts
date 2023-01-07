import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as ChatActionCreators from '../store/action-creator/chat'

export default function useChatActions() {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(ChatActionCreators, dispatch)
}