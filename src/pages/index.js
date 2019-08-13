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

const StyledApiUrl = styled.div`
    width: 350px;
    margin: auto;
    background: rgba(229, 52, 171, 1);
    padding: 15px;
    font-size: 25px;
    color: #fff;

    margin-top: 35px;
    margin-bottom: 65px;

    a {
        color: #fff;
    }
`

const Index = () => {
    return (
        <Layout>
            <StyledApiUrl>
                <span className="hand">👇 Goto Playground</span>
                <br />
                <a href="https://api.graphqlplaceholder.com">api.graphqlplaceholder.com</a>
            </StyledApiUrl>
            <StyledContents>
                <p>TypeDefs:</p>
                <TypeDefs />
            </StyledContents>
        </Layout>
    )
}

export default Index
