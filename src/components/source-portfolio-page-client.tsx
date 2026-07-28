'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import type { SectionRoute } from '@/lib/section-routes';

const hiddenSelectors: Record<SectionRoute, string[]> = {
  services: ['.hero', '.ticker-wrap', '#about', '#process', '#results', '#testimonials', '#tech', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  about: ['.hero', '.ticker-wrap', '#services', '#process', '#results', '#testimonials', '#tech', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  process: ['.hero', '.ticker-wrap', '#services', '#about', '#results', '#testimonials', '#tech', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  results: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#testimonials', '#tech', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  testimonials: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#tech', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  tech: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#testimonials', '#portfolio', '#blog', '#courses', '#contact', 'footer'],
  portfolio: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#testimonials', '#tech', '#blog', '#courses', '#contact', 'footer'],
  blog: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#testimonials', '#tech', '#portfolio', '#courses', '#contact', 'footer'],
  courses: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#testimonials', '#tech', '#portfolio', '#blog', '#contact', 'footer'],
  contact: ['.hero', '.ticker-wrap', '#services', '#about', '#process', '#results', '#testimonials', '#tech', '#portfolio', '#blog', '#courses', 'footer'],
};

function buildRouteStyles(route?: SectionRoute) {
  if (!route) {
    return '';
  }

  return hiddenSelectors[route].map((selector) => `[data-route="${route}"] ${selector}{display:none !important;}`).join('\n');
}

type SourcePortfolioPageClientProps = {
  route?: SectionRoute;
  styles: string;
  body: string;
  scripts: string;
};

export default function SourcePortfolioPageClient({ route, styles, body, scripts }: SourcePortfolioPageClientProps) {
  const [isMounted, setIsMounted] = useState(false);
  const routeStyles = buildRouteStyles(route);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${styles}\n${routeStyles}` }} />
      {isMounted ? (
        <>
          <div data-route={route ?? 'home'} dangerouslySetInnerHTML={{ __html: body }} />
          <Script id="portfolio-source-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scripts }} />
        </>
      ) : (
        <div data-route={route ?? 'home'} />
      )}
    </>
  );
}
