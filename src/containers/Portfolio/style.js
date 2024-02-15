import styled from "styled-components"

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 32px;

    li {
        list-style: none;
        width: 100%;


        img {
            width: 100%;
            border-radius: 16px;
            margin-bottom: 8px;
        }

        h3 {
            text-align: center;
        }
    }
`