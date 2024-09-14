import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  listItems: string[];
}

const features: Feature[] = [
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your data with our powerful analytics tools. Visualize trends, identify patterns, and make data-driven decisions with ease.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Real-time data processing",
      "Customizable dashboards",
      "Predictive analytics",
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our product effortlessly with your existing tools and workflows. Our flexible API and pre-built connectors ensure a smooth transition.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "RESTful API",
      "Pre-built connectors",
      "Extensive documentation",
    ],
  },
  {
    title: "Enhanced Security",
    description:
      "Protect your data with our robust security features. Ensure the integrity and confidentiality of your information with our advanced encryption and access controls.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Advanced encryption",
      "Multi-factor authentication",
      "Role-based access control",
    ],
  },
  {
    title: "Streamlined Workflow",
    description:
      "Optimize your workflow with our intuitive interface and automation tools. Simplify tasks, reduce errors, and increase productivity.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Intuitive interface",
      "Automation tools",
      "Task prioritization",
    ],
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Boost Your Performance
          </h2>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-start mb-16 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                {feature.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
