import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(5);
    return (
        <div>
            {/*<button onClick={() => refetch()}>refetch</button>*/}
            {isLoading && <h3>loading...</h3>}
            {error && <h3>error</h3>}
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    );
};

export default PostContainer;