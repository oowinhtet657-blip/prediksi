export function generateBreadcrumbSchema(pasaran?: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  const baseBreadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ];

  if (pasaran) {
    baseBreadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: pasaran,
      item: `${siteUrl}/${pasaran}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: baseBreadcrumbs,
  };
}

export function generateArticleSchema(title: string, description: string, pasaran: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'Kalender Prediksi Togel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kalender Prediksi Togel',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: `prediksi togel ${pasaran}, angka main ${pasaran}, shio togel`,
  };
}
