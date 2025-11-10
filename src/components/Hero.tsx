import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8"
				>
					<motion.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-bold text-white"
					>
						Akshay B Bistagond
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-slate-300"
					>
						Software Developer & Full-Stack Engineer
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-lg text-slate-400 max-w-2xl mx-auto"
					>
						Passionate about building scalable solutions, from Kubernetes workflows to interactive web applications.
						Currently crafting developer experiences at Cisco Systems.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a
							href="#projects"
							className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
						>
							View My Work
						</a>
						<a
							href="#contact"
							className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-colors"
						>
							Get In Touch
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}