import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray text-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* 소셜 미디어 아이콘 */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-300 hover:text-white text-2xl transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-300 hover:text-white text-2xl transition-colors" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-300 hover:text-white text-2xl transition-colors" />
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
