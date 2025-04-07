"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import portfolioData from "@/data/portfolio-data.json";
import { getIcon } from "@/lib/icons";
import type { IconName } from "@/lib/icons";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { profile, navigation } = portfolioData;

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute left-0 top-0 h-full w-1/3 z-0 opacity-80 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-red-600 border-r-[100px] border-r-transparent absolute top-0 left-0"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-red-700 border-r-[100px] border-r-transparent absolute top-0 left-0 -translate-x-[100px]"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-orange-500 border-r-[100px] border-r-transparent absolute top-0 left-[100px]"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-orange-400 border-r-[100px] border-r-transparent absolute top-0 left-[200px]"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-teal-500 border-r-[100px] border-r-transparent absolute top-[100px] left-0"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-blue-500 border-r-[100px] border-r-transparent absolute top-[100px] left-[100px]"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-orange-500 border-r-[100px] border-r-transparent absolute top-[200px] left-0"></div>
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-yellow-400 border-r-[100px] border-r-transparent absolute top-[200px] left-[100px]"></div>
        </div>
      </div>

      {/* Bottom right shapes */}
      <div className="absolute right-0 bottom-0 z-0 opacity-80 pointer-events-none">
        <div className="w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-teal-500 border-r-[100px] border-r-transparent absolute bottom-0 right-0"></div>
        <div className="w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-orange-500 border-r-[100px] border-r-transparent absolute bottom-[100px] right-[100px]"></div>
      </div>

      {/* Mobile Navigation - Always visible buttons */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] shadow-md">
        <div className="flex justify-around items-center py-3">
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex flex-col items-center"
            >
              <div
                className={`p-2 rounded-lg ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
              >
                {getIcon(item.icon as IconName, { size: 24 })}
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive(item.path) ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 mt-24 md:mt-0">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#2a2a2a]">
                  <Image
                    src={
                      profile.avatar || "/placeholder.svg?height=128&width=128"
                    }
                    alt={profile.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                  {profile.name}
                </h1>
                <p className="text-gray-400 mb-4">{profile.title}</p>

                <div className="flex justify-center md:justify-start gap-4 mb-4">
                  {profile.socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      {getIcon(social.icon as IconName, { size: 20 })}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div>
                  <p className="text-xs text-gray-400">EMAIL</p>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="text-sm flex items-center gap-1 hover:text-teal-400 transition-colors"
                  >
                    {profile.email}
                  </Link>
                </div>
                <div>
                  <p className="text-xs text-gray-400">CV</p>
                  <Link
                    href={profile.cv}
                    className="text-sm flex items-center gap-1 hover:text-teal-400 transition-colors"
                    download="Marcos_Ferreira_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download <Download size={14} />
                  </Link>
                </div>
                <div>
                  <p className="text-xs text-gray-400">LOCATION</p>
                  <p className="text-sm flex items-center gap-1">
                    <span>{profile.location}</span> <MapPin size={14} />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">STATUS</p>
                  <p className="text-sm flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>{" "}
                    {profile.status}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Sidebar Navigation - Desktop Only */}
            <div className="hidden md:block md:col-span-1 space-y-4">
              {navigation.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div className="bg-[#1e1e1e] rounded-xl p-4 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 ${
                        isActive(item.path) ? "bg-blue-600" : "bg-[#2a2a2a]"
                      } rounded-xl flex items-center justify-center mb-2`}
                    >
                      {getIcon(item.icon as IconName, {
                        size: 24,
                        className: "text-white",
                      })}
                    </div>
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Main Content */}
            <div className="md:col-span-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
