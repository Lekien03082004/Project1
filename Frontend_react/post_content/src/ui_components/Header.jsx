import banner from '../images/tech-girl.jpg';
import styles from '../../public/css/Header.module.css';
import clsx from 'clsx';
import Switch from './Switch';
const Header = () => {
    return (
        <section className="container ">
            <div className="rounded overflow-hidden h-20 mt-4">
            <img className={clsx(styles.img_header)} src={banner} alt="" />
            </div>
        </section>
    )
}

export default Header;  