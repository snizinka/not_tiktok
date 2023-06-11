import React, { useEffect, useRef } from "react"
import headerStyles from '../style/header.module.css'

const DropdownMenu = ({ children, icon }: any) => {
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
            {icon ? <img src={require(`../post_content/assets/${icon}`)} style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: '0',
                left: '0'
            }} /> : ' '}
            <ul ref={refUl} style={{ display: 'none' }} className={headerStyles.submenu}>
                {children}
            </ul>
        </li>
    )
}

export default DropdownMenu;
