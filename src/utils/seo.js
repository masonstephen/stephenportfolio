import { siteConfig, absoluteUrl, getProjectSeo } from '@/data/seo'
import { personalInfo, interests, projects } from '@/data/portfolio'
import { getProjectById } from '@/data/portfolio'

const META_ATTR = 'data-seo'

function upsertMeta(selector, attrs, content) {
  if (!content) return

  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
    el.setAttribute(META_ATTR, 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return

  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    el.setAttribute(META_ATTR, 'true')
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo-jsonld="${id}"]`)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-seo-jsonld', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeDynamicJsonLd() {
  document.head.querySelectorAll('script[data-seo-jsonld="page"]').forEach((el) => el.remove())
}

function setDocumentMeta({ title, description, path = '/', type = 'website', image }) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image || siteConfig.ogImage)

  document.title = title

  upsertMeta('meta[name="description"]', { name: 'description' }, description)
  upsertMeta('meta[name="keywords"]', { name: 'keywords' }, siteConfig.keywords)
  upsertMeta('meta[name="author"]', { name: 'author' }, personalInfo.name)
  upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow, max-image-preview:large')
  upsertMeta('meta[name="googlebot"]', { name: 'googlebot' }, 'index, follow')

  upsertLink('canonical', url)

  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type)
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, url)
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteConfig.name)
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, siteConfig.locale)
  upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, `${personalInfo.name} — ${personalInfo.title}`)

  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, siteConfig.twitterCard)
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)
  upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, `${personalInfo.name} — ${personalInfo.title}`)
}

function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    url: siteConfig.url,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    jobTitle: personalInfo.title,
    description: siteConfig.description,
    image: absoluteUrl(siteConfig.ogImage),
    sameAs: [personalInfo.github, personalInfo.linkedin],
    knowsAbout: interests,
    worksFor: {
      '@type': 'Organization',
      name: 'iBiz Africa',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Strathmore University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'Kenya',
    },
  }
}

function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
  }
}

function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} — Software Engineering`,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: ['Kenya', 'Liberia', 'Africa'],
    founder: {
      '@type': 'Person',
      name: personalInfo.name,
    },
  }
}

function buildProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.solution,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: absoluteUrl(`/projects/${project.id}`),
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      url: siteConfig.url,
    },
    keywords: project.stack.join(', '),
  }
}

function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function applyGlobalStructuredData() {
  upsertJsonLd('person', buildPersonSchema())
  upsertJsonLd('website', buildWebsiteSchema())
  upsertJsonLd('service', buildProfessionalServiceSchema())
}

export function updatePageSeo(to) {
  let seo = {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    path: to.path,
  }

  if (to.name === 'Home') {
    seo = {
      title: 'Stephen Mason | Software Engineer — Digital Solutions for Africa',
      description: siteConfig.description,
      type: 'website',
      path: '/',
    }
  } else if (to.name === 'Resume') {
    seo = {
      title: 'Resume | Stephen Mason — Software Engineer',
      description:
        'View or download the CV of Stephen Mason — Software Engineer specializing in AI, blockchain, and digital products for Africa.',
      type: 'profile',
      path: '/resume',
    }
  } else if (to.name === 'Research') {
    seo = {
      title: 'Research | Stephen Mason',
      description:
        'Research interests and projects in trustworthy AI, retrieval-augmented generation, information retrieval, evidence-grounded question answering, and educational AI — spanning independent research (LibAI) and academic research.',
      type: 'website',
      path: '/research',
    }
  } else if (to.name === 'ResearchLibAI') {
    seo = {
      title: 'LibAI | Trustworthy Curriculum-Aware RAG | Stephen Mason',
      description:
        'Independent research investigating curriculum-aware retrieval, evidence grounding, answerability, verification, and evaluation for educational question answering.',
      type: 'article',
      path: '/research/libai',
    }
  } else if (to.name === 'ProjectDetails') {
    const project = getProjectById(to.params.id)
    const projectSeo = getProjectSeo(project)
    seo = {
      ...projectSeo,
      path: to.path,
    }
  }

  setDocumentMeta(seo)

  removeDynamicJsonLd()

  if (to.name === 'ProjectDetails') {
    const project = getProjectById(to.params.id)
    if (project) {
      upsertJsonLd('page', buildProjectSchema(project))
      upsertJsonLd(
        'breadcrumbs',
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/#projects' },
          { name: project.name, path: to.path },
        ])
      )
    }
  } else if (to.name === 'Research') {
    upsertJsonLd(
      'breadcrumbs',
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
      ])
    )
  } else if (to.name === 'ResearchLibAI') {
    upsertJsonLd(
      'breadcrumbs',
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
        { name: 'LibAI', path: '/research/libai' },
      ])
    )
  } else {
    document.head.querySelector('script[data-seo-jsonld="breadcrumbs"]')?.remove()
  }
}

export function getSitemapEntries() {
  const today = new Date().toISOString().split('T')[0]

  return [
    { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { loc: '/resume', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/research', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { loc: '/research/libai', priority: '0.8', changefreq: 'monthly', lastmod: today },
    ...projects
      // Projects with a canonical page elsewhere (e.g. the final-year academic
      // project, which lives in /research) are excluded from project URLs.
      .filter((project) => !project.detailsPath)
      .map((project) => ({
        loc: `/projects/${project.id}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: today,
      })),
  ]
}
