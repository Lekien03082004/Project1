import React from "react";
import BlogContainer from "../ui_components/BlogContainer";
import Header from "../ui_components/Header";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiBlog";

function HomePage() {
  const {isLoading , isError, data:blogs} = useQuery({
    queryKey : ['blogs'],
    queryFn: getBlogs
  })
  console.log(blogs)
  return (
    <React.Fragment>
      <Header/>
      <BlogContainer isLoading = {isLoading} blogs= {blogs?.results||[]}/>
    </React.Fragment>
  );
}
export default HomePage;

