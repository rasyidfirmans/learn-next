interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
    const {children} = props;
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            {children}
        </div>
    );
};

export default AuthLayout;