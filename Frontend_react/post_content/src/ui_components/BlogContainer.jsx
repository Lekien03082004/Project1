import clsx from "clsx";
import BlogCard from "./BlogCard";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Spinner from "./Spinner";
function BlogContainer({isLoading, blogs}) {
  const {isDarkMode} = useContext(ThemeContext)
  if(isLoading) {
    return (
      <Spinner />
    )
  }
  return (
    <section className="blog-container">
      <h2 className={clsx('text-center', 'py-4',{'text-white':isDarkMode})}>
        🍔Latest Posts
      </h2>
      <div className={clsx('mx-auto', 'container', 'row', 'row-cols-1', 'row-cols-md-3', 'g-4',{'bg-black':isDarkMode})}>
        {blogs.map(blog=> <BlogCard key={blog.id} blog={blog}/>)}
      </div>
    </section>
  );
}
export default BlogContainer;