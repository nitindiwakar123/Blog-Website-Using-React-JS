import { Signup as SignupCompo, Container } from "../components";
import authImage from "/assets/images/authImg.png";


function Signup() {
    return ( 
        <Container className="bg-custom-white-2 py-10">
            <div className="w-full md:grid md:grid-cols-2 md:justify-items-center md:items-start px-5 md:px-20">
                <div className="hidden md:block w-[80%] h-[80%]">
                    <img className="w-full h-full object-contain" src={authImage} alt="" />
                </div>
                <div className="w-full border-2 border-gray-300 border-opacity-60 shadow-md">
                    <SignupCompo />
                </div>
            </div>
        </Container>
     );
}

export default Signup;