import React from "react";

const Card = ({ api }) => {
  const renderDetail = (text, field) => (
    <p>
      {text}:<span className="font-semibold">{api[field] || "______"}</span>
    </p>
  );

  // creting function inside div
  return (
    // eslint-disable-next-line
    <a href={api.Link} target="_blank">
      <div className="border-2 border-pink-500 p-2 text-gray-600 rounded-md bg-pink-100 hover:bg-pink-300 cursor-pointer h-full">
        {renderDetail("Title", "API")}
        {renderDetail("Description", "Description")}
        {renderDetail("Auth", "Auth")}
        {renderDetail("Cors", "Cors")}
        {renderDetail("Category", "Category")}
      </div>
    </a>
  );
};

export default Card;
