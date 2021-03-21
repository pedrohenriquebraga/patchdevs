import {
    faBars,
    faHome,
    faTimes,
    faUser,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import {
    Container,

    NavButton, SideNavigator
} from "../styles/components/Header";


export function Header() {
    const [hiddenNav, setHiddenNav] = useState(true);

    function handleNavController() {
        if (hiddenNav) {
            return setHiddenNav(false);
        } else {
            return setHiddenNav(true);
        }
    }

    return (
        <>
            <Container>
                <Link href="/">
                    <a>PatchDevs</a>
                </Link>
                <FontAwesomeIcon
                    onClick={handleNavController}
                    icon={hiddenNav ? faBars : faTimes}
                />
            </Container>
            <SideNavigator hidden={hiddenNav}>
                <NavButton>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </a>
                    </Link>
                </NavButton>
                <NavButton>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faUser} /> Minha Conta
                        </a>
                    </Link>
                </NavButton>
                <NavButton>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faUserPlus} /> Criar Conta
                        </a>
                    </Link>
                </NavButton>
                <NavButton>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </a>
                    </Link>
                </NavButton>
                <NavButton>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </a>
                    </Link>
                </NavButton>
            </SideNavigator>
        </>
    );
}
