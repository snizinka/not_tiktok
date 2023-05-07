import React, { memo } from "react"
import useRequestUsersActions from "../../hooks/useRequestUsersActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CreatePostPurpose = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { fetchRequestsByCreator } = useRequestUsersActions()

    return (
        <div className="content-type-contain">
            <div className="ag-courses_box">
                <div className="ag-courses_item">
                    <button className="ag-courses-item_link" onClick={() => {
                        props.setIsOrderContent(true)
                        props.switchHorizontalSlide(1)
                        fetchRequestsByCreator(user[0].userId)
                    }}>
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                            Preordered post
                        </div>

                        <div className="ag-courses-item_date-box">
                            Tag user:
                            <span className="ag-courses-item_date">
                                needed
                            </span>
                        </div>
                    </button>
                </div>

                <span className="or-separator">or</span>

                <div className="ag-courses_item">
                    <button className="ag-courses-item_link" onClick={() => {
                        props.setIsOrderContent(false)
                        props.switchHorizontalSlide(1)
                    }}>
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                            Own creation post
                        </div>

                        <div className="ag-courses-item_date-box">
                            Tag user:
                            <span className="ag-courses-item_date">
                                not important
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default memo(CreatePostPurpose);
