import React from 'react'
import styled from 'styled-components'

const StyledGoldSponsor = styled.div`
    max-width: 1100px;
    margin: auto;
    text-align: center;
    * {
        box-sizing: border-box;
    }
    .sponsors {
        a {
            padding: 10px 5px;
            display: inline-block;
        }
    }
    .sponsor-title {
        h3 {
            font-family: 'Righteous', cursive;
            color: rgba(229, 52, 171, 1);
        }
    }
    .become-sponsors {
        margin: 20px 0 70px;
        a {
            border: 2px solid rgba(229, 52, 171, 1);
            padding: 5px 20px 7px;
            border-radius: 20px;
            color: rgba(229, 52, 171, 1);
            transition: 0.3s;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
                color: #fff;
                background-color: rgba(229, 52, 171, 1);
                text-decoration: none;
            }
        }
    }
`

const BackerSponsors = () => {
    return (
        <StyledGoldSponsor>
            <div className="sponsor-title">
                <h3> Gold Sponsor </h3>
                <p> We are accepting gold sponsors </p>
            </div>
            <div className="sponsors">
                <a href="https://electronthemes.com" target="_blank">
                    <img
                        src="https://electronthemes.com/wp-content/uploads/2019/03/electronthemes-sticky.png"
                        alt="electronthemes"
                        title="electronthemes"
                    />
                </a>
            </div>
            <div className="become-sponsors">
                <a href="https://www.patreon.com/join/graphqlplaceholder" target="_blank">
                    Become a sponsor
                </a>
            </div>
        </StyledGoldSponsor>
    )
}

export default BackerSponsors
