"use client";

import React, { memo, useCallback, useState } from "react";
import ThreeDCard from "../3DCards/3dCards";
import myPicture from "@/public/images/me.jpg";
import dashboard from "@/public/images/dashboard.png";
import pmbs from "@/public/images/pmbs.png";
import sms from "@/public/images/sms.jpg";
import fms from "@/public/images/fms.png";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Helper components to make this example self-contained.
// In a real app, import icons from 'lucide-react' and your Badge from your UI library.
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);
const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);
const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);
const Badge = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${className}`}
    {...props}
  >
    {children}
  </span>
);

// --- TYPES ---
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
  imageUrl?: StaticImageData;
  link?: string | "";
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[]; // defaults to all items expanded
  expandMode?: ExpandMode; // "multi" | "single" (default: "multi")
}

// --- MOCK DATA ---
const timelineData: TimelineItemData[] = [
  {
    id: "timeline-item-1",
    title: "FlexPro Fitness Gym with face recognition System",
    type: "Part-time",
    duration: "2023—Present",
    icon: Code,
    responsibilities: [
      "Lead development of complex React applications with TypeScript.",
      "Architect scalable frontend solutions using Next.js and modern tooling.",
      "Mentor junior developers and conduct code reviews.",
      "Collaborate with design and backend teams to deliver high-quality products.",
    ],
    skills: [
      "React",
      "Python",
      "React.js",
      "Sass",
      "Django",
      "Django REST Framework",
      "SQLite",
    ],
    imageUrl: dashboard,
    link: "https://github.com/james3288/flex-pro-frontend",
  },
  {
    id: "timeline-item-2",
    title: "Facilities Maintenance System",
    type: "Full-time",
    duration: "10.2022—Present",
    icon: Palette,
    responsibilities: [
      "Ensure UI/UX consistency and high-quality standards using React,Typescript and bootstrap.",
      "Transitioning legacy codebase to modern React practices and optimize performance.",
      "Define and establish a cohesive UI style for the company.",
    ],
    skills: ["React", "TypeScript", "Bootstrap", "SQL Server"],
    imageUrl: fms,
    link: "https://github.com/james3288/frontend-fms",
  },
  {
    id: "timeline-item-3",
    title: "Supply Management System",
    type: "Full-time",
    duration: "2016—Present",
    icon: Code,
    responsibilities: [
      "Developed windows applications using Vb.net framework 3.5 and UI design in Photoshop.",
      "Implemented and combined with Microsoft SQL Server for robust data management.",
      "Optimized application performance and user experience through background worker.",
    ],
    skills: ["Vb.net", "Microsoft SQL Server", "Photoshop"],
    imageUrl: sms,
    link: "https://github.com/james3288/SMS",
  },
];

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="sm:flex-row flex flex-col gap-2.5">
        <div>
          <ThreeDCard>
            {item.imageUrl && (
              <Link href={item.link ?? ""} target="new_blank">
                <Image src={item.imageUrl} alt="my-picture" width={500} />
              </Link>
            )}
          </ThreeDCard>
        </div>
        <div>
          {/* Responsibilities */}
          <ul className="space-y-3">
            {item.responsibilities.map((responsibility, idx) => (
              <li
                key={`${item.id}-resp-${idx}`}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {item.skills.map((skill, skillIdx) => (
          <Badge
            key={`${item.id}-skill-${skillIdx}`}
            className="bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors px-3 py-1"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <li className="relative">
      {/* Timeline marker with icon */}
      <div className="absolute left-1 top-5 w-6 h-6 bg-slate-400 dark:bg-slate-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-white dark:text-black" />
      </div>

      {/* Card */}
      <div className="ml-14 pb-8">
        <div className="dark:bg-blend-saturation rounded-lg p-4 border border-slate-200/80 dark:border-gray-800/50 transition-all duration-200">
          <button
            id={headerId}
            className="w-full text-left group cursor-pointer"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span>{item.type}</span>
                  <span aria-hidden>•</span>
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {expanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>

          {expanded && (
            <div id={contentId} role="region" aria-labelledby={headerId}>
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((d) => d.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <ol className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px" aria-hidden />

      {data.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
        />
      ))}
    </ol>
  );
}

// --- APP ENTRY POINT ---`
export default function TimelinePage() {
  return (
    <div className="min-h-screen p-4 sm:p-10 transition-colors duration-300 my-2.5 relative pt-20">
      <div className="max-w-3xl mx-auto">
        <header className="flex flex-col items-baseline mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Featured <span className="text-violet-400">Projects</span>
          </h1>
          <p>A selection of projects that I`ve worked on.</p>
        </header>

        {/* Set expandMode="single" for accordion behavior */}
        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
      {/* <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-16"></div> */}
    </div>
  );
}
