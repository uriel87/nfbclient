
import React, { memo } from 'react'
import './pageNoFound.css'

export const PageNoFound = () => {
    return (
        <div className="title-page-not-found">
			<h1>404</h1>
			<h2>Page no found</h2>
            <h3>sorry, the page you are looking for could not be found</h3>
		</div>
    )
}

export default memo(PageNoFound)