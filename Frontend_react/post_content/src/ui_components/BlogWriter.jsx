import clsx from "clsx";
import pic from "../images/Nobita-Nobi-Nobita.jpg";
import styles from "../../public/css/BlogWriter.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const BlogWriter = () => {
  const {isDarkMode} = useContext(ThemeContext)

    return (
        <div className={clsx('d-flex','justify-content-start', 'my-3')}>
            <span className={clsx('d-flex','justify-content-center', 'aline-items-center')}>
                <div>
                    <img  src={pic} className={clsx('object-fit-cover','rounded-circle', styles.container_img)} alt="" />
                </div>
                <small className={clsx('my-auto', 'ms-2','text-secondary',{'text-white-50':isDarkMode})}> 
                    Đình Kiên
                </small>
            </span>
            <small className={clsx('ms-2', 'my-auto', 'text-secondary',{'text-white-50':isDarkMode})}>
                12 November, 2024
            </small>
        </div>
    )
}
export default BlogWriter;