import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="text-xl font-bold text-blue-400"
					>
						AB
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									{item.name}
								</motion.a>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-slate-300 hover:text-white p-2"
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								{isOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<motion.div
				initial={false}
				animate={{ height: isOpen ? 'auto' : 0 }}
				className="md:hidden overflow-hidden bg-slate-800"
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
						>
							{item.name}
						</a>
					))}
				</div>
			</motion.div>
		</nav>
	);
}