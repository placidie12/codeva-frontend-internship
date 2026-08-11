import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} MWIZERWA PLACIDIE. All rights reserved.
      </p>

      <p>
        Built with React & Framer Motion.
      </p>
    </footer>
  );
}

export default Footer;