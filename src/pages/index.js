import React from 'react'
import Layout from '../components/Layout'
import TypeDefs from '../components/TypeDefs'
import styled from 'styled-components'

import { Helmet } from 'react-helmet'

const StyledContents = styled.div`
    width: 65%;
    margin: auto;

    @media all and (max-width: 700px) {
        width: 100%;
    }
`

const Index = () => {
    return (
        <Layout>
            <Helmet>
                <title>GrapgQL Placeholder | Fake graphql api for testing and prototyping</title>
            </Helmet>
            <h3 className="text-center">
                <span className="hand">👇</span>

                <br />

                <a href="https://blog-grapgql-server.now.sh/">https://blog-grapgql-server.now.sh/</a>
            </h3>
            <StyledContents>
                <p>TypeDefs:</p>
                <TypeDefs />
            </StyledContents>
        </Layout>
    )
}

export default Index
