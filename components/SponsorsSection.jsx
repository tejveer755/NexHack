import Image from "next/image"
import { Particles } from "./ui/Particles"

export default function SponsorSection() {
  const sponsors = [
    { name: "TechCorp", logo: "/coming_soon.png" },
    { name: "InnovateLab", logo: "/coming_soon.png" },
    { name: "CodeBase", logo: "/coming_soon.png" },
    { name: "DevTools", logo: "/coming_soon.png" },
    { name: "CloudSync", logo: "/coming_soon.png" },
    { name: "DataFlow", logo: "/coming_soon.png" },
    { name: "AICore", logo: "/coming_soon.png" },
    { name: "WebStack", logo: "/coming_soon.png" },
  ]

  return (

    <section className="relative  py-24 overflow-hidden" id="sponsors">
      {/* Gradient masks */}
      <div className="absolute inset-0 z[-1]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black/20" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent to-black/10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-transparent to-black/10" />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-transparent to-transparent" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Amazing
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation and the next generation of developers
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl " />
          <div className="relative z-10 flex items-center justify-center">
            <img src="/coming_soon.png" alt="Coming Soon" className="w-auto max-w-xs md:max-w-md" />
          </div>
          {/* <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className="group relative flex items-center justify-center p-6 rounded-2xl border border-gray-800/50 bg-gray-900/20 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 hover:scale-105"
              >
                

                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={`${sponsor.name} logo`}
                  width={120}
                  height={60}
                  className="filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div> */}
        </div>


      </div>

      {/* <div className="absolute inset-0  z[5]">
        <Particles ease={300} staticity={50} vx={-0.8} vy={.3} />
      </div> */}
    </section>
  )
}
