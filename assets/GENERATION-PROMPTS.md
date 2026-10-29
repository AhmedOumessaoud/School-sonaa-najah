# Image generation prompts and provenance

Tool: built-in ImageGen. Reference: the supplied Sonaa Najah landing-page design and the clearer two-row faculty poster. No API/CLI fallback.

## Hero — hero-generated.png
Use case: ads-marketing. Generate ONE website hero photographic background based on the FIRST reference landing page. No web UI, no text, no logos, no labels. Wide landscape 3:2 composition. Moroccan teenage boy with curly black hair viewed from behind/right wearing deep purple hoodie and over-ear black headphones studying at a wooden desk with a laptop displaying a male teacher and math board. Boy and laptop on RIGHT HALF; LEFT HALF is softly fading white/lavender empty space for real HTML headline. Purple lit cozy room, bookshelf, plant, purple and gold stacked textbooks lower right with no writing. Match the reference's camera angle and polished realistic educational advertising aesthetic. Full bleed rectangular image, no rounded frame, no cards. Keep student and laptop clear on right.

## Teacher portraits — teacher-0-generated.png through teacher-9-generated.png
Shared prompt: Use case: identity-preserve / background-extraction. Produce ONE separate professional teacher portrait asset, not a sheet. Use the supplied SECOND attached Arabic Sonaa Najah faculty poster (large 1280x1600 image with TEN men in TWO rows) as the identity reference. Ignore unrelated restaurant image. Extract/reconstruct ONLY the specified teacher faithfully. Preserve his facial identity, age, facial geometry, hairstyle, skin tone, expression, eyewear, outfit and pose from that poster; do not invent a different person, do not beautify or change identity. Chest-up centered portrait, head fully visible, generous transparent margin at top and sides, consistent front-facing studio framing. Improve clarity gently while respecting the original. Real photographic texture. ACTUAL TRANSPARENT background, no purple glow, no text, no nameplate, no watermark, no other people.

Subject directives in file order:
0. Top far left, Arabic teacher, dark suit navy tie, short cropped hair, medium brown skin, clean-shaven.
1. Top second from left, French teacher, navy suit pale blue open-collar shirt, receding short dark hair and small goatee.
2. Top center, Islamic education teacher, glasses with green reflections, dark suit burgundy tie, beard, smiling.
3. Top second from right, social studies teacher, dark suit burgundy tie, slick short dark hair, clean-shaven.
4. Top far right, life sciences teacher, dark blue suit light grey tie, short black hair, clean-shaven.
5. Bottom far left, philosophy teacher, black rounded glasses, beard, black suit white shirt gold patterned tie.
6. Bottom second from left, English teacher, black collared polo, short black hair, slight beard/stubble, medium brown skin.
7. Bottom center, mathematics teacher, dark suit grey patterned tie, black moustache and small goatee, short black hair.
8. Bottom second from right, physics teacher, navy suit light blue tie, short black hair, closely trimmed goatee, smiling.
9. Bottom far right, supervision teacher, rectangular black glasses, black polo, short black hair, clean-shaven.

## Student portraits
Three individual transparent photographic waist-up assets; full heads and shoulders, generous transparent margin, no text, logos, cards or frames. Premium Moroccan education campaign aesthetic.
- student-middle: 15-year-old boy, curly black hair, white t-shirt, open black overshirt, backpack, friendly smile.
- student-first: 17-year-old girl, long straight dark brown hair, modest lavender long sleeve shirt, colorful textbooks held at chest, natural smile.
- student-second: 18-year-old boy, dark curly hair, white t-shirt, navy casual jacket, backpack, confident smile.

## Education icon atlas — icons/education-atlas.png
One square transparent PNG sprite atlas, exactly 5 columns and 5 rows, icons centered in equal cells, 55% cell occupancy and generous transparent padding. Crisp consistent purple #5515A8 solid icons with restrained dimensional lavender highlights. No labels, numbers or borders. In reading order left-to-right:
1. graduation cap; video camera with green accent; stack of textbooks; play button in rounded rectangle; exam document with check badge.
2. rising bar chart; green WhatsApp bubble handset; calendar; support headset; atom.
3. calculator; speech bubble with EN; Eiffel tower; open book; leaf.
4. philosophy head profile; globe; mosque; diamond; two people with chat bubble.
5. person growth arrow; award medal; shield checkmark; clock; users group.

## CTA decoration — cta-books.png
One decorative still life: three deep purple and cream textbooks with thin gold edges, gold graduation cap on top, white ceramic pencil cup with purple and gold pencils alongside. Realistic studio product photography, warm soft lighting, slight three-quarter view, compact balanced arrangement. Actual transparent background, no writing, letters, logos or frames.

## Identity correction pass for teachers 6–9
The first candidates for the last four teachers mixed identities and were rejected during visual review. Regeneration uses `teacher-6.png`, `teacher-7.png`, `teacher-8.png`, and `teacher-9.png` as explicit local reference paths, one reference per call, instead of a changing set of recent conversation images.

Correction prompt: Edit target: the provided SMALL CROP is the SOLE facial identity reference for this person. Reconstruct/upscale this EXACT teacher into an individual high-quality photographic chest-up portrait. Preserve actual facial proportions, age, eye shape, nose, jaw, skin color, hair, facial hair, clothing and pose. Do not borrow any face from previous outputs or other conversation images. Gently restore detail without smoothing or beautifying. Remove purple backdrop and framing; actual transparent background. Centered head and shoulders, full hair visible. No text, labels, logos, or other people.

Identity constraints:
- 6: English teacher, medium brown skin, short thick dark hair, black polo, short beard and moustache, no glasses, calm serious expression.
- 7: Mathematics teacher, black moustache and small pointed goatee, short side-parted hair, dark suit and patterned grey tie, no glasses, serious expression.
- 8: Physics teacher, dark brown skin, short hair with receding temples, narrow chin goatee and moustache, blue suit and blue tie, wide smile, no glasses.
- 9: Supervision teacher, stocky build and round face, rectangular black glasses, dark combed-back hair, black polo, clean-shaven, neutral closed-mouth expression.

## Footer banner — footer-banner-generated.png
Built-in ImageGen, referencing the supplied full landing-page design. Generate only the bottom CTA banner's photographic background: deep royal-purple and violet study setting, white ceramic pencil cup with purple/gold pencils and upright notebooks confined to the left 18%; cream/purple books with gold trim and gold graduation cap confined to right 18%; subtle plant at far right. Wide 3:1 panorama with central 64% clean dark-purple negative space for live HTML Arabic copy and green registration button. Realistic polished advertising photography. No text, logos, numbers, buttons, UI, or border.
