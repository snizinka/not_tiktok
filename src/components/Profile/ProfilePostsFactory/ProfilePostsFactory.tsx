import React, { memo, useRef } from "react"
import ProfilePosts from "./ProfilePosts";
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProfileResponsesPosts from "./ProfileResponsesPosts";

const ProfilePostsFactory = (props: any) => {
    const { postType } = useTypedSelector(state => state.profile)
    let content: any = useRef({});

    switch (postType) {
        case 'all':
            content.current.value = <ProfilePosts posts={props.posts} />
            break;
        case 'saved':
            content.current.value = <ProfilePosts posts={props.posts} />
            break;
        case 'recent':
            content.current.value = <ProfilePosts posts={props.posts} />
            break;
        case 'response':
            content.current.value = <ProfileResponsesPosts posts={props.posts} />
            break;
        default:
            content.current.value = {}
            break
    }
    return (
        <React.Fragment key={`profilePosts`}>
            {
                content.current.value
            }
        </React.Fragment>
    )
};

export default memo(ProfilePostsFactory);
