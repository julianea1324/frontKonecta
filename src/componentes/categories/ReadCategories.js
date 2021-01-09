import React from "react";
import "./../../assets/scss/categorie.scss";
import { AddCategorie } from "./AddCategorie";
import { ReadAllC } from "./ReadAllC";

export const ReadCategories = () => { 


  return (
    <div>  
      <ReadAllC />   
      <AddCategorie />   
    </div>
  );
};
