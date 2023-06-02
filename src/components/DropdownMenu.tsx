import React, { useEffect, useState, useRef } from "react"
import headerStyles from '../style/header.module.css'

const DropdownMenu = (props: React.PropsWithChildren<{}>) => {
    const ref = useRef<any>(null);
    const refUl = useRef<any>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                refUl.current.style.display = 'none'
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])

    return (
        <li ref={ref} className={headerStyles.nav_element} onClick={() => { refUl.current.style.display = 'block' }}>
            <ul ref={refUl} style={{ display: 'none' }} className={headerStyles.submenu}>
                {props.children}
            </ul>
        </li>
    )
}

export default DropdownMenu;
