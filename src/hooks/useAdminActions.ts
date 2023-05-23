import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as AdminActionCreators from '../store/action-creator/admin'

export default function useAdminActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(AdminActionCreators, dispatch)
}
