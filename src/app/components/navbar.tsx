import Link from "next/link";

const games = [
    {
        name: "📖 Aprende a leer",
        href: "/reading-pal",
    },
    {
        name: "🤖 Robotito obediente",
        href: "/robot",
    },
    {
        name: "🦄 Unicornio saltarín",
        href: "/unicorn",
    }
]

export default function Navbar() {
    return (
      <nav className="bg-[#ffd1dc] text-white p-4 w-2xs">
        <ul className="p-0 list-none">
          <li><Link href="/" className="no-underline font-bold block text-black rounded-lg py-[8px] px-[12px] bg-[#fff3f7] hover:bg-[#ffe6ee]">
            🕹️ Home
          </Link></li>
          {games.map((item, index) => (
            <li key={index} className="my-4 mx-0">
              <Link
                href={item.href}
                className="no-underline font-bold block text-black rounded-lg py-[8px] px-[12px] bg-[#fff3f7] hover:bg-[#ffe6ee]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }