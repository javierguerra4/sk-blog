import React from "react";

const BookCard = ({ title, author, description, thumbnailUrl }) => {
  return (
    <div className="book-card">
      <img src={thumbnailUrl} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
