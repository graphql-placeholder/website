import React from 'react'
import { Helmet } from 'react-helmet'

const HeadTag = () => {
    return (
        <div>
            <Helmet>
                <title>GrapgQL Placeholder | Fake graphql api for testing and prototyping</title>
                <meta property="og:url" content="https://graphqlplaceholder.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="GrapgQL Placeholder" />
                <meta property="og:description" content="Fake graphql api for testing and prototyping" />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/graphql-placeholder/website/master/static/images/og.png"
                />
            </Helmet>
        </div>
    )
}

export default HeadTag
