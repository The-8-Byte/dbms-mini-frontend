import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function UpdateUser(props) {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    const [post, setpost] = useState({
        book_title: "",
        author: "",
        status: "",
        description: "",
    });

    const [error, setError] = useState({
        book_title: "",
        author: "",
        status: "",
        description: "",
    });

    useEffect(() => {
        async function handleProfile() {
            const res = await fetch("/admin/updateuser");
            const data = await res.json();
            if (data.error) {
                navigate("/");
            } else {
                const tempPost = { ...post };
                tempPost.author = data.user.email;
                setpost(tempPost);
            }
        }
        handleProfile();
    }, []);


    const handleCompose = async (e) => {
        setIsLoading(true);
        const res = await fetch("/compose", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        });


        const data = await res.json();


        if (data.errors) {
            setIsLoading(false);
            setError(data.errors);
            props.setToastCondition({
                status: "error",
                message:
                    (error.book_title || error.author || error.status) === ""
                        ? "please fill out all fields"
                        : error.book_title || error.author || error.status,
            });
            props.setToastShow(true);
        } else {
            props.setToastCondition({
                status: "success",
                message: `Successfully Posted in ${post.tag} section`,
            });
            props.setToastShow(true);
            setIsLoading(false);
            navigate(-1);
        }
    };
    return (
        <div>
            <form>
                <div className="grid place-items-center h-screen">
                    <div className=" w-1/2 py-4 border  bg-blue-1 shadow-lg shadow-blue-8/80 rounded-lg  text-blue-8">
                        <div className="flex flex-col items-center" >

                            <h3 className="text-lg mr-5">First Name</h3>
                            <input
                                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                type="text"
                                placeholder="Enter First Name"
                                value={post.first_name}
                                onChange={(e) => {
                                    const tempPost = { ...post };
                                    tempPost.first_name = e.target.value;
                                    if (tempPost.first_name.length >= 5) {
                                        error.first_name = "";
                                    }
                                    setpost(tempPost);
                                }}
                            />
                            <br />



                            <h3 className="text-lg mr-5 ml-3">Last Name</h3>
                            <input
                                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                type="text"
                                placeholder="Enter Last Name"
                                value={post.last_name}
                                onChange={(e) => {
                                    const tempPost = { ...post };
                                    tempPost.last_name = e.target.value;
                                    if (tempPost.last_name.length >= 5) {
                                        error.last_name = "";
                                    }
                                    setpost(tempPost);
                                }}
                            />
                            <br />

                            <h3 className="text-lg mr-5 ml-3">Email</h3>
                            <input
                                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                type="text"
                                placeholder="Enter Email"
                                value={post.email}
                                onChange={(e) => {
                                    const tempPost = { ...post };
                                    tempPost.email = e.target.value;
                                    if (tempPost.email.length >= 5) {
                                        error.email = "";
                                    }
                                    setpost(tempPost);
                                }}
                            />
                            <br />
                        </div>


                        <div className="flex items-center justify-center">
                            {isLoading ? (
                                <ReactLoading
                                    type={"cylon"}
                                    color={"#89C2D9"}
                                    height={"7%"}
                                    width={"7%"}
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleCompose}
                                    className="border-2 border-blue-8 hover:bg-white hover:text-blue-2 px-6 py-3 rounded-md text-blue-8"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}