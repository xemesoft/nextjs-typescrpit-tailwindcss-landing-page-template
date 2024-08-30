import Image from "next/image";

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    description:
      "Bonnie drives the technical strategy of the flowbite platform and brand.",
    image: "/team1.png",
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image: "/team2.png",
  },
  {
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description:
      "Michael drives the technical strategy of the flowbite platform and brand.",
    image: "/team3.png",
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description:
      "Lana drives the technical strategy of the flowbite platform and brand.",
    image: "/team4.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Unlock your business potential with our cutting-edge SaaS solutions
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg px-2 py-4"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                  width={200}
                  height={200}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                {/* Social media icons (unchanged) */}
                <ul className="flex space-x-4 sm:mt-0">
                  {/* ... (keep the existing social media icon code) ... */}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
