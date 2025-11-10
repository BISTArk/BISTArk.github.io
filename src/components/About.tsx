import { motion } from 'framer-motion';

export default function About() {
	return (
		<section id="about" className="py-20 bg-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-slate-400 max-w-2xl mx-auto">
						Passionate software developer with expertise in full-stack development,
						cloud technologies, and creating impactful solutions.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<p className="text-slate-300 leading-relaxed">
							I'm a Software Developer at Cisco Systems, where I architect scalable solutions
							and build developer tools that enhance productivity across engineering teams.
							With a background in Electronics and Communication Engineering from NIT Karnataka,
							I bring a unique perspective to software development.
						</p>
						<p className="text-slate-300 leading-relaxed">
							My journey spans from developing GUI automation frameworks for enterprise applications
							to creating social platforms for developers. I'm passionate about leveraging technology
							to solve complex problems and create seamless user experiences.
						</p>
						<div className="flex flex-wrap gap-4">
							<div className="bg-slate-700 px-4 py-2 rounded-lg">
								<span className="text-blue-400 font-medium">Location:</span>
								<span className="text-slate-300 ml-2">Bengaluru, India</span>
							</div>
							<div className="bg-slate-700 px-4 py-2 rounded-lg">
								<span className="text-blue-400 font-medium">Experience:</span>
								<span className="text-slate-300 ml-2">2+ Years</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<div className="bg-slate-700 p-6 rounded-lg">
							<h3 className="text-xl font-semibold text-white mb-4">Education</h3>
							<div className="space-y-3">
								<div>
									<h4 className="text-blue-400 font-medium">B.Tech in Electronics & Communication</h4>
									<p className="text-slate-300">NIT Karnataka • 2019-2023 • CGPA: 8.67/10</p>
								</div>
								<div>
									<h4 className="text-blue-400 font-medium">Minor in Information Technology</h4>
									<p className="text-slate-300">NIT Karnataka • CGPA: 9.25/10</p>
								</div>
							</div>
						</div>

						<div className="bg-slate-700 p-6 rounded-lg">
							<h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
							<div className="space-y-3">
								<div>
									<h4 className="text-blue-400 font-medium">Winner - Best Financial Hack</h4>
									<p className="text-slate-300">HopHacks Fall 2021 • Sponsored by Capital One</p>
								</div>
								<div>
									<h4 className="text-blue-400 font-medium">Krittika Summer Projects</h4>
									<p className="text-slate-300">IIT Bombay Astronomy Club • 2020</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}