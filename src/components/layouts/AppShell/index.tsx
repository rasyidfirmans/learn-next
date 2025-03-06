import { useRouter } from "next/router";
import NavBar from "../NavBar";
import { ReactNode } from 'react';

interface AppShellProps {
    children: ReactNode;
}

const disabledNavBar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const {pathname} = useRouter();

    return (
        <div>
            {!disabledNavBar.includes(pathname) && <NavBar />}
            {children}
        </div>
    );
}

export default AppShell;