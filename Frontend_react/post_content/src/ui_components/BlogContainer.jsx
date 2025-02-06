import clsx from "clsx";
import BlogCard from "./BlogCard";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function BlogContainer() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <section className="blog-container">
      <h2 className={clsx('text-center', 'py-4',{'text-white':isDarkMode})}>
        🍔Latest Posts
      </h2>
      <div className={clsx('mx-auto', 'container', 'row', 'row-cols-1', 'row-cols-md-3', 'g-4',{'bg-black':isDarkMode})}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
export default BlogContainer;