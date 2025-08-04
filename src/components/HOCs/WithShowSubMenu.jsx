import React, { useState } from 'react'

function WithShowSubMenu(OriginalComponent) {

    const NewComponent = (props) => {
        console.log('props in HOC: ', props);

        const [showSubMenu, setShowSubMenu] = useState(false)

        const showSubMenuHandler = () => {
            setShowSubMenu(prev => !prev)
        }

        return <OriginalComponent showSubMenu={showSubMenu} showSubMenuHandler={showSubMenuHandler} {...props} />

    };
    return NewComponent
}

export default WithShowSubMenu