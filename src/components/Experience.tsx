import { motion } from 'framer-motion';

const experiences = [
	{
		company: 'Cisco Systems',
		position: 'Software Developer',
		period: 'Aug 2023 - Present',
		location: 'Bengaluru, India',
		description: [
			'Architected and developed a scalable workflow service on Kubernetes cluster using ArgoCD and Golang, reducing processing time by 40%',
			'Built responsive user interfaces for internal developer tools using Angular and RxJS, enhancing developer productivity across 20+ engineering teams',
			'Designed and implemented CI/CD pipelines for 10+ services using Jenkins and Kubernetes, automating deployment processes and reducing manual intervention by 80%'
		],
		technologies: ['Golang', 'Kubernetes', 'ArgoCD', 'Angular', 'RxJS', 'Jenkins', 'CI/CD']
	},
	{
		company: 'Cisco Systems',
		position: 'Software Engineering Intern',
		period: 'May 2022 - Jul 2022',
		location: 'Bengaluru, India',
		description: [
			'Developed cross-platform end-to-end GUI automation testing framework for Webex-ECM integration, supporting both native and web components',
			'Evaluated and implemented automated testing solutions using AutoIT, Squish, Appium, and Robot Framework',
			'Created comprehensive E2E UI test suites for Enterprise Content Management integration using Appium, Robot Framework, and WebDriver'
		],
		technologies: ['AutoIT', 'Squish', 'Appium', 'Robot Framework', 'WebDriver']
	},
	{
		company: 'Viga Entertainment',
		position: 'Software Development Intern',
		period: 'Jul 2022 - Jul 2023',
		location: 'Bengaluru, India',
		description: [
			'Built desktop application for Google Drive synchronization using PyQt, maintaining directory structure integrity',
			'Integrated Google Drive API with robust error handling and automated synchronization features',
			'Developed Blender plugin for multi-camera simultaneous video capture using Python and Blender\'s API'
		],
		technologies: ['Python', 'PyQt', 'Google Drive API', 'Blender API']
	}
];

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-slate-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
					<p className="text-slate-400 max-w-2xl mx-auto">
						My professional journey in software development and engineering.
					</p>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bg-slate-800 p-8 rounded-lg border border-slate-700"
						>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
								<div>
									<h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
									<p className="text-blue-400 text-lg">{exp.company}</p>
								</div>
								<div className="text-slate-400 text-sm mt-2 md:mt-0">
									<p>{exp.period}</p>
									<p>{exp.location}</p>
								</div>
							</div>

							<ul className="space-y-2 mb-6">
								{exp.description.map((item, i) => (
									<li key={i} className="text-slate-300 flex items-start">
										<span className="text-blue-400 mr-2 mt-1">•</span>
										{item}
									</li>
								))}
							</ul>

							<div className="flex flex-wrap gap-2">
								{exp.technologies.map((tech) => (
									<span
										key={tech}
										className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}