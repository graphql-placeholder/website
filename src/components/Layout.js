import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const StyledLayout = styled.div`
    max-width: 1170px;
    width: 95%;
    margin: auto;
`

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            {children}
        </StyledLayout>
    )
}

export default Layout
