import React from "react"
import analytics from '../../style/analytics.module.css'

const AnalyticsDropdown = ({ post, fetchPost }: any) => {
    return (
        <div onClick={() => fetchPost(post.postId)} className={analytics.analyticsDropDown}>
            <p className={analytics.analyticsDropDownP}>{post.description}</p>
        </div>
    )
}

export default AnalyticsDropdown;
