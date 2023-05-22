import React from "react"
import analytics from '../../style/analytics.module.css'

const AnalyticsDropdown = ({ post }: any) => {
    return (
        <div className={analytics.analyticsDropDown}>
            <p className={analytics.analyticsDropDownP}>{post.description}</p>
        </div>
    )
}

export default AnalyticsDropdown;
