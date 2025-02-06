import clsx from "clsx";
import pic from "../images/Nobita-Nobi-Nobita.jpg";
import styles from "../../public/css/CardFooter.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function CardFooter() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className="d-flex justify-content-around align-items-center gap-4">
      <span className="d-flex align-items-center gap-2 overflow-hidden">
        <div >
            <img className={clsx('object-fit-cover','border', 'border-secondary-subtle', styles.container_imgCartFooter )} src={pic} alt="" />
        </div>
        <small className={clsx('fw-semibold', 'text-secondary',{'text-white-50':isDarkMode})}>Đình Kiên</small>
      </span>
      <small className={clsx('fw-semibold', 'text-secondary',{'text-white-50':isDarkMode})}>
        12 November, 2024
      </small>
    </div>
  );
}
export default CardFooter;