import { getCollection } from 'astro:content'

export async function getCaseStudyCategories() {
  const caseStudies = await getCollection('caseStudies')
  const uniqueCategories = [
    ...new Set(caseStudies.map((caseStudy) => caseStudy.data.category)),
  ].map((category) => {
    return {
      name: category,
      slug: category.toLowerCase().replace(' ', '-'),
    }
  })

  return uniqueCategories
}
