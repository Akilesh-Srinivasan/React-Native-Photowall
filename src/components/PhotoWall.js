import React, { Component } from "react";
import PropTypes from 'prop-types'
import Photo from './Photo';
import {Link} from 'react-router-dom';


function PhotoWall(props) {
    return (
        <div>
            <Link className="addicon" to="/AddPhoto"></Link>
    <div className="photoGrid">
    {props.posts.sort((a,b) => {return b.id - a.id}).map((post, index) => <Photo key ={index} post={post} {...props} index={index}/>)}
</div>
</div>)
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}


export default PhotoWall