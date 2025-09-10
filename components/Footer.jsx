import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800   mt-48 text-white overflow-hidden">
            <div className="absolute inset-0  top-[0%] bg-gradient-to-t from-[#9b28732a]  via-[#3ca8c454] to-[#a332e054] [mask-image:radial-gradient(670px_circle_at_50%_0%,white,transparent)]"></div>

            {/* Main footer content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 px-7">
                        <div className="mb-6">
                            <Image
                                src="/nexhacklogo.png"
                                alt="NexHack logo"
                                width={230}  // max width at md breakpoint
                                height={100} // estimated height, adjust if needed
                                className="w-[200px] md:w-[230px] max-w-full h-auto"
                            />
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
                                <a
                                    href="https://www.google.com/maps?q=Institute+of+Information+Technology+and+Management,+D-29,+Institutional+Area,+Janakpuri,+New+Delhi-110058"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Institute of Information Technology & Management D-29,
                                    Institutional Area, Janakpuri, New Delhi-110058
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-8 px-7">
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 flex flex-col gap-x-1 flex-wrap max-h-[150px]">
                            {[

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
                                        target={link.name === "Register Now" ? "_blank" : "_self"}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact & Social */}
                    <div className="px-7 lg:pl-16 ">
                        <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>

                        {/* Contact Info */}
                        <div className="mb-6">
                            <div className="flex items-center text-sm text-gray-300 mb-2">
                                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                                <a href="mailto:hello@Nexhack2024.com" className="hover:text-yellow-400 transition-colors">
                                    nexverse.iitm@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                // { icon: FaGithub, href: "#github", label: "GitHub" },
                                { icon: FaInstagram, href: "https://www.instagram.com/nexverse_iitm/", label: "Instagram" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/geek-room-iitm/", label: "LinkedIn" },
                                { icon: FaDiscord, href: "#discord", label: "Discord" },
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


            </div>
        </footer>
    )
}
