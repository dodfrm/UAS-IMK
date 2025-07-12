import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {/* Hero Section for BSI University */}
        <header className="flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome to <span className="text-primary">BSI University</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Empowering Minds, Shaping Futures. Discover excellence in education,
            research, and community.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/admissions" // Placeholder link for admissions
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/about" // Placeholder link for about us
              className="px-6 py-3 border border-gray-300 text-gray-800 dark:text-gray-200 rounded-md text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </a>
          </div>
        </header>

        {/* Key Sections Overview */}
        <div className="max-w-5xl w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              About BSI
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              A leading institution dedicated to providing high-quality
              education and fostering innovation. Our commitment to academic
              excellence ensures a vibrant learning environment.
            </p>
            <a
              href="/about"
              className="mt-4 inline-block text-primary hover:underline"
            >
              Read More &rarr;
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Academic Programs
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explore our diverse range of undergraduate and postgraduate
              programs, designed to equip students with the knowledge and skills
              for future success.
            </p>
            <a
              href="/programs"
              className="mt-4 inline-block text-primary hover:underline"
            >
              View Programs &rarr;
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Admissions
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Begin your journey at BSI University. Find information on
              application requirements, deadlines, and financial aid options.
            </p>
            <a
              href="/admissions"
              className="mt-4 inline-block text-primary hover:underline"
            >
              Apply Now &rarr;
            </a>
          </div>
        </div>

        {/* Quick Links / Resources for University */}
        <div className="max-w-[400px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center font-semibold">
              Quick Links
            </p>
            <ul>
              {universityResources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    // Assuming these are internal links, remove target="_blank" and rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

// Updated resources for a university website
const universityResources = [
  {
    href: "/student-portal",
    text: "Student Portal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5V19.5M12 4.5c1.5 0 2.25 0 2.89.283c.64.282 1.139.782 1.422 1.422c.283.64.283 1.35.283 2.89V19.5m-3 0c-1.5 0-2.25 0-2.89-.283c-.64-.282-1.139-.782-1.422-1.422c-.283-.64-.283-1.35-.283-2.89V4.5m3 15V4.5c0-1.5-.75-2.25-2.25-2.25S7.5 3 7.5 4.5v15c0 1.5.75 2.25 2.25 2.25s2.25-.75 2.25-2.25Z" />
      </svg>
    ),
  },
  {
    href: "/faculty-staff",
    text: "Faculty & Staff Directory",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 18a.75.75 0 0 0 .75-.75v-10.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h10.5Zm-10.5-12h10.5m-10.5 0c-.414 0-.75.336-.75.75v-.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v.75c0-.414-.336-.75-.75-.75H6.75Zm.75 1.5h9c.414 0 .75.336.75.75a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75c0-.414.336-.75.75-.75Zm0 3.75h9m-9 3h9m-9 3h9M12 4.5h.008V4.5h-.008ZM12 4.5h.008V4.5h-.008Z" />
      </svg>
    ),
  },
  {
    href: "/library",
    text: "University Library",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5h.008V4.5h-.008Zm0 3h.008V7.5h-.008Zm0 3h.008V10.5h-.008Zm0 3h.008v-3h-.008Zm0 3h.008v-3h-.008Zm0 3h.008v-3h-.008ZM21 9a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75H20.25a.75.75 0 0 0 .75-.75V9ZM3 9h18M6 3.75h12c.414 0 .75.336.75.75s-.336.75-.75.75H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75Z" />
      </svg>
    ),
  },
];
