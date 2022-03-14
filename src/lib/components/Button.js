import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

// const GuiButton = styled.button`
// background-color: ${props => props.variant && '#fff'};
//  color: ${props => props.color === 'primary' ? '#0070f3' : props.color === 'secondary' ? '#f50057' : '#000'};
//  font-size: 20px;
// `

// function Button({ label, variant, color }) {
//     return (
//         <GuiButton variant={variant} color={color}>{label}</GuiButton>
//     );
// }

const GuiButton = styled.button`
 background-color: ${props => props.bg && props.bg};
 color: ${props => props.color && props.color};
 font-size: 16px;
 border: none;

 margin: 8px;
 padding: 7px 16px 6px 16px;
 min-width: 64px;
 font-weight: 500;
 line-height: 1.25;
 border-radius: 4px;
 letter-spacing: 0.03px;
 text-transform: uppercase;
 box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`

function Button(props) {
    const [color, setColor] = React.useState("")
    const [bg, setBg] = React.useState("")

    React.useEffect(() => {
        if (props.color === 'primary') {
            setColor('#0070f3')
            setBg('')
        } else if (color === 'secondary') {
            setColor('#f50057')
            setBg('')
        }

        if (props.variant === 'contained' && props.color === 'primary') {
            setColor('#fff')
            setBg('#0070f3')
        }
        if (props.variant === 'contained' && props.color === 'secondary') {
            setColor('#fff')
            setBg('#f50057')
        }

        console.log("rendring button")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.color, props.variant])

    return (
        <>
            <GuiButton color={color} bg={bg}>{props.label}</GuiButton>
        </>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string
}

export default Button