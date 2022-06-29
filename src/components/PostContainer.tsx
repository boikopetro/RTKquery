import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(20);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
      const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            {/*<button onClick={() => refetch()}>refetch</button>*/}
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h3>loading...</h3>}
            {error && <h3>error</h3>}
            {posts && posts.map(post => <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>)}
        </div>
    );
};

export default PostContainer;