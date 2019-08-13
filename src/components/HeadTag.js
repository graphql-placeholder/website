import React from 'react'
import { Helmet } from 'react-helmet'

const HeadTag = () => {
    return (
        <div>
            <Helmet>
                <title>GrapgQL Placeholder | Fake graphql api for testing and prototyping</title>
                <meta property="og:url" content="https://www.graphqlplaceholder.com" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="GrapgQL Placeholder" />
                <meta property="og:description" content="Fake graphql api for testing and prototyping" />
                <meta property="og:image" content="https://www.graphqlplaceholder.com/images/og.png" />
            </Helmet>
        </div>
    )
}

export default HeadTag
