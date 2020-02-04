import React, { FC } from 'react'
import styles from './Sidebar.module.css'

interface Props {
    open: boolean
}

const Sidebar: FC<Props> = ({open, children}) => {
    let sidebarClasses = styles.sidebar
    if (open) {
        sidebarClasses = sidebarClasses + ' ' + styles.open
    }
    return (
        <div className={sidebarClasses}>
            {children}
        </div>
    )
}

export default Sidebar