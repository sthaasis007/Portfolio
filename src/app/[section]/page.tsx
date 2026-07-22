import { notFound } from 'next/navigation';
import SourcePortfolioPage from '@/components/source-portfolio-page';
import { isSectionRoute, sectionRoutes } from '@/lib/section-routes';

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return sectionRoutes.map((section) => ({ section }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isSectionRoute(section)) {
    notFound();
  }

  return <SourcePortfolioPage route={section} />;
}