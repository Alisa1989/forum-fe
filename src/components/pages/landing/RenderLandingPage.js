import React from "react";
import PostCard from "../../common/PostCard";
import { useEffect } from "react";
import { connect } from "react-redux";
import {getPosts} from "../../../state/actions/postcardActions";

const RenderLandingPage = (props) => {

    useEffect(() => {
        props.getPosts();
    }, [getPosts])


    console.log("fetching?", props.isFetching)
    console.log("state posts", props.posts)
    return (
      <>
        {props.posts.map((item) => (
            <PostCard item = {item} key={item.id}/>
        ))}
      </>
    );
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        posts: state.posts
    };
}
const mapDispatchToProps = {
        getPosts
}

export default connect(mapStateToProps, mapDispatchToProps) (RenderLandingPage);