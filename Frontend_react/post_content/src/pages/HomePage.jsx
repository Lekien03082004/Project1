import React, { useState } from "react";
import BlogContainer from "../ui_components/BlogContainer";
import Header from "../ui_components/Header";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiBlog";
import PagePagination from "../ui_components/PagePagination";

function HomePage() {
  const [page, setPage] = useState(1)
  const numOfBlogPerPage = 3
  const {isLoading , isError, data} = useQuery({
    queryKey : ['blogs', page],
    queryFn:()=> getBlogs(page),
    keepPreviousData: true
  })

  const blogs = data?.results||[];
  const numOfPages = Math.ceil(data?.count/numOfBlogPerPage)
  console.log(data)
  console.log(numOfPages)
  function handleSetPage(value){
    setPage(value)
  }
  function increasePageValue() {
    setPage(curr => (curr < numOfPages ? curr + 1 : curr))
  }
  function decreasePageValue() {
    setPage(curr =>(curr>1 ? curr - 1 : curr))
  }
  return (
    <React.Fragment>
      <Header/>
      <BlogContainer isLoading = {isLoading} blogs= {blogs}/>
      <PagePagination 
        page = {page} 
        numOfPages = {numOfPages} 
        handleSetPage = {handleSetPage}
        decreasePageValue = {decreasePageValue}
        increasePageValue = {increasePageValue}
      />
    </React.Fragment >
  );
}
export default HomePage;

