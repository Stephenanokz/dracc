import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import CTAButton from "../../components/CTAButton/CTAButton";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("posts", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.slice(0, 3);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return isLoading ? (
    <div className="loading__inline">Loading...</div>
  ) : (
    <div className="blog">
      <div className="blogTitle">
        <span className="titleBackground">Events</span>
        <span className="title">Our Blog</span>
      </div>
      <div className="blogContainer">
        <div className="blogItems">
          {filteredPosts.map((post) => (
            <div
              key={post?._id}
              className="blogCard"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Link to={`/blog/${post?._id}`}>
                <div className="blogImg">
                  <img src={post?.imgs[0]} alt={post?.title} />
                </div>
              </Link>
              <div className="blogDetails">
                <span className="author">
                  by <span>{post?.author}</span>
                </span>
                <Link to={`/blog/${post?._id}`}>
                  <p className="title">{post?.title}</p>
                </Link>
                <span className="date">{truncateString(post?.body)}</span>
                <span className="date">{post?.updatedAt.slice(0, 10)}</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/blog">
          <CTAButton>View more</CTAButton>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
