import "../css/home.css";
import { dbService } from '../firebase';
import moment from "moment/moment";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Write from "../components/Write";

function HomePage(){
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const postsCollection = dbService.collection('Posts');

    useEffect(() => {
        postsCollection.orderBy("createDate", "desc").get().then((res) => {
            const postArray = res.docs.map(doc => ({
                ...doc.data()
            }));
            setPosts(postArray);
            setCount(postArray.length);
            setLoading(true);
        })
    }, [postsCollection]);

    return (
        <div style={{height:"100%"}}>
            <Header/>
            <div className='home-content'>
                <p style={{fontSize: "0.8rem", color:"var(--point-color2)"}}>현재 게시글 {count}개</p>
                <h2 style={{color:"var(--point-color4)"}}>팀빌딩 보드</h2>
            </div>
            <div className='home-posts row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 justify-content-center'>
                {posts.map((data, idx) => {
                    return (
                        <div key={idx} className='home-post col m-2' style={{display:"flex", flexDirection:"column"}}>
                            <h4>{data.title}</h4>
                            <p>{data.content}</p>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap: "wrap", marginTop:"auto", alignContent:"end"}}>
                                <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
                                    <p style={{color:"var(--point-color2)", fontWeight:"bold"}}>{data.teamname}</p>
                                    <p style={{marginLeft:"5px"}}>{data.username}</p>
                                </div>
                                <p style={{color:"var(--point-color5)"}}>{moment(data.createDate.seconds * 1000).format('YYYY.MM.DD. HH:mm')}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Write/>
        </div>
    );
}

export default HomePage;