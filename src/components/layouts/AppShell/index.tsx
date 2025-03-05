import NavBar from "../NavBar";
import { ReactNode } from 'react';

interface AppShellProps {
    children: ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;

    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}

export default AppShell;