---
description: Upload images to Supabase Storage and use URLs in places.js
---

## Supabase Image & Data Workflow

### Step 1: Upload Images to Supabase Storage
1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → Your Project
2. Navigate to **Storage** → `hidden-places` bucket
3. Upload destination photos (drag & drop or click upload)

### Step 2: Get Image URLs
// turbo
1. Click the uploaded image → **Get URL** or **Copy URL**
2. The URL format is: `https://zxslgsigjobqhoschyor.supabase.co/storage/v1/object/public/hidden-places/FILENAME`

### Step 3: Update places.js
1. Open `api/data/places.js`
2. Replace Unsplash placeholder URLs with Supabase Storage URLs
3. Save the file

### Step 4: Sync & Deploy
// turbo-all
1. Run `npm run sync` to update Supabase database
2. Run `git add -A`
3. Run `git commit -m "Update images to Supabase Storage"`
4. Run `git push`