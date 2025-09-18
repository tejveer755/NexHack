import Image from "next/image"
import { Particles } from "./ui/Particles"

export default function SponsorSection() {
  const sponsors = [
    { name: "Hue Drops", logo: "/huedrops.png" },
    { name: "Blooming R Rose", logo: "/bloomingrose.png" },
    { name: "Stall Name Luck Game", logo: "/stallnameluckgames.png" },
    { name: "Sacedoracle3", logo: "/sacredoracle3.png" },
    { name: "Aura By Rajni", logo: "/aura.png" },
    { name: "Aloo Kachalu", logo: "/alookachalu.png" },
    { name: "Pehla Swaad", logo: "/pehlaswaad.png" },
    { name: "Ceraloom", logo: "/ceraloom.png" },
    { name: "Crimson Aura", logo: "/crimsonaura.png" },
    { name: "Shivi Bakers & Desserts", logo: "/shivibakers.png" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 border-b-2 border-b-white inline-block pb-3">
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

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 items-center">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-purple-950/10 via-zinc-950 to-black backdrop-blur-sm  rounded-lg "
                >
                  <div className="w-full h-44 overflow-hidden flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={180}
                      height={150}
                      className="object-cover max-h-full"
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
