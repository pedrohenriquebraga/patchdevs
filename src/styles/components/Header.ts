import styled, { keyframes } from "styled-components";
import Link from "next/link";

interface ISideNavigator {
    hidden: boolean;
}

const showNavigator = keyframes`
    0% {
       transform: translateX(100%) 
    }
    100% {
       transform: translateX(0%) 
    }
`;

export const Container = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0%;
    background: linear-gradient(90deg, #2273c9, #348ceb, #459fff);
    padding: 2rem;
    z-index: 100;

    a {
        font-size: 3rem;
        font-family: Pacifico, cursive;
        color: #fff;
    }

    svg {
        cursor: pointer;
        color: #fff;
        font-size: 2.5rem;
        transition: 200ms;

        :hover {
            color: #eee;
        }
    }
`;

export const SideNavigator = styled.nav<ISideNavigator>`
    display: ${(props) => (props.hidden ? "none" : "flex")};
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 20;
    background: #eee;
    height: 100%;
    width: 25%;
    min-width: 200px;
    max-width: 800px;

    animation: ${showNavigator} 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const NavButton = styled.a`
    display: block;
    padding: 2rem;
    transition: 200ms;
    a {
        color: black;
        font-size: 1.8rem;
        svg {
            color: #2273c9;
        }
    }

    :hover {
        background: #ddd;
    }
`;
