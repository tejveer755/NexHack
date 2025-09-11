import Image from "next/image"
import { Particles } from "./ui/Particles"

export default function SponsorSection() {
  const sponsors = [
    { name: "Hue Drops", logo: "/huedrops.JPG" },
    { name: "Blooming Rose", logo: "/bloomingrose.JPG" },
    { name: "Stall Name Luck Game", logo: "/stallnameluckgames.JPG" },
    { name: "Sacedoracle3", logo: "/sacredoracle3.JPG" },
    { name: "Aura By Rajni", logo: "/aura.JPG" },
    { name: "Aloo Kachalu", logo: "/alookachalu.JPG" },
    // { name: "AICore", logo: "/coming_soon.png" },
    // { name: "WebStack", logo: "/coming_soon.png" },
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
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Amazing
            <span className="ml-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
        </div>

        {/* Sponsors grid */}
        <div className="relative py-12">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-11 items-center">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-purple-950/10 via-zinc-950 to-black backdrop-blur-sm  rounded-lg "
                >
                  <div className="w-full h-44 flex items-center justify-center">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={160}
                      height={120}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <p className="mt-4 text-lg text-center text-white font-medium">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>

    </section>
  )
}
