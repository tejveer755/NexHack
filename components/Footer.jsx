import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800   mt-48 text-white overflow-hidden">
              <div className="absolute inset-0  top-[0%] bg-gradient-to-t from-[#289b9b2a]  via-[#b6a12938] to-[#ca821754] [mask-image:radial-gradient(670px_circle_at_50%_0%,white,transparent)]"></div>

            {/* Main footer content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 px-7">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                                Nexhack 2024
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                Join the ultimate 24+ hour coding challenge. Build, innovate, and compete with the best developers
                                worldwide.
                            </p>
                        </div>

                        {/* Event Details */}
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-300">
                                <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                                <span>September 26-27, 2025</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                                <MapPin size={20} className="w-4 h-4 mr-2 text-xl text-yellow-400" />
                                <span>Institute of Information Technology & Management D-29,
                                    Institutional Area, Janakpuri, New Delhi-110058</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center justify-end">
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 flex flex-col gap-x-18 flex-wrap max-h-[200px]">
                            {[
                                { name: "Register Now", href: "#" },
                                { name: "About", href: "#about" },
                                { name: "Our Team", href: "#team" },
                                { name: "Schedule", href: "#schedule" },
                                { name: "Prizes", href: "#prizes" },
                                { name: "Sponsors", href: "#sponsors" },
                                { name: "Mentors", href: "#mentors" },
                                { name: "FAQ", href: "#faq" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-center hover:text-yellow-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact & Social */}
                    <div className=" pl-16">
                        <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>

                        {/* Contact Info */}
                        <div className="mb-6">
                            <div className="flex items-center text-sm text-gray-300 mb-2">
                                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                                <a href="mailto:hello@Nexhack2024.com" className="hover:text-yellow-400 transition-colors">
                                    hello@Nexhack2024.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                { icon: Twitter, href: "#twitter", label: "Twitter" },
                                { icon: Github, href: "#github", label: "GitHub" },
                                { icon: Instagram, href: "#instagram", label: "Instagram" },
                                { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                {/* <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Nexhack. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div> */}
                {/* </div> */}
            </div>
        </footer>
    )
}
