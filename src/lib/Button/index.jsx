import React from 'react'
import ClassNames from 'classnames'
import "./button.css"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconLable = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
function GuiButton({className, startIcon, endIcon, ...props}) {
    const buttonClasses = ClassNames('Gui__Button', {
        'Gui__Button--primary': !props.variant && props.color === 'primary',
        'Gui__Button--secondary': !props.variant && props.color === 'secondary',
        'Gui__Button--disabled': !props.variant && props.disabled,

        'Gui__Button--contained': !props.color && props.variant === 'contained',
        'Gui__Button--contained-disabled': props.variant === 'contained' && props.disabled,
        'Gui__Button--outlined': !props.color && props.variant === 'outlined',
        'Gui__Button--outlined-disabled': props.variant === 'outlined' && props.disabled,

        'Gui__Button--full-width': props.fullWidth,

        'Gui__Button--small': props.size === 'small',
        'Gui__Button--medium': props.size === 'medium',
        'Gui__Button--large': props.size === 'large',

        'Gui__Button--contained-primary': props.variant === 'contained' && props.color === 'primary',
        'Gui__Button--contained-secondary': props.variant === 'contained' && props.color === 'secondary',
        'Gui__Button--outlined-primary': props.variant === 'outlined' && props.color === 'primary',
        'Gui__Button--outlined-secondary': props.variant === 'outlined' && props.color === 'secondary',
    }, className)
    return (
        <>
            {startIcon || endIcon ?
                (props.href ?
                    <a className={buttonClasses} href={props.href} {...props}>
                        {startIcon ?
                            <IconLable><i className={startIcon}></i> {props.children} </IconLable>
                            :
                            <IconLable>{props.children} <i className={endIcon}></i> </IconLable>
                        }
                    </a>
                    :
                    <button className={buttonClasses} {...props}>
                        {startIcon ?
                            <IconLable><i className={startIcon}></i> {props.children} </IconLable>
                            :
                            <IconLable>{props.children} <i className={endIcon}></i> </IconLable>
                        }
                    </button>
                )
                :
                (props.href ?
                    <a className={buttonClasses} href={props.href} {...props}>
                        {props.children}
                    </a>
                    :
                    <button className={buttonClasses} {...props}>
                        {props.children}
                    </button>
                )
            }
        </>
    )
}

GuiButton.propTypes = {
    variant: PropTypes.oneOf(['contained', 'outlined']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    href: PropTypes.string,
}

export default GuiButton
