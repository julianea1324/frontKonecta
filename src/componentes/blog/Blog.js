import React from "react";
import { Modals } from "../modal/Modals";
import "./../../assets/scss/Blog.scss";
import { ReadBlog } from "./ReadBlog";
export const Blog = () => { 


  return (
    <div>  
      <ReadBlog/>
      <Modals />
    </div>
  );
};
