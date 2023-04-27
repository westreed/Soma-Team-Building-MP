import "../css/home.css";
import { dbService } from "../firebase";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const postsCollection = dbService.collection("Posts");

  useEffect(() => {
    postsCollection
      .orderBy("createDate", "desc")
      .get()
      .then((res) => {
        const postArray = res.docs.map((doc) => ({
          "id":doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
        setCount(postArray.length);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="home-content">
        <p style={{ fontSize: "0.8rem", color: "var(--point-color2)" }}>
          현재 게시글 {count}개
        </p>
        <h3 style={{ color: "var(--point-color4)", fontWeight: "bold" }}>
          팀빌딩 보드
        </h3>
      </div>
      <div className="postcard__wrapper">
        {posts.map((data, idx) => (
          <PostCard key={idx} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
