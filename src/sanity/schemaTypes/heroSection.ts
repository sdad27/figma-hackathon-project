export const heroSection = {
    name: "heroSection",
    type: "document",
    title: "Hero Section",
    fields: [
      {
        name: "tagline",
        type: "string",
        title: "Tagline",
        // description: "Small text above the heading (e.g., 'Welcome to Chairy')",
      },
      {
        name: "title",
        type: "string",
        title: "Main Heading",
        // description: "Main headline text (e.g., 'Best Furniture Collection for your interior.')",
      },
      {
        name: "ctaText",
        type: "string",
        title: "Call-to-Action Text",
        // description: "Text for the CTA button (e.g., 'Shop Now')",
      },
      {
        name: "ctaLink",
        type: "url",
        title: "Call-to-Action Link",
        // description: "URL where the button will redirect",
      },
      {
        name: "image",
        type: "image",
        title: "Hero Image",
        description: "Upload the hero section image",
        options: {
          hotspot: true,
        },
      },
    ],
}