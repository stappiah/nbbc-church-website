export type NavItem = {
  title: string;
  href: string;
  label?: string;
};

export const NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Ministries", href: "/ministries" },
  { title: "Events", href: "/events" },
  { title: "Sermons", href: "/sermons" },
  { title: "Gallery", href: "/gallery" },
  { title: "Prayer", href: "/prayer-request", label: "Prayer" },
  { title: "Testimonies", href: "/testimonies" },
  { title: "Join Us", href: "/join-us" },
  { title: "Contact", href: "/contact" },
];
