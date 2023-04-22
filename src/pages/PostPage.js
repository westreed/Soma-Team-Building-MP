import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

function PostPage(){
    const { id } = useParams();
    return (
        <div>
            <Header/>
            PostPage {id}
        </div>
    );
}

export default PostPage;