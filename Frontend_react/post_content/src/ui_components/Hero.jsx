import { FaTwitter, FaInstagram , FaFacebook, FaFacebookMessenger , FaTelegram} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import pic from "../images/Nobita-Nobi-Nobita.jpg";
import clsx from "clsx";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
const Hero = () => {
  const {isDarkMode} = useContext(ThemeContext)
    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-5">
            <div className="d-flex justify-content-center align-items-center gap-4">
                <div className="">
                    <img
                    src={pic}
                    className=" object-fit-cover rounded-circle" style={{width: '100px', height: '100px'}}
                    />
                </div>

                <span>
                    <p className={clsx('fw-bolder', 'fs-5',{'text-white':isDarkMode})}>Đình Kiên</p>
                    <p className="text-secondary">
                    Collaborator & Editor
                    </p>
                </span> 
            </div>

            <p className={clsx('text-center', 'w-50', 'lh-lg',{'text-white-50':isDarkMode})}>
            I am a Fullstack Developer focused on building decentralized
            applications (DApps) that leverage blockchain technology to empower
            users and promote data transparency. With a background in smart contract
            development on Ethereum and experience in Solidity and Rust, I create
            secure, efficient, and user-centered DApps. I'm proficient in frontend
            tools like React and libraries such as web3.js and ethers.js to
            integrate blockchain functionalities smoothly.
            </p>

            <div className="d-flex gap-4">
                <div className="rounded bg-body-secondary p-2">
                    <FaInstagram />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <FaTwitter />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <FaFacebook />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <FaTelegram />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <FaFacebookMessenger />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <SiZalo />
                </div>
                <div className="rounded bg-body-secondary p-2">
                    <AiFillTikTok />
                </div>
            </div>
        </div>
    )
}
export default Hero;