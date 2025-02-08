import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './heroSection'
import { companyLogos } from './companyLogos'
import { categorySchema } from './categories'
import { explore } from './explore'
import { productSchema } from './products'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection,companyLogos,categorySchema,explore,productSchema],
}
