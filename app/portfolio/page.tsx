"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, X } from "lucide-react";
import portfolioData from "@/data/portfolio-data.json";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export default function Portfolio() {
  const { portfolio } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenPreview = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Portfolio
        <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((project: Project, index) => (
          <div
            key={index}
            className="bg-[#252525] rounded-xl overflow-hidden group relative cursor-pointer"
            onClick={() => handleOpenPreview(project)}
          >
            {/* Category chip */}
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-br-lg">
                {project.category}
              </div>
            </div>

            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                <p className="text-white text-sm text-center">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-[#1e1e1e] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links as chips */}
              <div className="flex gap-2">
                {project.links?.github && (
                  <Link
                    href={project.links.github}
                    className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-blue-500/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={12} />
                    GitHub
                  </Link>
                )}
                {project.links?.live && (
                  <Link
                    href={project.links.live}
                    className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-green-500/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} />
                    Website
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={handleClosePreview}>
        <DialogContent className="max-w-4xl bg-[#252525] border-none p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-black/20 backdrop-blur-sm p-2 hover:bg-black/40 transition-colors">
            <X className="h-4 w-4 text-white" />
          </DialogClose>

          {selectedProject && (
            <div className="relative">
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h2 className="text-xl font-bold text-white mb-2">
                  {selectedProject?.title}
                </h2>
                <p className="text-gray-300 text-sm">
                  {selectedProject?.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
