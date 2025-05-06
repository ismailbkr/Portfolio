// import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-10 backdrop-blur-md bg-secondary border-b border-accent-light/30 dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#about" className="text-2xl font-bold text-main">
                    Portfolio
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-white">
                        About
                    </a>
                    <a href="#projects" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-white">
                        Projects
                    </a>
                    <a href="#contact" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-white">
                        Contact
                    </a>
                    <ThemeToggle />
                </nav>
                <div className="flex items-center space-x-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-white"
                        aria-label="Open mobile menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
} 