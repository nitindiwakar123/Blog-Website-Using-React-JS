import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostForm, Container } from "../components";

function EditPost() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const posts = useSelector((state) => state.post.posts);
    
    useEffect(() => {
        const selectedPost = posts.find((currPost) => currPost.$id === slug);
        
        if (selectedPost) {
            setPost(selectedPost);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [posts, slug]);
    
    if(!loading) {
        return (
            <Container className="w-full px-5 md:px-10 lg:px-20 py-2 bg-gray-200">
                <PostForm post={post} />
            </Container>
        );
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }
}

export default EditPost;