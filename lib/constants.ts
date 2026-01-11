export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "2026-10-25",
    time: "10:00 AM",
  },
  {
    title: "React Summit 2026",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-06-12",
    time: "09:00 AM",
  },
  {
    title: "JSWorld Conference",
    image: "/images/event3.png",
    slug: "jsworld-conference",
    location: "Online",
    date: "2026-02-15",
    time: "02:00 PM",
  },
  {
    title: "TechCrunch Disrupt 2026",
    image: "/images/event4.png",
    slug: "techcrunch-disrupt-2026",
    location: "San Francisco, CA",
    date: "2026-09-21",
    time: "08:30 AM",
  },
  {
    title: "Web Summit 2026",
    image: "/images/event5.png",
    slug: "web-summit-2026",
    location: "Lisbon, Portugal",
    date: "2026-11-11",
    time: "10:00 AM",
  },
  {
    title: "Devfest Lagos 2026",
    image: "/images/event6.png",
    slug: "devfest-lagos-2026",
    location: "Lagos, Nigeria",
    date: "2026-12-05",
    time: "09:00 AM",
  },
];
