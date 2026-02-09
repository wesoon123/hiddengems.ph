/**
 * Sync places.js data to Supabase
 * 
 * Usage: npm run sync
 * 
 * Before running:
 * 1. Copy .env.example to .env
 * 2. Fill in your Supabase URL and anon key
 * 3. Create the 'places' table in Supabase (see schema below)
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const places = require('../api/data/places.js');

// Check for environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error('❌ Error: Missing Supabase credentials');
  console.error('');
  console.error('Please create a .env file with:');
  console.error('  SUPABASE_URL=https://your-project.supabase.co');
  console.error('  SUPABASE_ANON_KEY=your-anon-key');
  console.error('');
  console.error('Copy .env.example to .env and fill in your values.');
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function syncPlaces() {
  console.log('🔄 Starting sync to Supabase...');
  console.log(`📍 Found ${places.length} places to sync`);
  console.log('');

  try {
    // Delete existing data
    console.log('🗑️  Clearing existing data...');
    const { error: deleteError } = await supabase
      .from('places')
      .delete()
      .neq('id', '');
    
    if (deleteError) {
      throw new Error(`Delete failed: ${deleteError.message}`);
    }

    // Insert all places
    console.log('📤 Uploading places...');
    const { data, error: insertError } = await supabase
      .from('places')
      .insert(places.map(place => ({
        id: place.id,
        name: place.name,
        subtitle: place.subtitle,
        thumbnail: place.thumbnail,
        location_link: place.locationLink,
        hashtags: place.hashtags,
        categories: place.categories,
        description: place.description,
        images: place.images,
        youtube_embed: place.youtubeEmbed,
        accordions: place.accordions,
        restaurants: place.restaurants
      })));

    if (insertError) {
      throw new Error(`Insert failed: ${insertError.message}`);
    }

    console.log('');
    console.log('✅ Sync complete!');
    console.log(`📊 ${places.length} places uploaded to Supabase`);
    console.log('');
    console.log('🌐 Your live site will now show the updated data!');

  } catch (error) {
    console.error('');
    console.error('❌ Sync failed:', error.message);
    console.error('');
    console.error('Make sure:');
    console.error('1. Your .env file has correct credentials');
    console.error('2. The "places" table exists in Supabase');
    console.error('3. Row Level Security allows inserts');
    process.exit(1);
  }
}

syncPlaces();
