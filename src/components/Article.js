import React from "react";
import { useParams } from "react-router-dom";

// Sample articles data
let articles = [
  {
    id: 1,
    title: "Article 1",
    img: "https://picsum.photos/seed/picsum/600/400",
    author: "Author 1",
    date: "2024-12-01",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra nisi id libero porttitor, nec pharetra lectus fermentum. Sed at enim eget nunc fermentum consectetur id nec massa. Praesent malesuada orci ut lectus gravida, ut mollis ligula aliquet. Integer vel lacus libero.",
  },
  {
    id: 2,
    title: "Article 2",
    img: "https://picsum.photos/seed/picsum/600/400",
    author: "Author 2",
    date: "2024-12-02",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean facilisis vestibulum dolor at vulputate. Sed cursus magna in dolor dictum, sit amet blandit lorem vehicula.",
  },
  // Add more articles as needed
];

function ArticlePage() {
  const { id } = useParams(); // Get the article ID from the URL
  const article = articles.find((a) => a.id === parseInt(id)); // Find the article by ID

  if (!article) {
    return (
      <div className="text-center p-10 bg-background h-full">
        <h1 className="text-2xl font-bold text-red-600">Article Not Found</h1>
        <p className="text-gray-600 mt-4">
          Sorry, the article you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-16 px-6 bg-background">
      {/* Article Image */}
      <div className="w-full mb-8">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Article Title */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      {/* Author and Date */}
      <div className="text-highlight mb-6">
        <p>
          By <span className="font-semibold">{article.author}</span>
        </p>
        <p>Published on {article.date}</p>
      </div>
      {/* Article Content */}
      <div className="text-lg text-gray-300 leading-relaxed">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default ArticlePage;
