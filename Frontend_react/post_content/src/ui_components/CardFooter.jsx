import clsx from "clsx";
import pic from "../images/Nobita-Nobi-Nobita.jpg";
import styles from "../../public/css/CardFooter.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { BASE_URL } from "../api";
import { FormatDate } from "../services/formatDate";
function CardFooter({blog}) {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className="d-flex justify-content-around align-items-center gap-4">
      <span className="d-flex align-items-center gap-2 overflow-hidden">
        <div >
            <img src={`${BASE_URL}${blog?.author.profile_picture}`} alt="" className={clsx('object-fit-cover','border', 'border-secondary-subtle', styles.container_imgCartFooter )}  />
        </div>
        <small className={clsx('fw-semibold', 'text-secondary',{'text-white-50':isDarkMode})}>{`${blog?.author.first_name} ${blog?.author.last_name}`}</small>
      </span>
      <small className={clsx('fw-semibold', 'text-secondary',{'text-white-50':isDarkMode})}>
        {FormatDate(blog?.published_date)}
      </small>
    </div>
  );
}
export default CardFooter;