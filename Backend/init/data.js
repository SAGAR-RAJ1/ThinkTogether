const sampleIdea = [
    {
      title: "Idea: Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach. This cottage emphasizes ultimate relaxation with its tranquil seaside setting.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers! This loft offers a vibrant cultural immersion with easy access to city life.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge. This retreat focuses on sustainability and reconnecting with nature.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards. This villa offers a rich cultural experience amidst historic surroundings.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise. This getaway promotes eco-friendly living in harmony with the forest.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation. It combines luxury with stunning oceanfront views for a perfect escape.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts. It offers a peaceful retreat surrounded by natural beauty.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment. This penthouse highlights modern elegance and sophisticated urban lifestyle.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps. It offers unmatched convenience for ski enthusiasts and breathtaking mountain views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close. This lodge offers an immersive wildlife adventure with luxurious comfort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district. It offers a unique blend of historic charm and modern amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience. This retreat promises unparalleled privacy and luxury in a tropical setting.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof. It offers a cozy and authentic countryside experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston. It combines historic architecture with modern comfort for a unique stay.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool. It offers a tranquil tropical escape with luxurious amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies. It provides a serene retreat with stunning natural scenery.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach. It offers a chic and historic ambiance with modern comforts.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket. This villa emphasizes luxury and relaxation in an exotic setting.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area. This castle stay offers a majestic cultural and historical experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool. It combines extravagant comfort with an exotic desert landscape.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana. It offers a peaceful retreat emphasizing rustic charm and simplicity.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island. This villa highlights Mediterranean luxury and serene ocean views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers. This retreat prioritizes sustainability and environmental consciousness.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden. It offers a cozy stay with rich local heritage.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment. It offers convenience and a sleek urban lifestyle experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire. It offers a peaceful retreat with beautiful natural surroundings.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean. This villa offers exclusive privacy and tropical elegance.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort. It combines alpine luxury with easy mountain access.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      title: "Idea: Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind. This house offers a serene and private coastal retreat.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    },
  ];
  
  module.exports = { data: sampleIdea };