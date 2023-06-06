import headerStyles from '../style/header.module.css'
import React, { useEffect } from 'react'
import useUserActions from '../hooks/useUserActions';
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import DropdownMenu from './DropdownMenu';
import useSearchActions from '../hooks/useSearchActions';
import Notifications from './Notifications/Notifications';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './Header/MobileHeader';

function Header() {
    const hideNav = useMediaQuery({ query: '(max-width: 900px)' })
    const { user } = useTypedSelector(state => state.user)
    const { search } = useTypedSelector(state => state.search)
    const { notifications } = useTypedSelector(state => state.notifications)
    const { setSearchValue } = useSearchActions()

    const { userLogout } = useUserActions()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(notifications)
    }, [notifications])

    return <header className={headerStyles.header}>
        <div className={headerStyles.container}>
            <h1 className={headerStyles.logo}><Link to={`/`} style={{ width: '100%', display: 'block', color: '#FFF9D7' }}>Not TikTok</Link></h1>
            {
                hideNav ? <button
                style={{
                    marginLeft: 'auto',
                    border: 'none',
                    backgroundColor: 'transparent',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    justifyContent: 'center'
                }}
                >
                    <div style={{ width: '20px', height: '5px', background: '#BDBDBD' }}></div>
                    <div style={{ width: '20px', height: '5px', background: '#BDBDBD' }}></div>
                    <div style={{ width: '20px', height: '5px', background: '#BDBDBD' }}></div>
                </button> :
                    <>
                        <div className={headerStyles.search_area}>
                            <input value={search} onInput={(e: any) => { setSearchValue(e.target.value) }} type="text" className={headerStyles.search_input} />
                            <button className={headerStyles.search_button} onClick={() => navigate(`/search/${search}`)}>Search</button>
                        </div>

                        <nav className={headerStyles.nav}>
                            <ul className={headerStyles.ul}>
                                <DropdownMenu>
                                    <p>{Object.values(notifications.chat).map((value: any) => value.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0) + notifications.tasks.length}
                                        <Notifications /></p>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <li>
                                        <Link to='/createpost' style={{ width: '100%', display: 'block' }}>Add post</Link>
                                    </li>
                                    <li>
                                        <Link to='/request' style={{ width: '100%', display: 'block' }}>Create a request</Link>
                                    </li>
                                </DropdownMenu>
                                <li className={headerStyles.nav_element}>
                                    <Link to='/chat'>
                                        <p>({Object.values(notifications.chat).map((value: any) => value.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}) Chat</p>
                                    </Link>
                                </li>
                                <DropdownMenu>
                                    <li>
                                        <Link to={`/admin`} style={{ width: '100%', display: 'block' }}>Admin</Link>
                                    </li>
                                    <li>
                                        <Link to={`/profile/${user[0].userId}`} style={{ width: '100%', display: 'block' }}>Profile</Link>
                                    </li>
                                    <li>
                                        <Link to={`/analytics`} style={{ width: '100%', display: 'block' }}>Analytics</Link>
                                    </li>
                                    <li><Link to={`/editprofile`} style={{ width: '100%', display: 'block' }}>Settings</Link></li>
                                    <li onClick={() => { userLogout() }}>Log out</li>
                                </DropdownMenu>
                            </ul>
                        </nav>
                    </>
            }
            <MobileHeader />
        </div>
    </header>
}

export default Header