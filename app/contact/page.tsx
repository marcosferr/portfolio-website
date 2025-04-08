import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import portfolioData from "@/data/portfolio-data.json";
import { getIcon } from "@/lib/icons";
import type { IconName } from "@/lib/icons";

export default function Contact() {
  const { contact, profile } = portfolioData;

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Contact Me
        <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">{contact.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#252525] p-6 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-orange-500" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <Link
                href={`mailto:${contact.email}`}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                {contact.email}
              </Link>
            </div>
          </div>

          <div className="bg-[#252525] p-6 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-orange-500" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-gray-400">{contact.location}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
          <div className="flex justify-center gap-6">
            {profile.socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(social.icon as IconName, { size: 20 })}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
