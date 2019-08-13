import React from 'react'
import Layout from '../components/Layout'
import TypeDefs from '../components/TypeDefs'
import styled from 'styled-components'

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
            <h3 className="text-center">
                <span className="hand">👇</span>

                <br />

                <a href="https://blog-grapgql-server.now.sh/">https://blog-grapgql-server.now.sh/</a>
            </h3>
            <StyledContents>
                <TypeDefs />
            </StyledContents>
        </Layout>
    )
}

export default Index
