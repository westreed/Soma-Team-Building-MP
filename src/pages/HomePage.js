import '../css/home.css';
import { dbService } from '../firebase';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Write from '../components/Write';
import PostCard from '../components/PostCard';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const postsCollection = dbService.collection('Posts');

  useEffect(() => {
    postsCollection
      .orderBy('createDate', 'desc')
      .get()
      .then((res) => {
        const postArray = res.docs.map((doc) => ({
          ...doc.data()
        }));
        setPosts(postArray);
        setCount(postArray.length);
        setLoading(true);
        console.log(postArray)
      });
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div className='home-content'>
        <p style={{ fontSize: '0.8rem', color: 'var(--point-color2)' }}>
          현재 게시글 {count}개
        </p>
        <h3 style={{ color: 'var(--point-color4)', fontWeight: 'bold' }}>
          팀빌딩 보드
        </h3>
      </div>
      <div className='postcard-wrap'>
        {posts.map((data, idx) => (
          <PostCard key={idx} data={data} />
        ))}
      </div>
      <Write />
    </div>
  );
}

export default HomePage;
