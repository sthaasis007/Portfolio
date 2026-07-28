import { getSourcePage } from '@/lib/source-page';
import type { SectionRoute } from '@/lib/section-routes';
import SourcePortfolioPageClient from '@/components/source-portfolio-page-client';

export default function SourcePortfolioPage({ route }: { route?: SectionRoute }) {
  const page = getSourcePage();

  return <SourcePortfolioPageClient route={route} styles={page.styles} body={page.body} scripts={page.scripts} />;
}

