import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
    /*const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    // @ts-ignore
    useEffect(() => dispatch(fetchUsers()),[]);*/
  return (
    <div className="App">
        {/*{isLoading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {JSON.stringify(users, null, 2)}*/}
        <div style={{display: "flex"}}>
            <PostContainer/>
            <PostContainer2/>
        </div>
    </div>
  );
}

export default App;
