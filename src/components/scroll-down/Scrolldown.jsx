import React from "react";
import styled from "styled-components";

const MyScroll = styled.h1`
    position: relative;
    z-index: 1;
    bottom: 1.6em;
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: transparent;
    font-weight: bold;
    text-shadow: 1px 1px #45a29e;
    color: #fff;

    .turn {
        cursor: pointer;
        transform: rotate(90deg);
    }

`

const Scrolldown = () => {
    return(
        <MyScroll>
            <div className="turn">
                
            </div>
        </MyScroll>
    )
}

export default Scrolldown