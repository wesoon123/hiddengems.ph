// Places data for HiddenGemsPH API
// Using real Unsplash images and YouTube vlogs

const places = [
  {
    id: "daanbantayan",
    name: "Daanbantayan",
    subtitle: "Gateway to Malapascua Island",
    thumbnail: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Daanbantayan+Cebu",
    hashtags: ["#daanbantayan", "#malapascua", "#cebu", "#cebunorth", "#threshersharks"],
    categories: ["cebu", "beach", "diving", "island"],
    description: "Daanbantayan is a charming municipality located in the northern tip of Cebu Island, Philippines. Known as the gateway to Malapascua Island, it offers pristine beaches, crystal-clear waters, and vibrant marine life. The area is famous for thresher shark diving, making it a world-renowned destination for underwater enthusiasts. Beyond the sea, Daanbantayan boasts rich cultural heritage with colorful festivals, traditional cuisine, and warm hospitality that makes every visitor feel at home.",
    images: [
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/ebTUlVJ464I",
    accordions: {
      howToGetThere: "Fly into Mactan-Cebu International Airport, then take a taxi to Cebu North Bus Terminal. Board a bus to Maya Port (3-4 hours). From Maya Port, take a boat to Malapascua Island or explore Daanbantayan beaches. Private vans are also available for a more comfortable journey.",
      accommodation: "Choose from beachfront resorts, boutique hotels, and budget-friendly guesthouses. Many offer ocean views, private beach access, pools, and spa services. Homestays provide authentic local experiences. Book in advance during peak season.",
      placesToVisit: "Malapascua Island for thresher shark diving, Carnaza Island for white sand beaches, Gato Island Marine Sanctuary for snorkeling, Sts. Peter and Paul Church for history, and local festivals for cultural immersion."
    },
    restaurants: [
      {
        name: "Ging-Ging's Restaurant",
        rating: 4.7,
        reviews: 245,
        priceRange: "₱200–400",
        type: "Filipino Seafood",
        locationCode: "Malapascua Island",
        review: "Fresh seafood with stunning beachfront views. Must try the grilled squid!",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Angelina Restaurant",
        rating: 4.5,
        reviews: 178,
        priceRange: "₱250–500",
        type: "International Cuisine",
        locationCode: "Bounty Beach, Malapascua",
        review: "Great pizza and pasta with a relaxed island atmosphere.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "catmon",
    name: "Catmon",
    subtitle: "Hot Springs & Waterfalls Paradise",
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=600&fit=crop",
    locationLink: "https://maps.google.com/?q=Catmon+Cebu",
    hashtags: ["#catmon", "#esoyhotspring", "#mtkapayas", "#cebu", "#waterfalls"],
    categories: ["cebu", "waterfall", "adventure", "hotspring"],
    description: "Catmon is a hidden gem in Northern Cebu known for its natural hot springs, majestic waterfalls, and the towering Mt. Kapayas. This municipality offers a perfect escape from city life with its cool mountain climate and therapeutic hot spring pools. The town celebrates the Budbod Kabog Festival every February, showcasing traditional delicacies and cultural performances that reflect the rich heritage of the Cebuano people.",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/0bIRwBpBcZQ",
    accordions: {
      howToGetThere: "From Cebu City, take a bus from North Bus Terminal to Catmon (1.5-2 hours, ₱80-100). Alternatively, hire a private car or motorcycle (habal-habal) for flexibility in exploring the mountain areas and hot springs.",
      accommodation: "Stay at KUMS Vacation Beach House for beachfront luxury, Areca Palm Hut for eco-tourism, or local guesthouses for budget options. Mountain resorts near Mt. Kapayas offer cool climate stays.",
      placesToVisit: "Esoy Hot Spring for therapeutic soaking, Mt. Kapayas for hiking with panoramic views, Rañola Beach Resort for swimming, Bercede Bay Resort for family fun, and local waterfalls for nature adventures."
    },
    restaurants: [
      {
        name: "Vima Shore Restaurant",
        rating: 4.6,
        reviews: 156,
        priceRange: "₱150–350",
        type: "Filipino Cuisine",
        locationCode: "Catmon Beach Area",
        review: "Delicious local dishes with generous portions at reasonable prices.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "SeaSalt Cafe",
        rating: 4.4,
        reviews: 98,
        priceRange: "₱200–400",
        type: "Cafe & Grill",
        locationCode: "Catmon Town Proper",
        review: "Cozy cafe with excellent coffee and grilled seafood.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "bantayan",
    name: "Bantayan Island",
    subtitle: "Virgin Island Paradise",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=550&fit=crop",
    locationLink: "https://maps.google.com/?q=Bantayan+Island",
    hashtags: ["#bantayan", "#virginisland", "#sugarbeach", "#cebu", "#islandparadise"],
    categories: ["cebu", "island", "beach"],
    description: "Bantayan Island is a tropical paradise located off the northern coast of Cebu. Famous for its powdery white sand beaches, crystal-clear turquoise waters, and laid-back island vibe, it's a favorite escape for beach lovers and adventure seekers alike. The island is known for Virgin Island (a stunning sandbar), Sugar Beach, and Paradise Beach. Fresh seafood, especially the famous Bantayan fried chicken, is a must-try culinary experience.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/HsXxLgj5r1U",
    accordions: {
      howToGetThere: "From Cebu City, take a bus to Hagnaya Port (3-4 hours), then a ferry to Santa Fe, Bantayan (1 hour). Ferries run frequently. Alternatively, take a van from SM City Cebu to Hagnaya for faster travel.",
      accommodation: "Choose from beachfront resorts like Kota Beach Resort, budget hostels, or cozy cottages. Santa Fe has the most options. Book ahead during Holy Week and summer months when the island is packed.",
      placesToVisit: "Virgin Island for pristine sandbar, Sugar Beach for relaxation, Paradise Beach for swimming, Ogtong Cave for underground pools, and St. Peter and Paul Church for centuries-old history."
    },
    restaurants: [
      {
        name: "MJ Square",
        rating: 4.5,
        reviews: 320,
        priceRange: "₱150–350",
        type: "Filipino Restaurant",
        locationCode: "Santa Fe, Bantayan",
        review: "Famous for Bantayan fried chicken and local seafood dishes.",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=200&fit=crop"
      },
      {
        name: "Cou Cou Bar & Restaurant",
        rating: 4.6,
        reviews: 215,
        priceRange: "₱200–450",
        type: "International",
        locationCode: "Santa Fe Beach Area",
        review: "Perfect sunset spot with cocktails and fusion cuisine.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "oslob",
    name: "Oslob",
    subtitle: "Whale Shark Capital of the Philippines",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Oslob+Cebu",
    hashtags: ["#oslob", "#whaleshark", "#cebu", "#tumalog", "#butanding"],
    categories: ["cebu", "diving", "waterfall", "adventure"],
    description: "Oslob is world-famous for its whale shark (butanding) watching experience, where visitors can swim alongside these gentle giants of the ocean. Beyond the whale sharks, Oslob offers the stunning Tumalog Falls, historic Spanish-era ruins, and the beautiful Sumilon Island with its shifting sandbar. The town is a must-visit destination for anyone exploring Southern Cebu.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/NuQFLAfPvkw",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Oslob (3-4 hours, ₱150-180). The whale shark area is at Tan-awan. For Tumalog Falls, hire a habal-habal from the main road.",
      accommodation: "Stay in Oslob town proper or nearby Sumilon Island for a luxury experience. Budget guesthouses and homestays are available. Many travelers do a day trip from Cebu City or Moalboal.",
      placesToVisit: "Whale shark watching at Tan-awan (early morning best), Tumalog Falls for majestic cascades, Sumilon Island for sandbar and snorkeling, Cuartel Ruins for history, and Boljoon Church nearby."
    },
    restaurants: [
      {
        name: "Brumini Restaurant",
        rating: 4.4,
        reviews: 187,
        priceRange: "₱150–350",
        type: "Filipino Seafood",
        locationCode: "Oslob Town",
        review: "Fresh seafood with local flavors. Great after whale shark watching.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Sumilon Bluewater Restaurant",
        rating: 4.7,
        reviews: 156,
        priceRange: "₱400–800",
        type: "Resort Dining",
        locationCode: "Sumilon Island",
        review: "Premium dining experience with island views and international menu.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "moalboal",
    name: "Moalboal",
    subtitle: "Sardine Run & Turtle Paradise",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Moalboal+Cebu",
    hashtags: ["#moalboal", "#sardinerun", "#pescanteisland", "#kawasan", "#freediving"],
    categories: ["cebu", "diving", "beach", "adventure"],
    description: "Moalboal is a world-renowned diving destination famous for its massive sardine run - millions of sardines forming mesmerizing tornado formations just off Panagsama Beach. The area is also home to sea turtles, vibrant coral reefs, and the nearby Kawasan Falls. Whether you're a diver, snorkeler, or canyoneer, Moalboal offers incredible underwater adventures and stunning natural attractions.",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/f1aEuHvntbQ",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Moalboal (2.5-3 hours, ₱120-150). Get off at the main junction and take a tricycle to Panagsama Beach where most dive shops are located.",
      accommodation: "Panagsama Beach has dive resorts, hostels, and budget rooms. White Beach offers more upscale resorts. Popular options include Quo Vadis, Savedra Beach Resort, and numerous backpacker hostels.",
      placesToVisit: "Panagsama Beach for sardine run snorkeling, Pescador Island for diving, Kawasan Falls for canyoneering (in Badian), White Beach for relaxation, and turtle viewing spots along the reef."
    },
    restaurants: [
      {
        name: "Shaka Bohol Branch",
        rating: 4.7,
        reviews: 432,
        priceRange: "₱200–450",
        type: "Healthy Cafe",
        locationCode: "Panagsama Beach",
        review: "Best smoothie bowls and acai in town. Perfect post-dive meal.",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=200&h=200&fit=crop"
      },
      {
        name: "The French Coffee Shop",
        rating: 4.6,
        reviews: 298,
        priceRange: "₱150–350",
        type: "Cafe & Bakery",
        locationCode: "Panagsama Beach",
        review: "Amazing croissants and French pastries in a cozy setting.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "kawasan",
    name: "Kawasan Falls",
    subtitle: "Turquoise Waterfall Paradise",
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Kawasan+Falls+Badian",
    hashtags: ["#kawasanfalls", "#canyoneering", "#badian", "#cebu", "#waterfalls"],
    categories: ["cebu", "waterfall", "adventure", "canyoneering"],
    description: "Kawasan Falls in Badian is one of the most beautiful waterfalls in the Philippines. Famous for its three-tiered turquoise blue cascades and refreshing natural pools, it's also the endpoint of the thrilling Kawasan Canyoneering adventure. The falls are surrounded by lush tropical forest, creating a serene paradise perfect for swimming, cliff jumping, and bamboo raft rides.",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/K2FUHP-b8qE",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Badian (3-4 hours). Get off at Matutinao and take a habal-habal to the falls (₱100). For canyoneering, start at Kanlaob River in Alegria.",
      accommodation: "Stay in Badian or nearby Moalboal for easy access. Kawasan Canyoneering Resort offers on-site lodging. Budget homestays and hostels are available in Badian town proper.",
      placesToVisit: "All three tiers of Kawasan Falls, canyoneering adventure starting from Alegria (4-5 hours), bamboo raft experience, cliff jumping spots, and nearby Lambug Beach for relaxation."
    },
    restaurants: [
      {
        name: "Kawasan Falls Restaurant",
        rating: 4.3,
        reviews: 267,
        priceRange: "₱100–250",
        type: "Filipino",
        locationCode: "Near Kawasan Falls",
        review: "Simple local dishes at affordable prices. Perfect after canyoneering.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "Badian Island Resort Restaurant",
        rating: 4.8,
        reviews: 189,
        priceRange: "₱500–1000",
        type: "Resort Fine Dining",
        locationCode: "Badian Island",
        review: "Upscale dining with stunning views and international cuisine.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "malapascua",
    name: "Malapascua Island",
    subtitle: "Thresher Shark Paradise",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Malapascua+Island",
    hashtags: ["#malapascua", "#threshershark", "#diving", "#cebu", "#bountybeach"],
    categories: ["cebu", "island", "diving", "beach"],
    description: "Malapascua Island is the only place in the world where you can see thresher sharks almost every day of the year. This small island off Northern Cebu has become a world-class diving destination, attracting divers from around the globe. Beyond sharks, Malapascua offers beautiful white sand beaches, colorful coral reefs, manta rays, and a laid-back island atmosphere perfect for relaxation.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/XPV1lXpVRlY",
    accordions: {
      howToGetThere: "From Cebu City, take a bus to Maya Port (4-5 hours from North Bus Terminal). From Maya, take a boat to Malapascua Island (30-45 minutes). Boats run throughout the day until around 5 PM.",
      accommodation: "Stay at Bounty Beach for white sand and sunset views. Options range from budget hostels to dive resorts like Thresher Shark Divers and Evolution Diving. Book ahead during peak diving season.",
      placesToVisit: "Monad Shoal for thresher shark diving (4:30 AM departure), Bounty Beach for relaxation, Gato Island for coral snorkeling, Kalanggaman Island day trip, and watch stunning sunsets from the beach."
    },
    restaurants: [
      {
        name: "Ging-Ging's Restaurant",
        rating: 4.7,
        reviews: 387,
        priceRange: "₱200–450",
        type: "Filipino Seafood",
        locationCode: "Malapascua Island",
        review: "Best seafood on the island. Fresh catch daily with amazing flavors.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Angelina Restaurant",
        rating: 4.5,
        reviews: 256,
        priceRange: "₱250–500",
        type: "Italian",
        locationCode: "Bounty Beach",
        review: "Authentic Italian pizza and pasta with a beach view.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "camotes",
    name: "Camotes Islands",
    subtitle: "The Lost Horizon of the South",
    thumbnail: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Camotes+Islands",
    hashtags: ["#camotes", "#losthorizon", "#santiagobay", "#cebu", "#islandhopping"],
    categories: ["cebu", "island", "beach", "adventure"],
    description: "Camotes Islands, known as 'The Lost Horizon of the South,' is a group of four islands offering pristine beaches, mysterious caves, stunning lake views, and untouched natural beauty. The islands provide a peaceful escape from tourist crowds with attractions like Santiago Bay, Lake Danao, Buho Rock, and the mystical Timubo Cave. It's perfect for travelers seeking adventure off the beaten path.",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/lB6jHGG-qPY",
    accordions: {
      howToGetThere: "From Cebu City, take a bus/taxi to Danao Port. Take a ferry to Consuelo Port or Poro Port in Camotes (2-3 hours). Ferries from Pier 1 in Cebu City are also available via Oceanjet or Super Shuttle Ferry.",
      accommodation: "Santiago Bay has the most resort options including Santiago Bay Garden Resort and Mangodlong Rock Resort. Tulang Island offers secluded cottages. Budget homestays are available throughout the islands.",
      placesToVisit: "Santiago Bay for white sand swimming, Lake Danao for kayaking, Timubo Cave for underground exploration, Buho Rock for cliff jumping, Tulang Diot for island hopping, and Paraiso Cave."
    },
    restaurants: [
      {
        name: "Santiago Bay Restaurant",
        rating: 4.4,
        reviews: 145,
        priceRange: "₱150–350",
        type: "Filipino Seafood",
        locationCode: "Santiago Bay, Camotes",
        review: "Fresh local seafood with beachfront dining experience.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Mangodlong Grill",
        rating: 4.3,
        reviews: 98,
        priceRange: "₱200–400",
        type: "Grill & Bar",
        locationCode: "Mangodlong, Camotes",
        review: "Great grilled dishes and cold drinks with ocean views.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "mactan",
    name: "Mactan Island",
    subtitle: "Historic Island & Resort Hub",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Mactan+Island+Cebu",
    hashtags: ["#mactan", "#lapulapu", "#cebu", "#beachresorts", "#mactanshrine"],
    categories: ["cebu", "island", "beach", "resort"],
    description: "Mactan Island is home to Cebu's international airport and some of the finest beach resorts in the Philippines. Rich in history as the site of the Battle of Mactan where Lapu-Lapu defeated Ferdinand Magellan, the island combines historical significance with world-class hospitality. Visit the Mactan Shrine, explore guitar factories, or simply relax in luxury resorts offering private beaches and water activities.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/k8mFPK0VHwk",
    accordions: {
      howToGetThere: "Mactan-Cebu International Airport is located on the island, making it the entry point for most visitors. From the airport, resorts offer shuttle services. Taxis and Grab are readily available.",
      accommodation: "Choose from luxury resorts like Shangri-La Mactan, Plantation Bay, Crimson Resort, and Movenpick. Mid-range options include JPark Island Resort and Costabella. Budget hotels are available in Lapu-Lapu City.",
      placesToVisit: "Mactan Shrine for history, Alegre Guitar Factory for handcrafted souvenirs, Olango Island for bird watching, resort beaches for water sports, and Maribago area for seafood restaurants."
    },
    restaurants: [
      {
        name: "Lantaw Native Restaurant",
        rating: 4.6,
        reviews: 876,
        priceRange: "₱300–600",
        type: "Filipino Seafood",
        locationCode: "Cordova, Mactan",
        review: "Floating restaurant with stunning sunset views and fresh seafood.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Cowrie Cove",
        rating: 4.8,
        reviews: 567,
        priceRange: "₱500–1200",
        type: "Fine Dining",
        locationCode: "Shangri-La Mactan",
        review: "Premium beachfront dining with international and local cuisine.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "simala",
    name: "Simala Shrine",
    subtitle: "Miraculous Castle Church",
    thumbnail: "https://images.unsplash.com/photo-1548625149-720134d51a3a?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Simala+Shrine+Sibonga",
    hashtags: ["#simala", "#miraculous", "#shrine", "#cebu", "#pilgrimage"],
    categories: ["cebu", "religious", "historical"],
    description: "The Monastery of the Holy Eucharist in Simala, Sibonga is one of the most visited pilgrimage sites in the Philippines. Known for miraculous healings and answered prayers, this stunning castle-like church attracts millions of devotees annually. The impressive architecture resembles a European castle, complete with ornate interiors, beautiful gardens, and a peaceful atmosphere perfect for prayer and reflection.",
    images: [
      "https://images.unsplash.com/photo-1548625149-720134d51a3a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/QPqNhsDf9v0",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Sibonga (1.5-2 hours). Get off at Simala junction and take a habal-habal up the mountain. Many travel agencies offer day tours from Cebu City.",
      accommodation: "Most visitors do a day trip from Cebu City. For overnight stays, find accommodations in Carcar City or Sibonga town. A few guesthouses are available near the shrine.",
      placesToVisit: "The main shrine and church, prayer rooms with miracle testimonials, beautiful gardens and grounds, gift shops for religious items, and enjoy the panoramic mountain views from the shrine."
    },
    restaurants: [
      {
        name: "Simala Canteen",
        rating: 4.0,
        reviews: 234,
        priceRange: "₱50–150",
        type: "Filipino Snacks",
        locationCode: "Simala Shrine Grounds",
        review: "Basic Filipino food and snacks for pilgrims. Affordable and convenient.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "Carcar Lechon Stalls",
        rating: 4.7,
        reviews: 567,
        priceRange: "₱150–400",
        type: "Roasted Pig",
        locationCode: "Carcar City (nearby)",
        review: "Famous Carcar lechon - a must-try when visiting Simala!",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "alegria",
    name: "Alegria",
    subtitle: "Canyoneering Adventure Capital",
    thumbnail: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Alegria+Cebu",
    hashtags: ["#alegria", "#canyoneering", "#kawasan", "#cebu", "#adventure"],
    categories: ["cebu", "adventure", "waterfall", "canyoneering"],
    description: "Alegria is the starting point of the famous Kawasan Canyoneering adventure - one of the most thrilling experiences in the Philippines. This small town offers the perfect combination of adrenaline-pumping activities including cliff jumping, river trekking, and swimming through canyons. The adventure ends at the stunning Kawasan Falls, making it a complete nature experience.",
    images: [
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/K2FUHP-b8qE",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Alegria (4-5 hours). For canyoneering, most tour operators pick up from Moalboal or Oslob. The adventure starts at Kanlaob River in Alegria.",
      accommodation: "Most travelers stay in Moalboal and do canyoneering as a day trip. Limited accommodations in Alegria include homestays and small guesthouses. Book canyoneering tours in advance.",
      placesToVisit: "Kawasan Canyoneering (4-5 hours of adventure), Cambais Falls for quieter waterfall experience, and the scenic mountain roads leading to Badian and Kawasan Falls."
    },
    restaurants: [
      {
        name: "Alegria Mountain Cafe",
        rating: 4.2,
        reviews: 87,
        priceRange: "₱100–250",
        type: "Filipino Cafe",
        locationCode: "Alegria Town",
        review: "Cozy mountain cafe with local dishes and great coffee.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
      },
      {
        name: "Cambais Falls Restaurant",
        rating: 4.0,
        reviews: 56,
        priceRange: "₱150–300",
        type: "Filipino",
        locationCode: "Cambais Falls Area",
        review: "Scenic dining by the waterfalls with fresh local cuisine.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "siargao",
    name: "Siargao Island",
    subtitle: "Surfing Capital of the Philippines",
    thumbnail: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Siargao+Island",
    hashtags: ["#siargao", "#cloud9", "#surfingcapital", "#islandlife", "#philippines"],
    categories: ["surfing", "island", "beach", "adventure"],
    description: "Siargao Island is the ultimate tropical paradise and surfing capital of the Philippines. This teardrop-shaped island is famous for the legendary Cloud 9 surf break, which attracts surfers from around the world. Beyond surfing, Siargao offers pristine beaches, stunning lagoons like Sugba Lagoon, mysterious rock pools at Magpupungko, and idyllic island-hopping destinations including Naked Island, Daku Island, and Guyam Island. The island has a laid-back vibe perfect for adventure and relaxation.",
    images: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/kFEVpR7GQb8",
    accordions: {
      howToGetThere: "Fly directly to Sayak Airport (IAO) from Manila, Cebu, or Clark. From the airport, take a tricycle or van to General Luna (45 minutes). Alternatively, fly to Surigao City and take a ferry to Dapa Port (2.5-3 hours).",
      accommodation: "General Luna is the main hub with hostels, boutique hotels, and resorts. Popular areas include Tourism Road and Cloud 9. Budget hostels start at ₱500/night; resorts range from ₱2,000-15,000/night.",
      placesToVisit: "Cloud 9 for world-class surfing, Magpupungko Rock Pools for tidal swimming, Sugba Lagoon for kayaking, island hopping to Naked, Daku, and Guyam Islands, Sohoton Cove for lagoons, and Maasin River for rope swings."
    },
    restaurants: [
      {
        name: "Shaka Siargao",
        rating: 4.8,
        reviews: 1250,
        priceRange: "₱200–500",
        type: "Healthy Cafe",
        locationCode: "Tourism Road, General Luna",
        review: "Best smoothie bowls and healthy food on the island. Perfect post-surf spot!",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=200&h=200&fit=crop"
      },
      {
        name: "Kermit Siargao",
        rating: 4.7,
        reviews: 980,
        priceRange: "₱300–600",
        type: "Italian Restaurant",
        locationCode: "Tourism Road, General Luna",
        review: "Authentic Italian pizza and pasta with stunning sunset views.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"
      },
      {
        name: "Harana Surf Resort Restaurant",
        rating: 4.6,
        reviews: 420,
        priceRange: "₱250–550",
        type: "Filipino-International",
        locationCode: "Cloud 9, General Luna",
        review: "Great Filipino dishes with a view of the famous Cloud 9 surf break.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "santafe",
    name: "Santa Fe, Bantayan",
    subtitle: "Beach Town Paradise",
    thumbnail: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Santa+Fe+Bantayan+Island",
    hashtags: ["#santafe", "#bantayan", "#sugarbeach", "#cebu", "#beachtown"],
    categories: ["cebu", "island", "beach"],
    description: "Santa Fe is the main tourist hub of Bantayan Island, known for its stunning white sand beaches, crystal-clear waters, and vibrant island atmosphere. This charming beach town offers the perfect blend of relaxation and adventure with beautiful resorts, fresh seafood restaurants, and easy access to nearby attractions like Virgin Island and Ogtong Cave. The town comes alive during sunset when beach bars light up and travelers gather to enjoy the famous Bantayan fried chicken.",
    images: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/HsXxLgj5r1U",
    accordions: {
      howToGetThere: "From Cebu City, take a bus to Hagnaya Port (3-4 hours). Board a ferry to Santa Fe Port (1 hour). Ferries run frequently from early morning until late afternoon. You can also take a van from SM City Cebu for faster travel.",
      accommodation: "Santa Fe has the widest range of accommodations on Bantayan. Choose from beachfront resorts like Kota Beach Resort, budget-friendly hostels, cozy cottages, and boutique hotels. Book ahead during Holy Week and summer peak season.",
      placesToVisit: "Sugar Beach for pristine swimming, Virgin Island day trip for sandbar experience, Ogtong Cave for underground pools, Paradise Beach for relaxation, local market for fresh seafood, and beachfront bars for sunset drinks."
    },
    restaurants: [
      {
        name: "MJ Square",
        rating: 4.6,
        reviews: 456,
        priceRange: "₱150–400",
        type: "Filipino Restaurant",
        locationCode: "Santa Fe Town Center",
        review: "Famous for Bantayan fried chicken - crispy, juicy, and legendary!",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=200&fit=crop"
      },
      {
        name: "Blue Ice Beach Bar",
        rating: 4.5,
        reviews: 312,
        priceRange: "₱200–450",
        type: "Beach Bar & Grill",
        locationCode: "Sugar Beach, Santa Fe",
        review: "Best sunset cocktails with live music and beachfront vibes.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=200&fit=crop"
      },
      {
        name: "Kota Beach Restaurant",
        rating: 4.7,
        reviews: 287,
        priceRange: "₱250–500",
        type: "Resort Dining",
        locationCode: "Kota Beach Resort, Santa Fe",
        review: "Excellent seafood and international dishes with ocean views.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "carmen",
    name: "Carmen, Cebu",
    subtitle: "Home of the Chocolate Hills of Cebu",
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Carmen+Cebu",
    hashtags: ["#carmen", "#cebu", "#chocolatehills", "#mountains", "#nature"],
    categories: ["cebu", "adventure", "mountains", "nature"],
    description: "Carmen is a mountainous municipality in the heart of Cebu, often called the 'Little Bohol' for its own version of the Chocolate Hills. This hidden gem offers breathtaking panoramic views, cool mountain climate, and lush green landscapes perfect for nature lovers and adventure seekers. The town is known for its agricultural heritage, producing vegetables and flowers that supply markets across Cebu. Visit for stunning viewpoints, peaceful hiking trails, and a refreshing escape from the tropical heat.",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/8ywQq9bLkGs",
    accordions: {
      howToGetThere: "From Cebu City, take a bus from North Bus Terminal heading to Danao or Carmen (1.5-2 hours). You can also rent a car or motorcycle for a scenic drive through the mountains. The road offers beautiful views of terraced farms and mountain landscapes.",
      accommodation: "Carmen has limited accommodation options - mostly homestays and small inns. For more choices, stay in nearby Danao City or Cebu City and do a day trip. Some eco-lodges offer mountain stays with stunning views.",
      placesToVisit: "Carmen Highlands for panoramic views, Chocolate Hills viewing deck, vegetable and flower farms, mountain trails for hiking, and the scenic road to Danao with its winding paths and beautiful overlooks."
    },
    restaurants: [
      {
        name: "Carmen View Deck Eatery",
        rating: 4.3,
        reviews: 87,
        priceRange: "₱100–250",
        type: "Filipino Cuisine",
        locationCode: "Carmen Town Center",
        review: "Simple local dishes with amazing mountain views. Try the fresh vegetables!",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "Highland Garden Cafe",
        rating: 4.4,
        reviews: 65,
        priceRange: "₱150–300",
        type: "Cafe & Garden",
        locationCode: "Carmen Highlands",
        review: "Peaceful cafe surrounded by flower gardens. Great coffee and pastries.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "mtmago",
    name: "Mt. Mago",
    subtitle: "Panoramic Peak in Carmen, Cebu",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Mt+Mago+Carmen+Cebu",
    hashtags: ["#mtmago", "#carmen", "#cebu", "#hiking", "#mountains", "#sunrise"],
    categories: ["cebu", "adventure", "mountains", "hiking"],
    description: "Mt. Mago is a stunning mountain peak located in Carmen, Cebu, offering breathtaking 360-degree panoramic views of the surrounding landscapes. This hidden gem is perfect for sunrise hikers and adventure seekers looking for an off-the-beaten-path experience. The trail takes you through lush vegetation and rocky terrain, rewarding you with spectacular views of Cebu's mountain ranges, nearby towns, and on clear days, even glimpses of the sea. It's a must-visit destination for nature lovers and photographers seeking that perfect golden hour shot.",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/ulvLrnKi4Ic",
    accordions: {
      howToGetThere: "From Cebu City, take a bus from North Bus Terminal heading to Carmen (approximately 2 hours). From Carmen town proper, you can hire a habal-habal (motorcycle) to take you to the jump-off point. The hike to the summit takes about 1-2 hours depending on your pace. Best to start early for sunrise viewing.",
      accommodation: "There are no accommodations at Mt. Mago itself, so most hikers do a day trip. You can stay in Carmen town or nearby Danao City. For a more comfortable option, stay in Cebu City and leave very early in the morning to catch the sunrise.",
      placesToVisit: "Mt. Mago summit for panoramic views, Carmen Highlands, nearby vegetable farms, the scenic drive through mountain roads, and the famous Chocolate Hills-like formations of Carmen. Combine your trip with other Carmen attractions for a full day adventure."
    },
    restaurants: [
      {
        name: "Carmen Mountain View Eatery",
        rating: 4.2,
        reviews: 56,
        priceRange: "₱80–200",
        type: "Filipino Cuisine",
        locationCode: "Carmen Town Proper",
        review: "Simple local dishes perfect after a morning hike. Try the hot soup and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "Sunrise Snack House",
        rating: 4.0,
        reviews: 38,
        priceRange: "₱50–150",
        type: "Snacks & Drinks",
        locationCode: "Near Mt. Mago Jump-off",
        review: "Great for quick bites and refreshments before or after your hike. Hot coffee is a must!",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "elnido",
    name: "El Nido, Palawan",
    subtitle: "Island Paradise with Stunning Lagoons",
    thumbnail: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=El+Nido+Palawan",
    hashtags: ["#elnido", "#palawan", "#biglagoon", "#nacpanbeach", "#islandhopping", "#paradise"],
    categories: ["palawan", "island", "beach", "diving", "lagoon"],
    description: "El Nido is the crown jewel of Palawan, famous for its dramatic limestone cliffs, crystal-clear lagoons, and pristine white sand beaches. This tropical paradise offers world-class island hopping tours featuring the iconic Big and Small Lagoons, Secret Lagoon, Seven Commandos Beach, and the stunning Nacpan Beach. Whether you're kayaking through emerald waters, snorkeling in vibrant coral gardens, or simply relaxing on powdery sand, El Nido delivers an unforgettable Philippine island experience.",
    images: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/PGKmexNTHNE",
    accordions: {
      howToGetThere: "Fly to Puerto Princesa Airport then take a 5-6 hour van ride to El Nido, or fly directly to El Nido's Lio Airport. From Manila, several airlines offer direct flights to El Nido. Ferries are also available from Coron.",
      accommodation: "El Nido offers accommodations for all budgets - from beachfront luxury resorts like Pangulasian Island and El Nido Resorts to budget-friendly hostels in town. Book in advance during peak season (December-May).",
      placesToVisit: "Big Lagoon, Small Lagoon, Secret Lagoon, Nacpan Beach (twin beach), Seven Commandos Beach, Shimizu Island for snorkeling, Snake Island sandbar, Hidden Beach, and Matinloc Shrine."
    },
    restaurants: [
      {
        name: "Trattoria Altrove",
        rating: 4.8,
        reviews: 892,
        priceRange: "₱400–800",
        type: "Italian Cuisine",
        locationCode: "El Nido Town",
        review: "Best Italian pizza and pasta in Palawan! Wood-fired oven and authentic recipes.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"
      },
      {
        name: "Happiness Beach Bar",
        rating: 4.6,
        reviews: 654,
        priceRange: "₱250–500",
        type: "Beach Bar & Grill",
        locationCode: "Corong-Corong Beach",
        review: "Sunset cocktails and fresh grilled seafood right on the beach. Perfect vibes!",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "coron",
    name: "Coron, Palawan",
    subtitle: "Shipwreck Diving Capital of the Philippines",
    thumbnail: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Coron+Palawan",
    hashtags: ["#coron", "#palawan", "#kayanganlake", "#twinlagoon", "#shipwreck", "#diving"],
    categories: ["palawan", "island", "diving", "lagoon", "adventure"],
    description: "Coron is a world-renowned destination famous for WWII Japanese shipwreck diving and stunning natural lagoons. Kayangan Lake, often called the cleanest lake in the Philippines, features crystal-clear waters surrounded by dramatic limestone formations. Twin Lagoon amazes visitors with its unique warm and cool water layers, while Barracuda Lake offers an otherworldly thermocline experience. Whether you're diving shipwrecks, snorkeling coral gardens, or climbing Mount Tapyas for panoramic sunset views, Coron delivers adventure at every turn.",
    images: [
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/3ueVTf-CPTU",
    accordions: {
      howToGetThere: "Fly to Francisco B. Reyes Airport (Busuanga Airport) from Manila or Cebu. The airport is about 30-45 minutes from Coron town. Ferries also connect Coron to El Nido and Manila.",
      accommodation: "Coron offers diverse lodging from budget hostels to luxury overwater bungalows at Two Seasons Coron. The town proper has many affordable options, while nearby islands offer exclusive resort experiences.",
      placesToVisit: "Kayangan Lake, Twin Lagoon, Barracuda Lake, Mt. Tapyas viewpoint (700+ steps), Siete Pecados Marine Park, Malcapuya Island, WWII shipwreck dive sites, Maquinit Hot Springs, and CYC Beach."
    },
    restaurants: [
      {
        name: "Lolo Nonoy's Food Station",
        rating: 4.7,
        reviews: 1243,
        priceRange: "₱200–400",
        type: "Filipino Seafood",
        locationCode: "Coron Town",
        review: "Famous for fresh seafood and local dishes. Their grilled seafood platter is a must!",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Santino's Grill",
        rating: 4.5,
        reviews: 876,
        priceRange: "₱300–600",
        type: "Steakhouse & Grill",
        locationCode: "Coron Town Center",
        review: "Best steaks in Coron with great cocktails. Rooftop seating with mountain views.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "puertoprincesa",
    name: "Puerto Princesa",
    subtitle: "Home of the Underground River",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Puerto+Princesa+Palawan",
    hashtags: ["#puertoprincesa", "#undergroundriver", "#palawan", "#unesco", "#hondabay"],
    categories: ["palawan", "adventure", "nature", "unesco"],
    description: "Puerto Princesa is the capital of Palawan and home to the famous Puerto Princesa Subterranean River National Park - a UNESCO World Heritage Site and one of the New7Wonders of Nature. This 8.2-kilometer underground river features stunning limestone cave formations as you paddle through darkness surrounded by stalactites and stalagmites. Beyond the Underground River, explore Honda Bay's islands, Ugong Rock adventures, Iwahig Firefly Watching, and the city's clean, green environment that earned its title as the 'City in a Forest.'",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/R0xvXKxNJ0w",
    accordions: {
      howToGetThere: "Fly directly to Puerto Princesa International Airport from Manila, Cebu, or other major cities. The airport is just 10 minutes from the city center. Many domestic airlines offer daily flights.",
      accommodation: "Puerto Princesa has excellent hotels and resorts ranging from budget to luxury. Sheridan Beach Resort and Astoria Palawan offer beachfront luxury, while the city center has many affordable options.",
      placesToVisit: "Puerto Princesa Underground River (book in advance!), Honda Bay island hopping, Ugong Rock zipline and spelunking, Iwahig Firefly Watching, Baker's Hill, Palawan Wildlife Rescue Center, and Immaculate Conception Cathedral."
    },
    restaurants: [
      {
        name: "Kinabuch Grill & Bar",
        rating: 4.6,
        reviews: 1567,
        priceRange: "₱250–500",
        type: "Filipino Grill",
        locationCode: "Rizal Avenue",
        review: "Famous for exotic dishes and grilled crocodile! A unique Palawan dining experience.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      },
      {
        name: "Ka Lui Restaurant",
        rating: 4.8,
        reviews: 2134,
        priceRange: "₱400–700",
        type: "Filipino Seafood",
        locationCode: "Rizal Avenue",
        review: "Iconic Palawan restaurant with fresh seafood set meals. Reserve ahead - always full!",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "elirock",
    name: "Eli Rock",
    subtitle: "Cliff Jumping Paradise in Boljoon, Cebu",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop",
    locationLink: "https://maps.google.com/?q=Eli+Rock+Boljoon+Cebu",
    hashtags: ["#elirock", "#boljoon", "#cebu", "#cliffjumping", "#hiddenbeach", "#adventure"],
    categories: ["cebu", "adventure", "beach", "cliff"],
    description: "Eli Rock is a hidden gem in Boljoon, Southern Cebu, famous for its dramatic cliff formations and exhilarating cliff jumping spots. This secluded paradise offers crystal-clear waters, natural rock pools, and stunning coastal views. Adventure seekers come for the adrenaline-pumping cliff jumps ranging from beginner-friendly heights to expert-level drops. The journey to Eli Rock is an adventure itself, taking you through scenic coastal roads and local fishing villages. Perfect for those seeking an off-the-beaten-path experience away from the crowds.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop"
    ],
    youtubeEmbed: "https://www.youtube.com/embed/PTjUUnE4-Io",
    accordions: {
      howToGetThere: "From Cebu City South Bus Terminal, take a bus to Boljoon (approximately 3-4 hours). From Boljoon town, hire a habal-habal to Eli Rock. The last stretch involves a short hike down to the rock formations. Best to go during low tide for safer cliff jumping.",
      accommodation: "Boljoon has limited lodging options. Most visitors do a day trip from Oslob or Moalboal. For overnight stays, check local homestays in Boljoon town or nearby Alcoy. Camping is possible near the area with proper preparation.",
      placesToVisit: "Eli Rock cliff jumping spots, the natural rock pools and formations, nearby Boljoon Church (one of Cebu's oldest), the scenic coastal views, and combine with a visit to Oslob whale sharks or Sumilon Island."
    },
    restaurants: [
      {
        name: "Boljoon Coastal Eatery",
        rating: 4.1,
        reviews: 42,
        priceRange: "₱80–200",
        type: "Filipino Seafood",
        locationCode: "Boljoon Town Proper",
        review: "Fresh catch of the day and simple local dishes. Perfect after an adventure at Eli Rock.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop"
      },
      {
        name: "Auntie's Carinderia",
        rating: 4.0,
        reviews: 28,
        priceRange: "₱50–150",
        type: "Local Eatery",
        locationCode: "Near Boljoon Church",
        review: "Homestyle cooking at affordable prices. Great for fueling up before the adventure.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop"
      }
    ]
  }
];

module.exports = places;
