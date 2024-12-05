import React from "react";
import axios from "axios";
import Heading from "./Heading";
import { motion } from "framer-motion";

let articles = [
  {
    id: 1,
    title: "Article 1",
    img: "https://picsum.photos/seed/picsum/200/300",
    author: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "Article 2",
    img: "https://picsum.photos/seed/picsum/200/300",
    author: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Article 3",
    img: "https://picsum.photos/seed/picsum/200/300",
    author: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    title: "Article 4",
    img: "https://picsum.photos/seed/picsum/200/300",
    author: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 5,
    title: "Article 5",
    img: "https://picsum.photos/seed/picsum/200/300",
    author: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

function ArticleCard() {
  //   const baseURL = "https://your-api-endpoint.com/articles"; // Replace with your actual endpoint
  //   const [articles, setArticles] = React.useState([]);

  //   React.useEffect(() => {
  //     axios
  //       .get(baseURL)
  //       .then((response) => setArticles(response.data))
  //       .catch((error) => console.log(error.message));
  //   }, []);

  return (
    <div className="mb-16" id="Articles">
      <div className="mx-5 mb-16">
        <Heading text="Articles" subtext="Latest Articles!" />
      </div>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center md:flex-row flex-col flex-wrap items-center align-middle m-2">
          {articles.length === 0 ? (
            <div className="flex justify-center flex-col text-center">
              <img
                src="/noArticles.svg"
                alt="No Articles Available"
                className="w-1/2 mx-auto"
              />
              <p className="text-lg font-semibold text-gray-700 mt-4">
                No Articles Available. Check Back Later!
              </p>
            </div>
          ) : (
            articles.map((article) => (
              <div
                key={article.id}
                className="container w-80 bg-secondary border-4 border-primary shadow-lg rounded-lg m-4 p-6 flex flex-col"
              >
                {/* Article Image */}
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Article Title */}
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                {/* Article Author */}
                <p className="text-sm text-highlight mb-4">
                  By <span className="font-semibold">{article.author}</span>
                </p>
                {/* Article Content */}
                <p className="text-gray-800 mb-6">
                  {article.content.length > 150
                    ? `${article.content.substring(0, 150)}...`
                    : article.content}
                </p>
                {/* Read More Button */}
                <a
                  href={`/articles/${article.id}`}
                  className="text-highlight font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ArticleCard;
