import RegisterForm from "@/components/fragments/RegisterForm";
import AuthLayout from "@/components/layouts/Auth/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default RegisterPage;