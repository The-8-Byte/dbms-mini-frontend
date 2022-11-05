import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function Update(props) {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [post, setpost] = useState({
        author: "",
        title: "",
        tag: "",
        description: "",
    });

    const [error, setError] = useState({
        author: "",
        title: "",
        tag: "",
        description: "",
    });
    //sj change

    // const [post, setpost] = useState({
    //   book_title: "",
    //   author: "",
    //   status: "",
    //   description: "",
    // });

    // const [error, setError] = useState({
    //   book_title: "",
    //   author: "",
    //   status: "",
    //   description: "",
    // });

    useEffect(() => {
        async function handleProfile() {
            const res = await fetch("/getUser");
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


    // compose route means update route for lms
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
                    (error.title || error.description || error.tag) === ""
                        ? "please fill out all fields"
                        : error.title || error.description || error.tag,
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

        //sj change

        // if (data.errors) {
        //   setIsLoading(false);
        //   setError(data.errors);
        //   props.setToastCondition({
        //     status: "error",
        //     message:
        //       (error.book_title || error.author || error.status) === ""
        //         ? "please fill out all fields"
        //         : error.book_title || error.author || error.status,
        //   });
        //   props.setToastShow(true);
        // } else {
        //   props.setToastCondition({
        //     status: "success",
        //     message: `Successfully Posted in ${post.tag} section`,
        //   });
        //   props.setToastShow(true);
        //   setIsLoading(false);
        //   navigate(-1);
        // }
    };
    return (
        <div>
            <form>
                <div className="grid place-items-center h-screen">
                    <div className=" w-3/4 p-8 border  bg-blue-1 shadow-lg shadow-blue-8/80 rounded-lg  text-blue-8">
                        <div className="flex justify-center items-center mb-6" >

                            <h3 className="text-lg mr-5">Book_Name</h3>
                            <input
                                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                type="text"
                                placeholder="Enter Book Name"
                                value={post.book_name}
                                onChange={(e) => {
                                    const tempPost = { ...post };
                                    tempPost.book_name = e.target.value;
                                    if (tempPost.book_name.length >= 5) {
                                        error.book_name = "";
                                    }
                                    setpost(tempPost);
                                }}
                            />
                            <br />



                            <h3 className="text-lg mr-5 ml-3">Author</h3>
                            <input
                                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                type="text"
                                placeholder="Enter Author"
                                value={post.author}
                                onChange={(e) => {
                                    const tempPost = { ...post };
                                    tempPost.author = e.target.value;
                                    if (tempPost.author.length >= 5) {
                                        error.author = "";
                                    }
                                    setpost(tempPost);
                                }}
                            />
                            <br />
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