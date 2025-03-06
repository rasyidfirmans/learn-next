import LoginForm from "@/components/fragments/LoginForm";
import AuthLayout from "@/components/layouts/Auth/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;