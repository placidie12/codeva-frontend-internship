import {motion}from 'framer-motion';
import "./Navbar.css";

function Navbar() {
    return (
        <motion.div
        className="navbar"
        initial={{ y: -100, }}
        animate={{ y: 0, }}
        transition={{ duration: 0.8, }}
        >
            <h2 className="logo">
                MWIZERWA
            </h2>

            <ul className="nav-links">
                <li><a href="#home">Home </a></li>
                <li><a href="#about">About </a></li>
                <li><a href="#skills">Skills </a></li>
                <li><a href="#projects">Projects </a></li>
                 <li><a href="#experience">Experience </a></li>
                <li><a href="#contact">Contact </a></li>
               
            </ul>
        </motion.div>
    );
}

export default Navbar;