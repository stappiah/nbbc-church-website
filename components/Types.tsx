export interface Group {
  id: number;
  imageUrl: string;
  name: string;
  tagline?: string;
  description?: string;
  meetingSchedule?: string;
  location?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}
