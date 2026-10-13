# buddymalin.com

Static rebuild of Buddy Malin's real estate site (previously a MoxiWorks agent site provided by Wallace Real Estate). Built with [Astro](https://astro.build); outputs plain HTML/CSS to `dist/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`.
4. Add the custom domain `buddymalin.com` under the project's Custom domains tab, then point DNS at Cloudflare once the old MoxiWorks site is retired.

`public/_redirects` sends old MoxiWorks URLs (e.g. `/profile/my-bio`, `/contact-me`) to the new pages so existing links and Google results keep working. It also works on Netlify.

## Updating content

| What | Where |
|---|---|
| Phone, email, license, office, social links, search URL | `src/data/site.json` |
| Current and sold listings | `src/data/listings.json` (put photos in `public/images/`) |
| Bio | `src/pages/about.astro` — the current text is a draft; replace it with Buddy's own words |
| Colors and fonts | `src/styles/global.css` |

## Contact form

With `formEndpoint` empty in `site.json`, the form opens the visitor's email app with the message filled in. To receive submissions directly, create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and paste its endpoint URL into `formEndpoint`.

## What's not carried over

These were live feeds or licensed widgets supplied by MoxiWorks/Wallace and can't be copied into a static site:

- IDX property search → links to the Wallace search at wallacetn.com/search
- Brokerage-wide featured listings → replaced by Buddy's own listings, edited by hand
- Testimonial Tree reviews, Neighborhood News, Buying & Selling Tips articles, daily mortgage rates
- Financial calculators → replaced with a self-contained mortgage calculator

## Before going live

- Confirm with Wallace that Buddy can run an independent site and that the brokerage disclosure in the footer meets their advertising rules. Wallace logos in `public/images/` are brokerage branding for affiliated agents.
- Confirm the hero photo (`hero-knoxville.jpg`, taken from the old site) is licensed for use outside MoxiWorks, or swap it for another image.
- Listing photos came from the MLS; keep them only while the listings are his.
