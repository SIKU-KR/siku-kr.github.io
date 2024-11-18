import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Blog.css'; // Custom CSS for additional styling

function BlogItem({ title, link, imgSrc, description }) {
  // Limit description to 100 characters
  const truncatedDescription = description.length > 100
    ? description.substring(0, 100) + "..."
    : description;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none w-100">
      <div className="d-flex align-items-center card h-100 shadow-sm border-0 rounded-3 archive-card blog-item flex-md-row flex-column">
        {/* Left Section: Image with fixed dimensions */}
        <div className="blog-item-image-container">
          <img 
            src={imgSrc} 
            alt={title} 
            className="blog-item-image"
          />
        </div>
        
        {/* Right Section: Title and Description */}
        <div className="card-body d-flex flex-column justify-content-center text-center text-md-start" style={{ padding: "20px", color: "white" }}>
          <h5 className="card-title"><strong>{title}</strong></h5>
          <p className="card-text">{truncatedDescription}</p>
        </div>
      </div>
    </a>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://2lqkrjiwc3.execute-api.ap-northeast-2.amazonaws.com/tistory")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-arch py-5" id="blog">
      <div className="container col-xxl-6 px-4">
        <h3 className="text-center text-white">Current Posts</h3>
        <p className="text-center text-white">최신 포스트를 확인해보세요!</p>
        <Carousel indicators={false} interval={3000} controls={false} pause={false}>
          {posts.map((post) => (
            <Carousel.Item key={post.number}>
              <BlogItem
                title={post.title}
                link={post.url}
                imgSrc={post.thumbnail}
                description={post.description || "No description available"}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Blog;