import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const setMetaTag = (attr: 'name' | 'property', attrValue: string, content: string) => {
  let element = document.head.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setLinkTag = (rel: string, href?: string) => {
  if (!href) {
    return;
  }
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const setJsonLd = (id: string, data?: Record<string, unknown>) => {
  const existing = document.head.querySelector(`#${id}`) as HTMLScriptElement | null;
  if (!data) {
    if (existing) {
      existing.remove();
    }
    return;
  }
  const script = existing ?? document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('id', id);
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
};

export function Seo({ title, description, keywords, canonical, ogImage, jsonLd }: SeoProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }

    setMetaTag('name', 'twitter:card', ogImage ? 'summary_large_image' : 'summary');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (ogImage) {
      setMetaTag('name', 'twitter:image', ogImage);
    }

    setLinkTag('canonical', canonical);
    setJsonLd('seo-jsonld', jsonLd);
  }, [title, description, keywords, canonical, ogImage, jsonLd]);

  return null;
}
