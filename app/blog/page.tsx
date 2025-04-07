import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export default function Blog() {
  const { blog } = portfolioData

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        Blog
        <span className="h-1 w-10 bg-blue-500 ml-4 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blog.map((post) => (
          <div key={post.id} className="bg-[#252525] rounded-xl overflow-hidden group">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-br-lg z-10">
                <div className="text-xl font-bold">{post.date.split(" ")[0]}</div>
                <div className="text-sm">{post.date.split(" ")[1]}</div>
              </div>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4">
                {post.logos.map((logo, index) => (
                  <div key={index} className="bg-white p-2 rounded-md">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt="Technology logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:text-blue-400 flex items-center gap-1 text-sm"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

