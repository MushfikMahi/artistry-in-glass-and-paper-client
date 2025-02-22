import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-cols-3 md:grid-flow-col gap-4">
    <Link to={'/allcrafts'} className="link link-hover">All Art & Crafts</Link>
    <Link to={'/addcraft'} className="link link-hover">Add Craft Item</Link>
    <Link to={'/mycrafts'} className="link link-hover">My Art & Craft List</Link>
    <Link to={'login'} className="link link-hover">Login</Link>
    <Link to={'register'} className="link link-hover">Register</Link>
    <Link to={'profile'} className="link link-hover">Profile</Link>
  </nav> 
  <nav className="flex flex-col md:flex-row gap-10">
    <div className="space-y-2">
      <h3 className="text-xl text-left font-bold">Contact Us</h3>
      <p className="flex items-center gap-2"><MdAddIcCall /> +8801408000789</p>
      <p className="flex items-center gap-2"><IoMdMail /> mushfikussalehin@gmail.com</p>
    </div>
    <div>
    <h3 className="text-xl my-3">Social links</h3>
    <div className="grid grid-flow-col gap-4">
      <a target="_blank" href="https://twitter.com/mushfik_mahi"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a target="_blank" href="https://www.instagram.com/mushfik_mahi_/" ><FaInstagram className="h-7 w-7" /></a>
      <a target="_blank" href="https://www.facebook.com/mushfik.mahi.52/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Artistry in Glass  & Paper</p>
  </aside>
</footer>
    );
};

export default Footer;