import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BooktempIssueUser from "../components/BooktempIssueUser";

export default function AllAvailableBooks(props) {
  const navigate = useNavigate();
  const [Book, setBook] = useState([]);
  useEffect(() => {
    async function handleAllPost() {
      const res = await fetch("/viewAllAvailableBooks");
      const data = await res.json();
      if (data.error) {
        navigate("/");
      } else {
        setBook(data.data);
      }
    }
    handleAllPost();
  }, []);

  return (
    <div className="ml-96">
      {Book.map((book) => {
        return <BooktempIssueUser book={book} />;
      })}
    </div>
  );
}
