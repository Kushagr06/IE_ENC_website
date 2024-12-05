import "./App.css";
import ArticleCard from "./components/ArticleCard";
import GetinTouch from "./components/GetinTouch";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import Upcoming from "./components/Upcoming";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import Article from "./components/Article"; // Import the new ArticlePage
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-textcol overflow-hidden" id="main">
        <Navbar />

        {/* Define routes */}
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhoWeAre />
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 200 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <WhatWeDo />
                </motion.div>
                <GetinTouch />
                <Upcoming />
                <ArticleCard />
                <Resources />
              </>
            }
          />

          {/* Article page route */}
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
