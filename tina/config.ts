import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  schema: {
    collections: [
      {
        name: 'event',
        label: 'Events',
        path: 'content/events',
        format: 'md',
        ui: {
          filename: {
            slugify: (values) =>
              values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ?? '',
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'location',
            label: 'Location',
            required: true,
          },
          {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            fields: [
              {
                type: 'string',
                name: 'headline',
                label: 'Headline',
              },
              {
                type: 'image',
                name: 'image',
                label: 'Hero Image',
              },
              {
                type: 'string',
                name: 'ctaText',
                label: 'CTA Text',
              },
              {
                type: 'string',
                name: 'ctaLink',
                label: 'CTA Link',
              },
            ],
          },
          {
            type: 'string',
            name: 'signupOpens',
            label: 'Signup Opens',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            required: true,
          },
        ],
      },
    ],
  },
});
