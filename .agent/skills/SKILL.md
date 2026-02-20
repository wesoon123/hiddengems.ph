---
name: HiddenGemsPH Project Skills
description: Complete skill set for managing the HiddenGemsPH travel destination website — adding content, syncing data, managing images, and deploying.
---

# HiddenGemsPH Project Skills

##  Tech Stack
- **Frontend:** HTML, Alpine.js, TailwindCSS v4, Splide.js (carousel)
- **Build Tool:** Parcel
- **Backend API:** Express.js (local dev on port 3001)
- **Database:** Supabase (PostgreSQL)
- **Image Hosting:** Supabase Storage
- **Deployment:** Vercel
- **Dev Server:** `npm run dev` → localhost:1234 (frontend) + localhost:3001 (API)

---

##  Skill 1: Adding a New Destination

### Steps:
1. **Research** the destination (web search for location, activities, nearby restaurants)
2. **Add entry** to `api/data/places.js` at the end of the array, before `];`
3. **Required fields:**
   ```javascript
   {
     id: "uniqueid",
     name: "Destination Name",
     subtitle: "Tagline with Location",
     thumbnail: "image_url",   
     locationLink: "google_maps_url",
     hashtags: ["#tag1", "#tag2"],
     categories: ["cebu", "beach"],  
     description: "Detailed description...",
     images: ["url1", "url2", "url3", "url4", "url5", "url6"],  
     youtubeEmbed: "https://www.youtube.com/embed/VIDEO_ID",
     accordions: {
       howToGetThere: "Travel directions...",
       accommodation: "Where to stay...",
       placesToVisit: "Nearby attractions..."
     },
     restaurants: [
       {
         name: "Restaurant Name",
         rating: 4.5,
         reviews: 100,
         priceRange: "₱100–300",
         type: "Filipino Seafood",
         locationCode: "Location",
         review: "Short review...",
         image: "image_url"  
       }
     ]
   }
   ```
4. **Sync to Supabase:** `npm run sync`
5. **Git commit & push**

### Available Categories:
`cebu`, `island`, `beach`, `diving`, `waterfall`, `adventure`, `surfing`, `sandbar`, `cliff`, `mountain`

### YouTube Embed Format:
- Input: `https://www.youtube.com/watch?v=VIDEO_ID`
- Convert to: `https://www.youtube.com/embed/VIDEO_ID`

---

##  Skill 2: Syncing Data to Supabase

### Command:
```bash
npm run sync
```

### What it does:
1. Reads all entries from `api/data/places.js`
2. Clears existing Supabase `places` table
3. Uploads all destinations to Supabase
4. Live site updates instantly (no redeploy needed)

### Config:
- Credentials stored in `.env` (never commit this file)
- Script location: `supabase/sync-to-supabase.js`

---

##  Skill 3: Managing Images

### Option A: Supabase Storage (Preferred for real photos)
- Upload photos to Supabase Storage dashboard
- Use bucket: `hidden-places`
- URL format: `https://zxslgsigjobqhoschyor.supabase.co/storage/v1/object/public/hidden-places/FOLDER/FILENAME`
- Public bucket for easy image access

### Option B: Unsplash (Placeholders)
- Use format: `https://images.unsplash.com/photo-ID?w=800&h=400&fit=crop`
- Good for quick prototyping, replace with real photos later

### Image Sizes:
| Usage | Dimensions | Format |
|-------|-----------|--------|
| Thumbnail | 400x500 | crop |
| Gallery | 800x400 | crop |
| Restaurant | 200x200 | crop |

---

##  Skill 4: Development & Deployment

### Start Development:
```bash
npm run dev
```
- Frontend: http://localhost:1234
- API: http://localhost:3001

### If ports are blocked:
```bash
taskkill /F /IM node.exe
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Deploy to Vercel:
- Push to GitHub → Vercel auto-deploys
```bash
git add -A
git commit -m "description"
git push
```

---

##  Skill 5: Code Quality & Debugging

### Common Issues:
| Issue | Fix |
|-------|-----|
| Port already in use | `taskkill /F /IM node.exe` then restart |
| Parcel empty src error | Never use `src=""` on iframe, use `src="#"` or `src="about:blank"` |
| Supabase sync fails | Check `.env` has valid credentials |
| Images not loading | Verify URL is accessible, check CORS |

### File Structure:
```
HiddenGemsPH/
├── src/
│   ├── index.html       ← Main HTML
│   ├── css/index.css    ← Styles
│   └── js/index.js      ← Alpine.js app logic
├── api/
│   ├── server.js        ← Express API server
│   ├── places.js        ← API route handler
│   └── data/places.js   ← All destination data
├── supabase/
│   ├── sync-to-supabase.js  ← Sync script
│   └── supabase-schema.sql  ← DB schema
├── .env                 ← Credentials (gitignored)
└── package.json
```

---

##  Skill 6: Content Workflow (End-to-End)

### Adding a new destination:
1. User provides: **destination name** + **YouTube link**
2. Research destination details (web search)
3. Gather/upload images (Cloudinary or direct URLs)
4. Add entry to `api/data/places.js`
5. Run `npm run sync` to update Supabase
6. Run `git add -A && git commit -m "message"` 
7. Run `git push` (may need manual push for auth)
8. Verify on localhost and live site
