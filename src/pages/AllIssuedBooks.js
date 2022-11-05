import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BooktempAdmin from "../components/BooktempAdmin";
import BooktempIssue from "../components/BooktempIssue";
import Booktempuserissued from "../components/Booktempuserissued";

export default function AllIssuedBooks(props) {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function handleAllPost() {
            const res = await fetch("/getAllPost");
            const data = await res.json();
            if (data.error) {
                navigate("/");
            } else {
                setPost(data.Posts);
            }
        }
        handleAllPost();
    }, []);

    return (
        <div className="ml-96">
            {/* {post.map((post) => {
        return <Posttemp post={post} setId={props.setId} />;
      })} */}
            <Booktempuserissued />
            <Booktempuserissued />
        </div>
    );
}
