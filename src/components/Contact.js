import React from 'react';
import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin, mdiGithub, mdiYoutube } from '@mdi/js';

const Contact = () => {
  return (
    <div id='contact' className='body-content'>
      <h1>CONTACT</h1>
      <ul>
        <li>
          <a href='mailto:nick.on437@gmail.com' className='link'>
            <Icon path={ mdiEmail } title='Email' />
            nick.on437@gmail.com
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/nick-on/' className='link'>
            <Icon path={ mdiLinkedin } title='Linkedin' />
            linkedin.com/in/nick-on
          </a>
        </li>
        <li>
          <a href='https://github.com/nickon437' className='link'>
            <Icon path={ mdiGithub } title='GitHub' />
            github.com/nickon437
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCNOa-ps4w-iNuNGa6Fpll_g'
            className='link'
          >
            <Icon path={ mdiYoutube } title='YouTube' />
            youtube.com/channel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
