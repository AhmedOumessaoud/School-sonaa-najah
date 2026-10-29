# Sonaa Najah — صُنّاع النجاح

A buildless, mobile-first Arabic RTL website using HTML, CSS and vanilla JavaScript.

Open `index.html` directly, or from this folder run `python -m http.server 8080` and visit http://localhost:8080. No npm or build step is needed. For Vercel, import this folder, choose Other, leave Build Command empty and use `.` as Output Directory.

## Registration and prices
Five stages: registrant → academic details (student/parent alternatives) → service → package/subjects → summary. Only the final confirmation opens WhatsApp. The visitor must send the message to submit a request. Personal information stays in memory, never localStorage or a backend.

Edit PRICING in script.js for the supplied official annual subject and package tariffs. GENERIC_COUNT_PRICING is separate and inactive. Unsupported combinations produce an inquiry with no fabricated price. First-baccalaureate independent registrations remain inquiries because no specific tariff was supplied. Second-baccalaureate independent registrations use the explicitly named complete free-baccalaureate offer covering regional and national exams. Technical, mathematical and economic second-baccalaureate combinations without official prices remain inquiries.

## Assets
The revised hero, three student portraits, ten individual teacher reconstructions, 25-icon education sprite atlas, and book/graduation decoration are generated using the built-in ImageGen tool. Teacher reconstructions use the supplied faculty poster as an identity reference; these are AI reconstructions, not original studio photographs. Names were corrected from the clearer faculty poster. The authentic cropped brand logo is retained.

The hero is a background asset behind live HTML copy and buttons, including on mobile. Icons are a transparent 5?5 PNG atlas rendered with CSS background positioning, so they share one request. New assets have independent filenames; the old crops are retained.

Generation briefs and preservation constraints are in `assets/GENERATION-PROMPTS.md`.

Google Fonts provides Cairo when online; the page falls back to Arial offline. Icons use local Unicode symbols and require no icon service. Social links and contact destination follow the brief.

## Accessibility
Native modal focus containment, Escape dismissal, focus restoration, labeled fields, Arabic validation, five-step progress, reduced-motion support and keyboard-visible focus. Close/reopen retains form state in memory. Academic changes clear obsolete subject selections.

## Verification
Run `node test.cjs`: 27 assertions cover prices, phone validation, parent details, state reset and all five render paths. JavaScript syntax was checked with `node --check script.js`. Browser visual and interaction QA could not run because the browser access host was unavailable; mobile layout and native dialog behavior still need device verification.

## Footer revision
The bottom CTA now follows the supplied reference: generated purple photographic background with pencil cup/books/graduation cap at the edges, live Arabic headline, large green registration button and phone number, and a three-column support strip. The registration CTA opens the existing modal, not WhatsApp directly. Social links remain in the footer. New image: `assets/images/footer-banner-generated.png`; generation brief recorded in `assets/GENERATION-PROMPTS.md`.
