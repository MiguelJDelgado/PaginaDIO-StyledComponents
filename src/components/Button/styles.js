import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 20px;
    position: relative;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }

    color: #FFFFFF;
    padding: 3px 10px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css`
            min-width: 167px;
            height: 33px;
            font-family: Open Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 24.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;


            background: #E4105D;

            &:hover{
                opacity: 0.6;
                cursor: pointer;
            }

            &::after{
                content: '';
                position: absolute;
                border: 1px solid #E4105D;
                top: -5px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border-radius: 22px;
                
            }
        `}
`