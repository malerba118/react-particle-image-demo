import React, { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement>{
    open: boolean;
}

const Hamburger: FC<Props> = ({open, className, ...otherProps}) => {
    let classes = "hamburger hamburger--elastic"
    if (open) {
        classes += ' is-active'
    }
    if (className) {
        classes += ` ${className}`
    }
    return (
        <button {...otherProps} className={classes} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger