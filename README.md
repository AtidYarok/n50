# Crator - Astro

This is a modern dark agency template built with [Tailwind CSS](https://tailwindcss.com), [Astro](https://astro.build/), and [Typescript](https://www.typescriptlang.org/).

This template is built with **Astro v3.6** and **Tailwind CSS v3.3**, leveraging the latest [View Transitions](https://docs.astro.build/en/guides/view-transitions/) and Image Optimizations. It incorporates [Content Collections](https://docs.astro.build/en/guides/content-collections/) for managing and authoring work case studies. Additionally, the template uses [Alpine.js](https://alpinejs.dev/) for a dynamic and interactive user experience.

## Getting Started

First, install the dependencies. Navigate to the project directory in your terminal and run:

```bash
npm install
# or
yarn install  # if you use yarn
pnpm install # if you use pnpm
```

This will install all required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

If all goes well, Astro should now be serving the template on [http://localhost:4321](http://localhost:4321)!

## Project Structure

```text
/
└── 📁public              # Contains favicon & OG image
└── 📁src                 # Core source files
    └── 📁components      # Reusable UI components
    └── 📁content         # Content (data) collections
        └── 📁caseStudies # Work case studies (yml files)
        └── config.ts     # Collection schema
    └── 📁icons           # SVG icons
    └── 📁images          # Images used across the project
    └── 📁layouts         # Site layouts
    └── 📁pages           # Our website pages
    └── 📁utils           # Helper functions for fetching case studies
    └── config.ts         # Defines general site and reusable data
    └── types.ts          # TypeScript types for our data/content
└── astro.config.mjs      # Main Astro configuration file
└── prettier.config.cjs   # Prettier code formatting configuration
└── tailwind.config.cjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Tailwind CSS

This theme uses the latest version of Tailwind CSS: v3.3.

Tailwind CSS and its dependencies were installed using [Astro's official Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/). If you are not familiar with the Tailwind CSS framework, I would recommend checking out the [Tailwind documentation](https://tailwindcss.com/docs).

We've tried to minimize any custom CSS and only rely on Tailwind's utility classes and a few additional classes defined within the `tailwind.config.mjs` file found at the root of the project. This template additionally uses 1 official Tailwind plugin: (`@tailwindcss/aspect-ratio`) to generate additional aspect ratio utility classes used across the site.

## Typescript

Crator comes with full Typescript support, offering robust typing and advanced language features. Astro's built-in [support for TypeScript](https://docs.astro.build/en/guides/typescript/) allows for writing typescript directly in Astro components, with benefits such as error prevention at runtime and enhanced code understanding through type definition of components and props.

### Typescript configuration

You can find the Typescript configuration at the root of the project: `tsconfig.json`. Our setup follows Astro's guidelines for TypeScript integration, using one of Astro's extendable `tsconfig.json` templates. We've chosen the 'strict' template for its balance between strictness and flexibility, and because it is the template recommended by Astro.

In the `tsconfig.json`, we also establish module path aliases, creating shortcuts for imports related to components, images, utility functions, and data, all pointing directly to the `/src` directory. This enables us to use succinct import statements like `import HomeHero from @components/home/HomeHero.astro`, streamlining file referencing and enhancing project readability.

### Types Definition

In `src/types.ts`, we define global data types for the site, facilitating consistency and ease of use across various components and modules. This ensures that the data structures used throughout the site are uniform, making the code more maintainable and reducing any potential for errors.

## Content Collections

Crator uses Astro's built-in [content collections](https://docs.astro.build/en/guides/content-collections/) to manage and author the site's case studies efficiently. Content collections offer a streamlined approach to organizing documents, validating frontmatter, and providing automatic TypeScript type-safety, making them an incredibly powerful tool for content management.

To maintain content integrity and ensure that each case study entry adheres to a consistent format, we define a strict content schema in `src/content/config.ts`. This schema, built with Zod through Astro's content APIs, ensures a consistent case study data structure across the site. It also provides robust frontmatter validation and automatic TypeScript typings, enhancing both the developer experience and the site's integrity.

### Adding new case studies

To add additional case studies to the site, you simply need to create a new file in the corresponding folder within `src/content/caseStudies/`, and adhere to the specific data format (yml) and structure defined in the schema.

Every case study entry is divided into metadata and the various page section data fields such as `hero`, `about`, `statsSection`, and `featuresSection` which correspond to specific components in the `src/components/work/` directory.

#### Featured and Categorized Case Studies

- **Featuring a Case Study:** Mark a case study as `featured: true` to showcase it prominently in the `FeaturedWork` component on both the homepage and the work page.

- **Categorization for Filtering:** Utilize the `category` field in each case study to enable category-based filtering. This categorization is leveraged by Astro's dynamic routing in the `src/pages/work/[category].astro` route, allowing users to filter case studies based on specific industries.

## Site Layout and Content Settings

Crator's `src/config.ts` file plays a crucial role in defining the global configuration of the site. One of its key features is the management of default SEO metadata using a global `SITE` variable.

### SEO and Sitemap Configuration

- **SEO Meta Tags:** Ensure to personalize the default SEO meta tags in the `SITE` variable, including the site title, description, and author.

- **Open Graph (OG) Image:** Update the `ogImage` property in the `SITE` variable with a custom image stored in the `/public` directory that effectively represents your site.

- **Production Website URL:** The website property in the `SITE` configuration, used for sitemap generation, should be updated with your actual production domain. This update is vital for ensuring accurate sitemap generation and search engine optimization.

```typescript
export const SITE: Site = {
  website: 'https://crator-astro.vercel.app',
  ogImage: 'crator-og.png',
  // ... other site properties
}
```

### Contact Info

The `CONTACT` object is prepopulated with a mock address, phone number and email. This data is used in the footer and contact page. Make sure to update this information before you deploy your site.

```typescript
export const CONTACT: Contact = {
  address: {
    street: '123 W. Kanye Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
  },
  phone: '+1-202-555-0132',
  email: 'hello@crator.com',
}
```

### Social Media Configuration

The `SOCIALS` array in the `src/config.ts` file is pre-populated with a set of social media platforms and mock URLs. This array is designed to be easily editable, allowing you to replace the placeholder data with your actual social media information.

```typescript
export const SOCIALS: SocialObjects = [
  // ... predefined social media data
]
```

The `SocialMedia` type, defined in `src/types.ts`, lists the supported social media platforms. If you wish to add a new social platform, you'll need to update the `SocialMedia` type and ensure that a corresponding icon for the new platform is added to the `src/icons` directory. The icon's file name should match the name used in the `SocialMedia` type for consistency.

```typescript
export type SocialMedia = 'github' | 'dribbble' | 'facebook'
// ... other social platforms
```

This global configuration system in `src/config.ts` offers a flexible yet structured way to manage global and reusable data on your agency website, allowing for easy customization and updates.

## Font

This template uses the [Inter](https://fonts.google.com/specimen/Inter) font, a versatile and modern typeface from the Google Fonts library. To integrate and manage this font, the template utilizes [Fontsource](https://docs.astro.build/en/guides/fonts/#using-fontsource), a reliable method for installing and implementing fonts in Astro projects.

## Icons

The icons used for this theme are part of the [Tabler Icons](https://github.com/tabler/tabler-icons) set that is free to use and published under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

This template uses [astro-icon](https://github.com/natemoo-re/astro-icon#readme) in order to make using these icons easier. It defines a straightforward Icon component for Astro that allows you to use custom SVG icons (sourced from the `src/icons` directory) or icons from common icon packs, powered by [Iconify](https://iconify.design/). We found that some icon packs (such as Tabler Icons) are not up-to-date so we simply copied the icon SVGs that we use in the template to the `src/icons` directory.

## Images

All of the images used in the template are free to use and are either from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or custom-made.

## Deployment

The easiest way to deploy your Astro site is either with [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). To learn more you can read Astro's official docs on [deploying with Vercel](https://docs.astro.build/en/guides/deploy/vercel/) or [deploying with Netlify](https://docs.astro.build/en/guides/deploy/netlify/)

## License

This site template is a commercial product and is licensed under the [Tailwind Awesome license](https://www.tailwindawesome.com/license).

## Learn More

To learn more about Astro, take a look at the following resources you can check their [official documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact me at <rodrigo@tailwindawesome.com>.
