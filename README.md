# Academic Culture Enjoyers

Community site for sharing stories, resources and event info about academic traditions and student culture across Europe. Built with [Next.js](https://nextjs.org) and Tailwind CSS.

### Favicon

The site includes a playful beer mug favicon wearing a jaunty hat. Replace `src/app/favicon.svg` with your own icon to customize it.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

### Tally Forms

The site can automatically ensure required Tally forms exist. Provide a
`TALLY_API` token in your environment and run:

```bash
npm run create-forms
```

This will create the membership application and Thomastag 2025 signup forms
if they do not already exist and print their IDs.

### Staging password

Set `STAGE_PASSWORD` in the environment to password-protect a staging deployment. When set, visitors are redirected to a staging access page to enter the password. A successful entry stores a cookie so the password isn't requested again. Production builds without this variable remain public.

## Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – run the production build
- `npm run lint` – run ESLint
- `npm run prettier` – format code with Prettier

## License

MIT
