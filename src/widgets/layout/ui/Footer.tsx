import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray py-6">
      <div className="container mx-auto text-center">
        {/* 소셜 미디어 아이콘 */}
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-300 text-2xl transition-colors hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-300 text-2xl transition-colors hover:text-white" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-300 text-2xl transition-colors hover:text-white" />
          </a>
        </div>

        {/* 저작권 정보 */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BaeChan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
