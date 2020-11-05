import React from "react"
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const MyTitle = styled.h1`
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    margin-top: -125px;
    text-align: center;

    strong {
        font-size: 1.25em;
    }
    div {
        color: ${props => props.theme.textColor};

        text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
        font-weight: 100;
        letter-spacing: 7px;

        .main {
            font-size: 50px;
        }

        .sub {
            font-size: 27px;
            letter-spacing: 2px;
        }
    }   
`

const MessageTitle = () => {
    return(
        <MyTitle>
            <div className="titleMessage">
                <div className='heading'>
                    <div className="main text-center mb-3">
                        Hello, I'm
                        <br/>
                        <span>
                            <strong style={{color:'#B14AED'}}>Daenielle May</strong>
                        </span>
                    </div>
                <div className='sub'>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Learner', 'Designer'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                </div>
                </div>
            </div>
        </MyTitle>    
    )
}

export default MessageTitle

