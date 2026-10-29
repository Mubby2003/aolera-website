# AOlera Concierge Medical Services website

Responsive, lightweight static site built from the supplied AOlera brand and service artwork. The header and footer use a fitted mark and custom wordmark; the founder story uses the supplied close-cropped suit portrait and verified MBBS details; service and screening sections use medical line icons.

The page includes Open Graph and large-image Twitter card metadata with a 1200 × 630 branded preview at `assets/og-cover.jpg`. Once a production domain is selected, set `og:image` and `twitter:image` to the full HTTPS image URL and add the production page URL as `og:url` (and a canonical URL). Social platforms need a public HTTPS site to fetch and cache the preview; a local file preview cannot be fetched by them.

## Preview

Open `index.html` in a browser, or serve this folder with any static web server. The site has no build step or runtime dependencies.

## Before publishing

Please have AOlera review and approve the founder biography, services, screening list, contact details, and any statements about clinical qualifications, availability, medication delivery, referral arrangements, and corporate services. The artwork uses stock photography; replace these images if AOlera has approved original photography. Add official LinkedIn and Telegram URLs if they want those channels linked. No patient data or health information is collected by this site.

## Files

- `index.html` — page content and structure
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and current year
- `assets/` — compressed image crops from the supplied brand artwork

