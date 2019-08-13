import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HeadTag from './HeadTag'

const StyledLayout = styled.div`
    max-width: 1170px;
    width: 95%;
    margin: auto;
`

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <HeadTag />
            <Header />
            {children}
        </StyledLayout>
    )
}

export default Layout
