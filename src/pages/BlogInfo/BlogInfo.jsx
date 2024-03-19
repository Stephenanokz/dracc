import React, { useEffect, useState } from "react";
import "./BlogInfo.scss";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

const BlogInfo = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return (
    <div className="blogInfo">
      <Banner title="Our Blog" subTitle="Get latest offers, news & events" />
      <div className="blogContainer">
        {isLoading ? (
          <div className="loading__inline">Loading...</div>
        ) : (
          <div className="blogItems">
            {currentPosts.map((post) => (
              <div key={post?._id} className="blogCard">
                <Link to="/">
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
        )}
      </div>
      <Pagination
        totalItems={posts.length}
        itemsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogInfo;
