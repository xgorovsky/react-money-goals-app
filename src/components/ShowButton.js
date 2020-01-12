import React, { useState } from 'react'

function ShowButton(props) {
    const [toggle, setToggle] = useState(0);
    const { action, dialog, symbols } = props;

    const handleTwoClick = (e) => {
        if (toggle === 0) {
            setToggle(toggle + 1);
        } else {
            setToggle(toggle - 1);
        }
        action(e);
    }

    return (
        <button
            className="btn-show btn btn-secondary "
            id="btn-show"
            onClick={handleTwoClick}
        >
            {symbols[toggle]} {dialog[toggle]}
        </button >
    )
}

export default ShowButton

