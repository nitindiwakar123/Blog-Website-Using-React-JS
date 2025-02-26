import { Login as LoginCompo, Container } from "../components";
import authImage from "/assets/images/authImg.png";

function Login() {

    return (
        <Container className="bg-custom-white-2 py-10">
            <div className="w-full md:grid md:grid-cols-2 md:justify-items-center md:items-center px-5 md:px-20">
                <div className="hidden md:block w-[80%] h-[80%]">
                    <img className="w-full h-full object-contain" src={authImage} alt="" />
                </div>
                <div className="w-full border-2 border-gray-300 border-opacity-60 shadow-md">
                    <LoginCompo />
                </div>
            </div>
        </Container>
    );
}

export default Login;