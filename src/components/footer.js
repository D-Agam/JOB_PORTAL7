import React from 'react';

function Footer(props) {
    const footerStyle = {
        position: "relative",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        // padding: "26px 0",
    };

    return (
        <div style={footerStyle}>
            <hr />
            <span>Copyright 2023&copy;</span>
            <br />
            <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;|&nbsp;
            <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;|&nbsp;
            <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;|&nbsp;
            <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;
        </div>
    );
}

export default Footer;
