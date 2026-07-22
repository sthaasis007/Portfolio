export const sectionRoutes = [
  'services',
  'about',
  'process',
  'results',
  'testimonials',
  'tech',
  'portfolio',
  'blog',
  'courses',
  'contact',
] as const;

export type SectionRoute = (typeof sectionRoutes)[number];

export function isSectionRoute(value: string): value is SectionRoute {
  return (sectionRoutes as readonly string[]).includes(value);
}