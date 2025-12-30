"use client";
import type React from "react";
interface TimelineItem {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
}

interface TimelineProps {
  data?: TimelineItem[];
  className?: string;
}

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl bg-white p-12 text-sm leading-7 text-gray-700 shadow-lg shadow-black/5 dark:bg-gray-950 dark:text-gray-300 dark:shadow-white/5 ${className}`}
  >
    {children}
  </div>
);

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 ${className}`}
  >
    {children}
  </span>
);

const defaultTimelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Freelance Programmer",
    company: "",
    date: "2023 - Present",
    description:
      "Developed a fitness gym system featuring facial recognition and subscription management, enabling users to register memberships and assign trainers with ease.",
  },
  {
    id: "2",
    title: "Training (Python Programming Essentials)",
    company: "Inventive Media",
    date: "24-27.11.2023",
    description:
      "Successfully completed Python Essentials training, progressing from core fundamentals to advanced topics, with daily practical project implementation using Django.",
  },
  {
    id: "3",
    title: "Software Developer",
    company: "Adfil Corporation",
    date: "2016 - Present",
    description:
      "Collaborating with stakeholders to gather and analyze requirements for software projects, understanding the needs and objectives of end users. Create clean, efficient, and maintainable code according to design specifications, using programming languages such as Python, JavaScript, visual basic.net and SQL server",
  },
  {
    id: "4",
    title: "Frontend Web Developer",
    company: "Proweaver",
    date: "2013 - 2014",
    description:
      "Transform static web designs into responsive HTML and CSS layouts, seamlessly integrating them into dynamic WordPress content management systems.",
  },
  {
    id: "5",
    title: "Education (Bachelor of Science in Information Technology)",
    company: "Father Saturnino Urios University",
    date: "2006 - 2012",
    description:
      "Transform static web designs into responsive HTML and CSS layouts, seamlessly integrating them into dynamic WordPress content management systems.",
  },
];

export default function TimelinePage3({
  data = defaultTimelineData,
  className = "",
}: TimelineProps) {
  return (
    <div className="min-h-screen p-4 sm:p-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="flex flex-col items-base mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Professional <span className="text-violet-400">Experience</span> /
            <span> Education</span> /{" "}
            <span className="text-violet-400"> Training </span>
          </h1>
        </header>

        {/* Set expandMode="single" for accordion behavior */}
        <div className="space-y-10">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="relative group transition-all duration-300 hover:translate-x-1"
            >
              {index !== data.length - 1 && (
                <div className="absolute left-3 top-8 h-full w-0.5 bg-gradient-to-b from-black via-gray-400 to-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="flex gap-6">
                <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" />
                </div>
                <div className="flex-1 space-y-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-gray-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sky-600 dark:text-sky-400 font-medium">
                        {item.company}
                      </p>
                      <Badge>{item.date}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:bg-gray-50 dark:group-hover:bg-gray-800/30 rounded-lg p-3 m-3 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
