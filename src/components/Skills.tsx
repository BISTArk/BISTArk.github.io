import { motion } from 'framer-motion';

const skillCategories = [
	{
		category: 'Programming Languages',
		skills: [
			{ name: 'JavaScript', level: 90 },
			{ name: 'Python', level: 85 },
			{ name: 'Go', level: 80 },
			{ name: 'C++', level: 75 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'Java', level: 70 }
		]
	},
	{
		category: 'Web Technologies',
		skills: [
			{ name: 'React', level: 90 },
			{ name: 'Angular', level: 85 },
			{ name: 'Node.js', level: 85 },
			{ name: 'HTML5/CSS3', level: 90 },
			{ name: 'REST APIs', level: 85 }
		]
	},
	{
		category: 'Cloud & DevOps',
		skills: [
			{ name: 'Kubernetes', level: 80 },
			{ name: 'Docker', level: 75 },
			{ name: 'Jenkins', level: 75 },
			{ name: 'CI/CD', level: 80 },
			{ name: 'AWS', level: 70 }
		]
	},
	{
		category: 'Databases & Tools',
		skills: [
			{ name: 'MongoDB', level: 80 },
			{ name: 'MySQL', level: 75 },
			{ name: 'Git', level: 90 },
			{ name: 'Linux', level: 80 }
		]
	}
];

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-slate-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
					<p className="text-slate-400 max-w-2xl mx-auto">
						Technologies and tools I work with to build robust and scalable solutions.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
							className="bg-slate-800 p-6 rounded-lg border border-slate-700"
						>
							<h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skill.name}>
										<div className="flex justify-between mb-2">
											<span className="text-slate-300">{skill.name}</span>
											<span className="text-slate-400 text-sm">{skill.level}%</span>
										</div>
										<div className="w-full bg-slate-700 rounded-full h-2">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{ duration: 1, delay: skillIndex * 0.1 }}
												viewport={{ once: true }}
												className="bg-blue-500 h-2 rounded-full"
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}