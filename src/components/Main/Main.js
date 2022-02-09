import React, {Fragment} from "react";
import "./Main.css";

const Main =(props) =>{
    return(
        <Fragment>
        <div className="main">
            <div className="general_info">
                <img className="avatar" src={props.value.avatar}/>
                <ul>
                    <li>{props.value.name}</li>
                    <li>{props.value.login}</li>
                    <li>{props.value.bio}</li>
                </ul>
            </div>
        <div className="projects_info">
            <ul className="project_section">
                <li>Repos</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            <ul className="projects_numbers">
                <li className="repos">{props.value.repos}</li>
                <li>{props.value.followers}</li>
                <li>{props.value.following}</li>
            </ul>
        </div>
        </div>
        </Fragment>
    )
}

export default Main;