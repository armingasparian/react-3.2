import React from "react";
import "../MyPosts/MyPosts.css";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";

function MyPosts(props) {

  let postElemets = props.posts.map(p => <Post message={p.message} likecount={p.likecount}/>)

  let newPostElement = React.createRef();


  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return(
    <div className="posts-block">
      <h3>My Posts</h3>
      <div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} 
                      value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>    
      </div>
      <div className="post">
        { postElemets }
      </div>
    </div>
  )
}

export default MyPosts;