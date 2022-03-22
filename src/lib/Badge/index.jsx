import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import "./badge.css";

function Badge({ badgeContent, className, max, anchorOrigin, ...props }) {
    const [badgeCount, setBadgeCount] = React.useState(badgeContent);

    const badgeClasses = ClassNames({
        "GuiBadge--badge": badgeContent,
        "GuiBadge--primary": props.color === "primary",
        "GuiBadge--secondary": props.color === "secondary",

        "GuiBadge--dot": !badgeContent && props.variant === "dot",

        "GuiBadge--top-left": anchorOrigin === "top-left",
        "GuiBadge--top-right": !anchorOrigin || anchorOrigin === "top-right",
        "GuiBadge--bottom-left": anchorOrigin === "bottom-left",
        "GuiBadge--bottom-right": anchorOrigin === "bottom-right",
    }, className);

    const badgeRoot = ClassNames("GuiBadge--root", {
        "GuiBadge--disabled": props.disabled,
    });

    React.useEffect(() => {
        if (badgeContent > max) {
            setBadgeCount(max + "+");
        } else {
            setBadgeCount(badgeContent);
        }
    }, [badgeContent, max])
    return (
        <span className={badgeRoot}>
            <span className="GuiBadgeIcon">{props.children}</span>
            <span className={badgeClasses}>{badgeCount}</span>
        </span>
    );
}

Badge.propTypes = {
    badgeContent: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([" "])]),
    className: PropTypes.string,
    max: PropTypes.number,
    anchorOrigin: PropTypes.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
    color: PropTypes.oneOf(["primary", "secondary"]),
    variant: PropTypes.oneOf(["dot"]),
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Badge;
