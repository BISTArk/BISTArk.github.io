import { motion } from 'framer-motion';

const projects = [
	{
		title: 'VroCode',
		description: 'A comprehensive social media platform for developers built with MERN stack. Features integrated code editor, real-time messaging, and GitHub integration.',
		technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
		github: 'https://github.com/BISTArk/Vro_Code',
		period: 'Jul 2021 - Nov 2021'
	},
	{
		title: 'Ray Tracing Engine',
		description: 'Photorealistic ray tracing engine implemented in C++ based on "Ray Tracing in One Weekend". Demonstrates advanced computer graphics programming with accurate lighting and materials.',
		technologies: ['C++', 'Computer Graphics', 'Ray Tracing'],
		github: 'https://github.com/BISTArk/Raytracing',
		period: 'Jun 2021'
	},
	{
		title: 'Astronomical Animation System',
		description: 'Procedural animation system for astrophysical simulations using Python and Blender. Models stellar evolution lifecycle of blue straggler stars with scientific accuracy.',
		technologies: ['Python', 'Blender', 'Astronomy', 'Procedural Animation'],
		github: 'https://github.com/krittikaiitb/KSP20-ANYmation/tree/master/Akshay',
		period: '2020'
	},
	{
		title: 'Interactive Visualization Suite',
		description: 'Collection of interactive data visualizations and creative coding projects. Showcases proficiency in web-based graphics programming and creative development.',
		technologies: ['p5.js', 'JavaScript', 'WebGL', 'Data Visualization'],
		github: 'https://github.com/BISTArk/p5js-Projects',
		period: 'Ongoing'
	},
	{
		title: 'Multi-Camera Video Capture Plugin',
		description: 'Blender plugin for simultaneous multi-camera video capture. Streamlines video production workflows with Python and Blender\'s API.',
		technologies: ['Python', 'Blender API', 'Video Processing'],
		github: 'https://github.com/BISTArk/MultiCamera_Recording-Blender_Addon',
		period: 'Jul 2022 - Jul 2023'
	},
	{
		title: 'Google Drive Sync Desktop App',
		description: 'Desktop application for Google Drive synchronization with PyQt. Maintains directory structure integrity and enables selective sync functionality.',
		technologies: ['Python', 'PyQt', 'Google Drive API'],
		period: 'Jul 2022 - Jul 2023'
	}
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
					<p className="text-slate-400 max-w-2xl mx-auto">
						A showcase of my work spanning web development, computer graphics, and automation tools.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors group"
						>
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
									{project.title}
								</h3>
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
									</a>
								)}
							</div>

							<p className="text-slate-300 mb-4 leading-relaxed">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="bg-slate-600 text-slate-300 px-2 py-1 rounded text-xs"
									>
										{tech}
									</span>
								))}
							</div>

							<p className="text-slate-400 text-sm">{project.period}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}