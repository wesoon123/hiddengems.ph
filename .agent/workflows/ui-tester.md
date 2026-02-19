---
description: Test website UI for broken layouts, missing images, and bugs
---

## UI Tester Workflow

Use this workflow to scan and test the website for UI issues, broken elements, and potential bugs.

### Step 1: Ensure Dev Server is Running
// turbo
1. Run `taskkill /F /IM node.exe 2>$null; npm run dev` to start clean
2. Wait for `Server running at http://localhost:1234` message

### Step 2: Visual UI Check
1. Open the site using the browser tool at `http://localhost:1234`
2. Take a screenshot of the homepage
3. Scroll through all sections: Hero → Destinations → About → Featured Video → Footer
4. Check for:
   - ❌ Broken images (missing `src` or failed to load)
   - ❌ Layout shifts or overlapping elements
   - ❌ Missing text or empty sections
   - ❌ Broken buttons or links
   - ❌ **Card content clipping** — check if card text (name, subtitle, "Explore →" button) is cut off. This happens when thumbnail images have wide aspect ratios (e.g. YouTube 16:9 thumbnails) making the card too short for the overlay. Fix: ensure `<img>` in cards has `min-h-[280px]` class.

### Step 3: Destination Modal Test
1. Click on a destination card
2. Verify the modal opens properly
3. Check image carousel loads all images
4. Check YouTube embed loads
5. Check accordions (How to Get There, Accommodation, Places to Visit) expand/collapse
6. Check restaurant section displays correctly
7. Close the modal — verify it closes cleanly

### Step 4: Filter Test
1. Click each filter category (All, Cebu, Beach, Island, etc.)
2. Verify the correct destinations show/hide
3. Check for animation glitches during filtering

### Step 5: Responsive Test
1. Resize browser to mobile width (375px)
2. Check if layout adapts properly
3. Check hamburger menu works
4. Check modal is scrollable on mobile

### Step 6: Code Scan for Common Bugs
// turbo
1. Search codebase for empty `src=""` attributes (causes Parcel build errors)
2. Search for console errors in JavaScript
3. Check for unused event listeners (memory leaks)
4. Verify all Alpine.js `x-data` components are properly initialized
5. Check for missing `alt` attributes on images (accessibility)
6. **Check card images have `min-h-[280px]`** to prevent content clipping on wide thumbnails

### Step 7: Report
Generate a summary of all findings:
- ✅ What passed
- ❌ What failed (with screenshots if possible)
- 🔧 Suggested fixes for each issue

---

## Known Bugs & Fixes

| Bug | Cause | Fix | Date |
|-----|-------|-----|------|
| "Explore →" text cut off on Skip's Beach Resort card | Thumbnail is a YouTube `maxresdefault.jpg` (16:9 wide ratio). Card has `overflow-hidden` with absolutely-positioned overlay text, so short images clip the content. | Added `min-h-[280px]` to the card `<img>` class in `src/index.html` (line ~282) to guarantee enough vertical space for the overlay. | 2026-02-19 |
