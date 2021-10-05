import profile from "../../../images/profile.png";
import "../Posts/Post.css";

function Post(props) {
  return(
      <div className="item">
        <img src={profile} alt=""/>
        {props.message}
        <div>
          <span>Like</span> {props.likecount}
        </div>
    </div>
  )
}

export default Post;