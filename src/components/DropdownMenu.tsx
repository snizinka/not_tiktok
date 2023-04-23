import React, { useState } from "react"
import headerStyles from '../style/header.module.css'

const DropdownMenu = (props: React.PropsWithChildren<{}>) => {
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false)

    return (
        <li className={headerStyles.nav_element} onClick={() => { setShowUserMenu(!showUserMenu) }}>
            <ul style={{ display: showUserMenu === false ? 'none' : 'block' }} className={headerStyles.submenu}>
                {props.children}
            </ul>
        </li>
    )
};

export default DropdownMenu;
