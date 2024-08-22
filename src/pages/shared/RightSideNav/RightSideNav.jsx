import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/assets/qZone1.png'
import qZone2 from '../../../assets/assets/qZone2.png'
import qZone3 from '../../../assets/assets/qZone3.png'
const RightSideNav = () => {
      return (
            <div className="p-4">
            <h2 className="text-2xl font-semibold">Login With</h2>
                  <button className="btn-outline btn-accent flex items-center gap-3">
            <FaGoogle></FaGoogle>
                  Login With Google
                  </button>
                  <button className="btn-outline btn-secondary flex items-center gap-3">
            <FaGithub></FaGithub>
                  Login With Google
                  </button>
                  <div className="mt-4">
                  <h2 className="text-2xl font-semibold ">Find Us</h2>
                        <a className="flex items-center gap-3 border p-2 text-lg mb-2" href="">
                              <FaFacebook></FaFacebook>
                              Facebook
                              </a>
                        <a className="flex items-center gap-3 border p-2 text-lg mb-2" href="">
                              <FaTwitter></FaTwitter>
                              Twitter
                              </a>
                        <a className="flex items-center gap-3 border p-2 text-lg mb-2" href="">
                              <FaInstagram></FaInstagram>
                              Instagram
                              </a>
                  </div>
                  <div>
                  <h2 className="text-2xl font-semibold space-y-3 mb-6 ">Q Zone</h2>
                  <img src={qZone1} alt="" />
                  <img src={qZone2} alt="" />
                  <img src={qZone3} alt="" />
                  </div>
            </div>
      );
};

export default RightSideNav;