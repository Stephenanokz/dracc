import React, { useEffect, useState } from "react";
import "./Post.scss";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`posts/find/${params.blogId}`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  const date = post?.updatedAt?.slice(0, 10);

  return (
    <div className="post">
      <Banner title="Our Blog" />
      {isLoading ? (
        <div className="loading__inline">Loading...</div>
      ) : (
        <div className="postContainer">
          {post?.imgs?.length > 1 ? (
            <Slider images={post?.imgs} />
          ) : (
            post?.imgs && <img src={post.imgs[0]} alt="" />
          )}
          <div className="heading">
            <h2>{post?.title}</h2>
            <div>
              <span>Posted on {date}</span>
              <span>By {post?.author}</span>
            </div>
          </div>
          <div className="body">{post?.body}</div>
        </div>
      )}
    </div>
  );
};

export default Post;
