export const siteConfig = {
  url: 'https://stephen-mason.tech',
  name: 'Stephen Mason',
  title: 'Stephen Mason | Software Engineer',
  tagline: 'Building Digital Solutions for Africa',
  description:
    'Stephen Mason is a Software Engineer specializing in digital products, artificial intelligence, blockchain, and digital public infrastructure for Africa. Based in Nairobi, Kenya.',
  keywords: [
    'Stephen Mason',
    'Stephen Mason software engineer',
    'Software Engineer Kenya',
    'Software Engineer Africa',
    'Digital Public Infrastructure',
    'Artificial Intelligence Africa',
    'Blockchain developer',
    'Strathmore University',
    'iBiz Africa',
    'LibTicket',
    'LibAI',
    'LibLand',
    'Vue.js developer',
    'Full stack developer Kenya',
    'stephen-mason.tech',
  ].join(', '),
  locale: 'en_US',
  language: 'en',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
}

export const defaultSeo = {
  title: siteConfig.title,
  description: siteConfig.description,
  type: 'website',
}

export const routeSeo = {
  Home: {
    title: 'Stephen Mason | Software Engineer — Digital Solutions for Africa',
    description: siteConfig.description,
    type: 'website',
  },
  Resume: {
    title: 'Resume | Stephen Mason — Software Engineer',
    description:
      'Download or view the resume of Stephen Mason, Software Engineering Intern at iBiz Africa and BBIT student at Strathmore University.',
    type: 'profile',
  },
  ProjectDetails: {
    type: 'article',
  },
}

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}

export function getProjectSeo(project) {
  if (!project) {
    return {
      title: 'Project | Stephen Mason',
      description: siteConfig.description,
      type: 'website',
    }
  }

  return {
    title: `${project.name} | Stephen Mason — ${project.tagline}`,
    description: project.solution.slice(0, 160),
    type: 'article',
    image: siteConfig.ogImage,
  }
}
