import React from 'react';
import Link from './../Link/Link'
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import "bootstrap/dist/css/bootstrap.css";

const Footer = ({className, background}) =>{

    return (
        <footer className={className} style={{backgroundColor: background}}>

        <div className="text-center text-dark p-3">
          <Link url="https://github.com/MzVnTd/animetti" text="Lien vers notre GIT"></Link>

          <Icon
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          iclass="fab fa-facebook-f"
          ></Icon>

        </div>

        <div className="text-center text-dark p-3">
          <Text text="Vincent Merwane Teya"></Text>
        </div>
       
      </footer>
    )
}

export default Footer;