import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <footer className='social-links' id='social-links'>
      <a href='https://github.com/Kazimor-5' className='social-link'>
        <FaGithub />
      </a>
      <a
        href='www.linkedin.com/in/alexandre-benoît-fontaine'
        className='social-link'
      >
        <FaLinkedin />
      </a>
      <a
        href='./documents/cv-alexandre-benoit-fontaine.pdf'
        download
        className='social-link'
      >
        CV
      </a>
    </footer>
  );
};

export default SocialLinks;
