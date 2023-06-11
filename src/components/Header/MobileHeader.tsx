import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const MobileHeader = () => {
    const refHeader = useRef<any>()
    const { user } = useTypedSelector(state => state.user)

    return (
        <div style={{
            marginLeft: 'auto',
            border: 'none',
            backgroundColor: 'transparent',
            height: '50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            justifyContent: 'center'
        }}>
            <button onClick={() => {
                refHeader.current.style.visibility = 'visible'
            }}>MENU</button>
            <div ref={refHeader} style={{
                visibility: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    background: '#000000de',
                    left: '0',
                    top: '0',
                    zIndex: '11',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onClick={() => {
                    refHeader.current.style.visibility = 'hidden'
                }}>
                    <Link to={`/`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Posts</Link>
                    <Link to={`/chat`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Chat</Link>
                    <Link to={`/admin`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Admin</Link>
                    <Link to={`/analytics`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Analytics</Link>
                    <Link to={`/profile/${user[0].userId}`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Profile</Link>
                    <Link to={`/editprofile`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Settings</Link>
                    <Link to={`/request`} style={{ width: '40%', display: 'block', fontSize: '25px', fontFamily: 'Signika Negative', color: 'white' }}>Request a post</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
