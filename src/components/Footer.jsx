import logoFooter from "../assets/logoFooter.png";

const Footer = () => {
   return (
      <footer className="footer">
         <img className="logo-footer" src={logoFooter} alt="Logo de Kasa" />
         <span className="copyrights">© 2020 Kasa. All rights reserved</span>
      </footer>
   );
};

export default Footer;
