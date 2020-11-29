import React from 'react';

import { Layout } from 'antd';

import './Footer.scss';

const Footer = () => {

    const { Footer } = Layout;

    return (
        <Footer className="footer">
            <p><a href="https://github.com/developaul" target="_blank" rel="noopener noreferrer" >@developaul</a></p>
        </Footer>
    );
};

export default Footer;