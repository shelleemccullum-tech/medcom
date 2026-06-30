import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://medcom-benefits.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}