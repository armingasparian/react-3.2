import "../ProfileInfo/ProfileInfo.css";
import nature from "../../../images/nature.jpg";

function ProfileInfo() {
  return(
    <div>
       <div>
          <img src={nature} alt=""/>
        </div>
        <div className="description-block">
          ava + description
        </div>
    </div>
  )
}

export default ProfileInfo;