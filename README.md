# Sonaa Najah — صُنّاع النجاح

A buildless, mobile-first Arabic RTL website using HTML, CSS and vanilla JavaScript.

Open `index.html` directly, or from this folder run `python -m http.server 8080` and visit http://localhost:8080. No npm or build step is needed. For Vercel, import this folder, choose Other, leave Build Command empty and use `.` as Output Directory.

## Registration and prices
Five stages: registrant → academic details (student/parent alternatives) → service → package/subjects → summary. Only the final confirmation opens WhatsApp. The visitor must send the message to submit a request. Personal information stays in memory, never localStorage or a backend.

Edit PRICING in script.js for full-package prices and available subjects. COUNT_PRICING holds the now-confirmed annual prices for specific-subject selections by count, as supplied in the two official tables. Unsupported combinations produce an inquiry with no fabricated price. First-baccalaureate independent registrations remain inquiries because no specific tariff was supplied. Second-baccalaureate independent registrations use the explicitly named complete free-baccalaureate offer covering regional and national exams. Technical, mathematical and economic second-baccalaureate combinations without official prices remain inquiries.

## Assets
The revised hero, three student portraits, ten individual teacher reconstructions, 25-icon education sprite atlas, and book/graduation decoration are generated using the built-in ImageGen tool. Teacher reconstructions use the supplied faculty poster as an identity reference; these are AI reconstructions, not original studio photographs. Names were corrected from the clearer faculty poster. The authentic cropped brand logo is retained.

The hero is a background asset behind live HTML copy and buttons, including on mobile. Icons are a transparent 5?5 PNG atlas rendered with CSS background positioning, so they share one request. New assets have independent filenames; the old crops are retained.

Generation briefs and preservation constraints are in `assets/GENERATION-PROMPTS.md`.

Google Fonts provides Cairo when online; the page falls back to Arial offline. Icons use local Unicode symbols and require no icon service. Social links and contact destination follow the brief.

## Accessibility
Native modal focus containment, Escape dismissal, focus restoration, labeled fields, Arabic validation, five-step progress, reduced-motion support and keyboard-visible focus. Close/reopen retains form state in memory. Academic changes clear obsolete subject selections.

## Verification
Run `node test.cjs`: 50 assertions cover prices, phone validation, parent details, state reset and all five render paths. JavaScript syntax was checked with `node --check script.js`. Browser visual and interaction QA could not run because the browser access host was unavailable; mobile layout and native dialog behavior still need device verification.

## Footer revision
The bottom CTA now follows the supplied reference: generated purple photographic background with pencil cup/books/graduation cap at the edges, live Arabic headline, large green registration button and phone number, and a three-column support strip. The footer CTA opens WhatsApp directly at +212663104227. Other registration buttons retain the existing modal flow. Social links remain in the footer. New image: `assets/images/footer-banner-generated.png`; generation brief recorded in `assets/GENERATION-PROMPTS.md`.

## Supplied teacher photographs
The ten teacher cards now use the actual photographs supplied on 2026-10-29, replacing generated portraits in the live page and asset preview. Optimized WebP files are 540×594 pixels, quality 82, with empty headroom trimmed for consistent framing; faces are not retouched or regenerated. Combined payload is 149,438 bytes, down from 735,159 bytes for the supplied JPEGs (79.7% smaller). Source mapping and byte sizes are in `assets/teacher-photos.json`. Previous generated portraits remain archived in assets but are no longer requested by the teacher cards.

## Subject-count pricing update
Specific-subject selection uses COUNT_PRICING for both enrollment statuses: middle-school 1-7 subjects = 350/650/900/1150/1400/1650/1800 DH; baccalaureate 2-7 subjects = 850/1250/1550/1900/2200/2500 DH. One baccalaureate subject is 500 DH, or 400 DH for a lower-coefficient subject identified by its official 400-DH rate. No complete-package discount is stacked. Counts above 7 remain inquiries with no invented amount. Unsupported academic combinations still remain inquiries because their subject availability is not confirmed. The live total, summary and WhatsApp message share calculateTotal.

## Mobile reference revision
`mobile.css` is loaded last for viewports up to 600px. It follows the reference's split hero, purple trust strip, rounded white feature panel, lavender backgrounds and gold accents. Body copy, card labels, teacher names, CTA labels and form inputs were enlarged and given stronger contrast. Feature and level cards retain three columns; subjects and teacher cards use readable three- and two-column layouts respectively. At 320–360px a separate compact rule preserves readable type without shrinking the whole page. Desktop styling remains in style.css. Native form input text is at least 16px on mobile to avoid focus zoom.

The 50 form/pricing assertions pass after this CSS change. Automated browser access is still unavailable, so the new mobile layout needs a final visual check on a phone.

## Reference level cards
The level cards now use `levels.css`, loaded after the mobile stylesheet. Existing independent student images are composed with CSS: portrait overhangs, slight alternating card angles, lavender/gold backgrounds, overlapping pill ribbons, reference subtitles and compact arrow controls. Original level-selection behavior is retained. Mobile card heights include enough room for the second-baccalaureate two-line subtitle.

## Teacher carousel
Teacher photographs use consistent face-scale crops from the supplied originals. `teachers-carousel.css` and `teachers-carousel.js` provide a horizontal scroll-snap carousel with previous/next controls, touch swiping, arrow-key navigation and automatic advance every four seconds while visible. Autoplay pauses during hover, interaction, keyboard focus and hidden tabs. A visible pause/play button and reduced-motion preference are supported. Mobile shows two equally sized cards.
