import React from "react"
import useIsMobile from "../../hooks/useIsMobile";
import postStyles from '../../style/post.module.css'

const PostDescription = (props: { props: any }) => {
    return (
        <div className={postStyles.desctiption}
            style={{
                marginBottom: useIsMobile() ? '5px' : '35px',
                height: useIsMobile() ? '40%' : '260px'
            }}>
            <div className={postStyles.desctiption_container} style={{
                overflow: 'scroll',
                height: '100%'
            }}>
                <div className={postStyles.category} style={{ paddingTop: useIsMobile() ? '0px' : '10px' }}>

                    {
                        props?.props?._category?.map((cat: any) => {
                            return <a key={`postCategory-${cat?.categoryId}`} href="#">@{cat?.categoryName}</a>
                        })
                    }

                </div>
                <div className={postStyles.description_text} style={{
                    height: useIsMobile() ? '100%' : '195px',
                    paddingTop: useIsMobile() ? '0' : '20px'
                }}>
                    <p style={{ fontSize: useIsMobile() ? '16px' : '19px' }}>{props?.props?.description}</p>
                </div>
            </div>
        </div>
    )
};

export default PostDescription;
