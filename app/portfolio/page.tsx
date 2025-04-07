import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export default function Portfolio() {
  const { portfolio } = portfolioData

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Portfolio
        <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((project, index) => (
          <div key={index} className="bg-[#252525] rounded-xl overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <div className="flex gap-3">
                  <Link
                    href={project.links.github}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} />
                  </Link>
                  <Link
                    href={project.links.live}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs bg-[#1e1e1e] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

