import React, {Fragment} from "react";
import "./Input.css";
import { useState } from "react";
import Main from "../Main/Main";

const Input =() =>{
    const [user, setUser]=useState();
    const [userinfo, setUserInfo]= useState({});
    const [hideinfo, setHideInfo]= useState(false)

    const ValidInput=(event) =>{
        setUser(event.target.value)
    }
   
    const fetchUser=() =>{
      if(user.trim().length === 0){
          return;
      }
    fetch(
        ` https://api.github.com/users/${user}`
        )
      .then(response => response.json())
      .then((data) => 
      setUserInfo({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers:data.followers,
        following:data.following,
      })
    );
    setHideInfo(true)
    }
    return(
        <Fragment>
        <div className="search_area">
        <i className="fas fa-search"></i>
        <input 
        type="text"
        placeholder="Search Github user..."
        value={user}
        onChange={ValidInput}
        />
        <button onClick={fetchUser} type="submit" className="btn btn-outline-light">Search</button>
        </div>
        {hideinfo &&<Main 
        value={userinfo}
        />}
        </Fragment>
    )
}

export default Input;