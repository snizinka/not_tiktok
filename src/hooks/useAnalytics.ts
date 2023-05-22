import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as AnalyticsActionCreators from '../store/action-creator/analytics'

export default function useAnalyticsActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(AnalyticsActionCreators, dispatch)
}
