import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="container flex items-center py-4">
        {/* Logo and Title Container */}
        <div className="flex items-center flex-grow">
          <img src="/service5.png" alt="Logo" className="h-12 mr-4" />
          <div className="text-2xl font-bold text-white"><b>M</b>umair</div>
        </div>

        {/* Navigation and CV Button */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-gray-400">
              About
            </Link>
            <Link href="#services" className="text-white hover:text-gray-400">
              Services
            </Link>
            <Link href="#projects" className="text-white hover:text-gray-400">
              Projects
            </Link>
            <Link href="#testimonials" className="text-white hover:text-gray-400">
              Testimonials
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </nav>
          <a
            href="/path/to/your/cv.pdf"
            download
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
