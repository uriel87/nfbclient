
import React, { memo } from 'react'
import './loading.css'


export const Loading = () => {
    console.log("render Loading")

    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
}

export default memo(Loading)