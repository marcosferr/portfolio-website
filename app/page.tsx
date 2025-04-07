import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  FileText,
  MapPin,
  Download,
  User,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"
import { getIcon } from "@/lib/icons"
import type { IconName } from "@/lib/icons"

export default function Home() {
  const { about } = portfolioData

  return (
            <div className="md:col-span-4">
              <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  About Me
                  <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
                </h2>

                <div className="space-y-4 text-gray-300">
                  {about.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6 mt-8">What I'm Doing</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {about.whatImDoing.map((item, index) => (
                    <div key={index} className="bg-[#252525] rounded-xl p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4">
                        {getIcon(item.icon as IconName, { size: 24, className: "text-blue-500" })}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
         
  )
}

