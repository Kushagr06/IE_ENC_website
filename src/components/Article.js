import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

function ArticlePage() {
  // const [articles, setArticles] = React.useState(null);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/articles"
  //       ); // Adjust the URL if your server is running on a different port
  //       let _data = response.data;
  //       setArticles(_data); // Set the fetched data into state
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Runs once on component mount
  const { id } = useParams(); // Get the article ID from the URL
  const article = articles.find((a) => {
    console.log(a.id, id);
    return a.id === parseInt(id);
  }); // Find the article by ID

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
          className="w-full h-96 object-cover rounded-lg shadow-lg"
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