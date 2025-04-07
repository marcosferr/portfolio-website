import { Briefcase, GraduationCap, Award } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export default function Resume() {
  const { resume } = portfolioData

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Resume
        <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Briefcase size={20} className="mr-2" /> Experience
          </h2>

          <div className="space-y-6">
            {resume.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-gray-700">
                <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-orange-500"></div>
                <div className="mb-1 text-sm text-gray-400">{exp.period}</div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <GraduationCap size={20} className="mr-2" /> Education
          </h2>

          <div className="space-y-6">
            {resume.education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l border-gray-700">
                <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-orange-500"></div>
                <div className="mb-1 text-sm text-gray-400">{edu.period}</div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4 mt-8 flex items-center">
            <Award size={20} className="mr-2" /> Certifications
          </h2>

          <div className="space-y-6">
            {resume.certifications.map((cert, index) => (
              <div key={index} className="relative pl-8 border-l border-gray-700">
                <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-orange-500"></div>
                <div className="mb-1 text-sm text-gray-400">{cert.year}</div>
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{skillCategory.category}</h3>
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#252525] rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

