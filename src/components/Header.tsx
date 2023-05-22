import headerStyles from '../style/header.module.css'
import React, { useState } from 'react'
import useUserActions from '../hooks/useUserActions';
import { userLogout } from '../store/action-creator/user';
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import DropdownMenu from './DropdownMenu';
import useSearchActions from '../hooks/useSearchActions';
import { setSearchValue } from '../store/action-creator/search';

export default function Header() {
    const { search } = useTypedSelector(state => state.search)
    const { setSearchValue } = useSearchActions()

    const { user } = useTypedSelector(state => state.user)
    const { userLogout } = useUserActions()
    const navigate = useNavigate()

    return <header className={headerStyles.header}>
        <div className={headerStyles.container}>
            <h1 className={headerStyles.logo} onClick={() => navigate(`/`)}>Not TikTok</h1>

            <div className={headerStyles.search_area}>
                <input value={search} onInput={(e:any) => { setSearchValue(e.target.value) }} type="text" className={headerStyles.search_input} />
                <button className={headerStyles.search_button} onClick={() => navigate(`/search/${search}`)}>Search</button>
            </div>

            <nav className={headerStyles.nav}>
                <ul className={headerStyles.ul}>
                    <DropdownMenu>
                        <li>
                            <Link to='/createpost' style={{width: '100%', display: 'block'}}>Add post</Link>
                        </li>
                        <li>
                            <Link to='/request' style={{width: '100%', display: 'block'}}>Create a request</Link>
                        </li>
                    </DropdownMenu>
                    <li className={headerStyles.nav_element}>
                        <Link to='/chat'>
                            <p> Chat</p>
                        </Link>
                    </li>
                    <DropdownMenu>
                        <p>User</p>
                        <li>
                            <Link to={`/profile/${user[0].userId}`} style={{width: '100%', display: 'block'}}>Profile</Link>
                        </li>
                        <li>
                            <Link to={`/analytics`} style={{width: '100%', display: 'block'}}>Analytics</Link>
                        </li>
                        <li><Link to={`/editprofile`} style={{width: '100%', display: 'block'}}>Settings</Link></li>
                        <li onClick={() => { userLogout() }}>Log out</li>
                    </DropdownMenu>
                </ul>
            </nav>
        </div>
    </header>
}