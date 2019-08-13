import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    text-align: center;
    padding: 40px 0;
    img {
        width: 195px;
        margin-bottom: 25px;
    }
    .name {
        text-transform: uppercase;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <img src="images/logo.png" alt="logo" />
            <h2 className="name">Graphql Placeholder</h2>
            <p>Fake graphql api for testing and prototyping</p>
        </StyledHeader>
    )
}

export default Header
