import { Container, PostForm } from "../components";

function CreatePost() {
    return (
        <Container className="px-5 md:px-10 lg:px-20 py-2 bg-gray-200">
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="w-full text-md font-poppins font-semibold text-gray-500">
                    <h1>Create a New Post</h1>
                </div>
                <div className="w-full">
                    <PostForm />
                </div>
            </div>
        </Container>
    );
}

export default CreatePost;