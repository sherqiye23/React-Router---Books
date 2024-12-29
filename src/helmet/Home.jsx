import React from 'react'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
                <meta name='description' content='home page description' />
            </Helmet>
            HOME Page
        </div>
    )
}

export default Home
