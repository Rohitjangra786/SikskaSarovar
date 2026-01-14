import React, { useEffect } from 'react';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  lang?: string;
};

import PreviewImg from '../Images/Preview.jpg';

const defaultSite = {
  title: 'SikshaSarovar - Learn Your Way',
  description: 'SikshaSarovar provides accessible, high-quality tutorials in web development, programming, and AI.',
  image: PreviewImg,
  url: typeof window !== 'undefined' ? window.location.origin : 'https://sikshasarovar.com'
};

const SEO: React.FC<Props> = ({ title, description, image, url, lang = 'en' }) => {
  useEffect(() => {
    const finalTitle = title ? `${title} | ${defaultSite.title}` : defaultSite.title;
    document.title = finalTitle;

    const setMeta = (name: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const setProp = (prop: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('description', description || defaultSite.description);
    setProp('og:title', finalTitle);
    setProp('og:description', description || defaultSite.description);
    setProp('og:type', 'website');
    setProp('og:image', image || defaultSite.image);
    setProp('og:url', url || defaultSite.url);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', description || defaultSite.description);
    setMeta('twitter:image', image || defaultSite.image);

    // canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = url || defaultSite.url;

    // JSON-LD structured data for Organization
    const ldId = 'siksha-org-jsonld';
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SikshaSarovar',
      url: defaultSite.url,
      logo: defaultSite.image,
      sameAs: [
        'https://twitter.com/',
        'https://github.com/'
      ]
    };
    ld.text = JSON.stringify(ldJson);

    // language attribute
    document.documentElement.lang = lang;

    return () => {
      // Note: keep tags around for client nav; do not remove on unmount to avoid jank
    };
  }, [title, description, image, url, lang]);

  return null;
};

export default SEO;
