import React from 'react'
import { Link } from 'react-router-dom';

const ErrorScreen = () => {
    return (
        <div className='erorr'>
        <div class="fof">
        		<h1>Error 404</h1>
                <h2>page not found</h2>
                <Link to='/'>
                <button
                  type="button"
                  className="primary "

                >
                  Back to shop
                </button>
                </Link>
    	</div>
        </div>
    )
}

export default ErrorScreen
