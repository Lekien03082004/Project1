import Badge from "./Badge";
import CardFooter from "./CardFooter";
import thumbnail from "../images/design_vii.jpg.jpg";
import styles from "../../public/css/BlogCard.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function BlogCard() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className={clsx('col')}>
      <div className={clsx('card', 'h-100',{'bg-dark':isDarkMode})}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <Badge />
        <div className="card-body">
          <Link to='/detail' className="text-dark link-underline link-underline-opacity-0">
            <h5 className={clsx('card-title',{'text-white':isDarkMode})}>Build a content Management Sysytem with TypeScript and React</h5>
          </Link>
        </div>
        <CardFooter />  
      </div>
    </div>
  );
}

export default BlogCard;