import React from "react";
import BlogContainer from "../ui_components/BlogContainer";
import Header from "../ui_components/Header";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiBlog";

function HomePage() {
  const data = useQuery({
    queryKey : ['blogs'],
    queryFn: getBlogs
  })
  console.log(data)
  return (
    <React.Fragment>
      <Header/>
      <BlogContainer/>
    </React.Fragment>
  );
}
export default HomePage;