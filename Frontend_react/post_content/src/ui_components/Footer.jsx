import { FaTwitter, FaInstagram , FaFacebook, FaFacebookMessenger , FaTelegram} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import clsx from "clsx";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import styles from '../../public/css/Footer.module.css'
function Footer() {
  const {isDarkMode} = useContext(ThemeContext)

  return (
    <footer className={clsx('footer', isDarkMode ? 'bg-dark' : 'bg-body-secondary', 'mt-5', 'p-5')} >
        <div className="container d-flex justify-content-between">
            <div className="w-25">
                <h2 className={clsx('d-inline',{'text-white':isDarkMode} )}>DevFolio</h2>
                <p className={clsx('text-start', 'mt-2', isDarkMode ? 'text-white' : 'text-body-secondary')}>Lorem ipsum dolor amet, 
                    consectetur adipising elit, 
                    sed do eiusmod tempor incidunt ut labore et
                    dolore magna aliqua.Ut enim ad minim veniam.

                </p>
            </div>
            <ul className={clsx('list-group', 'list-unstyled',{'text-white':isDarkMode})}>
                <li className="fw-bold">Quick Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
            </ul>
            <ul className={clsx('list-group', 'list-unstyled',{'text-white':isDarkMode})}>
                <li className="fw-bold">Category</li>
                <li>Lifestyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Business</li>
                <li>Economy</li>
                <li>Post</li>
            </ul>
            <form className={clsx('form', 'w-25', 'card', 'p-2',{'bg-dark':isDarkMode})}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label d-block mx-auto">
                        <h4 className={clsx('text-center', 'fw-bold',{'text-white':isDarkMode})}>Email address</h4>
                    </label>
                    <div 
                        id="emailHelp" className={clsx('form-text', 'text-center',{'text-white':isDarkMode})}
                    >
                        Get blog articles and offers via email.
                    </div>
                    <input 
                        type="email" className={clsx('form-control',' mt-4')} 
                        style={{
                            backgroundColor: isDarkMode ? 'dark' : '#ffffff', 
                            color: isDarkMode ? '#ffffff' : '#000000', 
                            '::placeholder': {
                              color: isDarkMode ? '#ffffff' : '#000000' 
                            }
                          }}
                        id="exampleInputEmail1" 
                        placeholder="Your email..."  
                        aria-describedby="emailHelp"
                    />
                </div>
                <Button/>
            </form>
        </div>
        <div className="container ">
            <FaInstagram className={clsx({'text-white':isDarkMode})}/>
            <FaTwitter className={clsx("ms-4",{'text-white':isDarkMode})}/>
            <FaFacebook className={clsx("ms-4",{'text-white':isDarkMode})}/>
            <FaFacebookMessenger className={clsx("ms-4",{'text-white':isDarkMode})}/>
            <SiZalo className={clsx("ms-4",{'text-white':isDarkMode})}/>
            <AiFillTikTok className={clsx("ms-4",{'text-white':isDarkMode})}/>
            <FaTelegram className={clsx("ms-4",{'text-white':isDarkMode})}/>
        </div>
    </footer>
  );
}
export default Footer;