import React from 'react';
import Icons from '../resources/values/Icons';

const Contact = () => {
    return (
        <div id="contact" className="body-content">
            <h1>CONTACT</h1>
            <ul>
                <li>
                    <a href="mailto:nick.on437@gmail.com" className="link">
                        <img src={Icons.email.logo} alt={Icons.email.alt} />
                        nick.on437@gmail.com
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nick-on/" className="link">
                        <img src={Icons.linkedin.logo} alt={Icons.linkedin.alt} />
                        linkedin.com/in/nick-on
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nickon437" className="link">
                        <img src={Icons.github.logo} alt={Icons.github.alt} />
                        github.com/nickon437
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCNOa-ps4w-iNuNGa6Fpll_g" className="link">
                        <img src={Icons.youtube.logo} alt={Icons.youtube.alt} />
                        youtube.com/channel
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;
