import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10);
    return (
        <div>
           {/* {isLoading && <h3>loading...</h3>}
            {error && <h3>error</h3>}
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}*/}
        </div>
    );
};

export default PostContainer2;