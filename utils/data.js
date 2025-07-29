export const destinations = [
    {
        id: 1,
        name: "New York",
        country: "United States",
        properties: 1423,
        imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&auto=format&fit=crop&q=60",
        description: "Experience the vibrant atmosphere of the city that never sleeps.",
        category: "Urban",
        urlSlug: "new-york"
    },
    {
        id: 2,
        name: "Paris",
        country: "France",
        properties: 967,
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60",
        description: "Discover the city of love with its iconic landmarks and rich culture.",
        category: "Urban"
    },
    {
        id: 3,
        name: "London",
        country: "United Kingdom",
        properties: 1218,
        imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60",
        description: "Explore the historic capital with its royal heritage and modern attractions.",
        category: "Urban"
    },
    {
        id: 4,
        name: "Tokyo",
        country: "Japan",
        properties: 891,
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60",
        description: "Immerse yourself in the blend of tradition and cutting-edge technology.",
        category: "Urban"
    },
    {
        id: 5,
        name: "Rome",
        country: "Italy",
        properties: 753,
        imageUrl: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=500&auto=format&fit=crop&q=60",
        description: "Step back in time and enjoy Italian cuisine in the eternal city.",
        category: "Historic"
    },
    {
        id: 6,
        name: "Sydney",
        country: "Australia",
        properties: 621,
        imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&auto=format&fit=crop&q=60",
        description: "Enjoy the beautiful harbors, beaches, and iconic opera house.",
        category: "Coastal"
    },
    {
        id: 7,
        name: "Bali",
        country: "Indonesia",
        properties: 529,
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60",
        description: "Relax on tropical beaches and experience rich cultural traditions.",
        category: "Beach"
    },
    {
        id: 8,
        name: "Santorini",
        country: "Greece",
        properties: 415,
        imageUrl: "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=500&auto=format&fit=crop&q=60",
        description: "White-washed buildings, blue domes, and stunning sunset views.",
        category: "Island"
    },
    {
        id: 9,
        name: "Swiss Alps",
        country: "Switzerland",
        properties: 382,
        imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&auto=format&fit=crop&q=60",
        description: "Experience breathtaking mountain landscapes and charming villages.",
        category: "Mountain"
    },
    {
        id: 10,
        name: "Barcelona",
        country: "Spain",
        properties: 678,
        imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&auto=format&fit=crop&q=60",
        description: "Enjoy the unique architecture, beaches, and vibrant atmosphere.",
        category: "Urban"
    },
    {
        id: 11,
        name: "Kyoto",
        country: "Japan",
        properties: 325,
        imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&auto=format&fit=crop&q=60",
        description: "Ancient temples, traditional gardens, and authentic Japanese culture.",
        category: "Historic"
    },
    {
        id: 12,
        name: "Serengeti",
        country: "Tanzania",
        properties: 106,
        imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60",
        description: "Safari adventures in one of Africa's most famous national parks.",
        category: "Wildlife"
    }
];
export const properties = [
    {
      id: 1,
      name: "Arunachala Heritage Residency",
      type: "Guesthouse",
      location: "Near Arunachaleswarar Temple",
      rating: 9.1,
      reviews: 320,
      price: 850,
      imageUrl: "https://source.unsplash.com/featured/?indian-temple",
      featured: true,
      distanceFromCenter: "0.3 km",
      rooms: [
        {
          id: 1,
          roomNo: 201,
          name: "Temple View Room",
          type: "Deluxe",
          beds: 1,
          maxGuests: 2,
          price: 1200,
          imageUrl: "https://source.unsplash.com/featured/?hotel-room-india",
          amenities: ["WiFi", "Temple View", "Air Conditioning"],
          availability: true,
          bookings: []
        },
        {
          id: 2,
          roomNo: 202,
          name: "Standard Room",
          type: "Standard",
          beds: 1,
          maxGuests: 2,
          price: 900,
          imageUrl: "https://source.unsplash.com/featured/?indian-room",
          amenities: ["WiFi", "Fan", "Hot Water"],
          availability: true,
          bookings: []
        },
        {
          id: 3,
          roomNo: 203,
          name: "Family Suite",
          type: "Suite",
          beds: 2,
          maxGuests: 4,
          price: 1500,
          imageUrl: "https://source.unsplash.com/featured/?family-room-india",
          amenities: ["WiFi", "Kitchenette", "Air Conditioning"],
          availability: true,
          bookings: []
        }
      ]
    },
    {
      id: 2,
      name: "Girivalam Residency",
      type: "Lodge",
      location: "Girivalam Path",
      rating: 8.5,
      reviews: 190,
      price: 700,
      imageUrl: "https://source.unsplash.com/featured/?ashram-india",
      featured: true,
      distanceFromCenter: "1 km",
      rooms: [
        {
          id: 4,
          roomNo: 301,
          name: "Single Retreat Room",
          type: "Standard",
          beds: 1,
          maxGuests: 1,
          price: 500,
          imageUrl: "https://source.unsplash.com/featured/?meditation-room",
          amenities: ["Fan", "Attached Bathroom"],
          availability: true,
          bookings: []
        },
        {
          id: 5,
          roomNo: 302,
          name: "Double Room",
          type: "Standard",
          beds: 1,
          maxGuests: 2,
          price: 800,
          imageUrl: "https://source.unsplash.com/featured/?indian-hotel",
          amenities: ["Fan", "Hot Water"],
          availability: true,
          bookings: []
        },
        {
          id: 6,
          roomNo: 303,
          name: "Group Suite",
          type: "Suite",
          beds: 4,
          maxGuests: 6,
          price: 1800,
          imageUrl: "https://source.unsplash.com/featured/?spiritual-retreat",
          amenities: ["WiFi", "Kitchen Access", "Balcony"],
          availability: true,
          bookings: []
        }
      ]
    },
    {
      id: 3,
      name: "Annamalai Ashram Stay",
      type: "Ashram",
      location: "Ramana Nagar",
      rating: 9.6,
      reviews: 482,
      price: 600,
      imageUrl: "https://source.unsplash.com/featured/?ashram",
      featured: false,
      distanceFromCenter: "0.2 km",
      rooms: [
        {
          id: 7,
          roomNo: 401,
          name: "Meditation Room",
          type: "Single",
          beds: 1,
          maxGuests: 1,
          price: 400,
          imageUrl: "https://source.unsplash.com/featured/?peaceful-room",
          amenities: ["Fan", "Quiet Zone"],
          availability: true,
          bookings: []
        },
        {
          id: 8,
          roomNo: 402,
          name: "Twin Sharing Room",
          type: "Standard",
          beds: 2,
          maxGuests: 2,
          price: 600,
          imageUrl: "https://source.unsplash.com/featured/?simple-room-india",
          amenities: ["Fan", "WiFi"],
          availability: true,
          bookings: []
        },
        {
          id: 9,
          roomNo: 403,
          name: "Ashram Family Stay",
          type: "Suite",
          beds: 3,
          maxGuests: 5,
          price: 1300,
          imageUrl: "https://source.unsplash.com/featured/?indian-guesthouse",
          amenities: ["Kitchenette", "WiFi"],
          availability: true,
          bookings: []
        }
      ]
    },
    {
      id: 4,
      name: "Mountain View Inn",
      type: "Hotel",
      location: "Chengam Road",
      rating: 8.8,
      reviews: 212,
      price: 950,
      imageUrl: "https://source.unsplash.com/featured/?mountain-hotel",
      featured: false,
      distanceFromCenter: "2.5 km",
      rooms: [
        {
          id: 10,
          roomNo: 501,
          name: "Hill View Room",
          type: "Deluxe",
          beds: 1,
          maxGuests: 2,
          price: 1100,
          imageUrl: "https://source.unsplash.com/featured/?hill-room",
          amenities: ["WiFi", "Balcony", "Hot Water"],
          availability: true,
          bookings: []
        },
        {
          id: 11,
          roomNo: 502,
          name: "Budget Room",
          type: "Standard",
          beds: 1,
          maxGuests: 2,
          price: 750,
          imageUrl: "https://source.unsplash.com/featured/?basic-hotel-room",
          amenities: ["Fan", "Attached Bathroom"],
          availability: true,
          bookings: []
        },
        {
          id: 12,
          roomNo: 503,
          name: "Premium Suite",
          type: "Suite",
          beds: 2,
          maxGuests: 4,
          price: 1600,
          imageUrl: "https://source.unsplash.com/featured/?premium-room",
          amenities: ["AC", "WiFi", "Balcony", "Breakfast"],
          availability: true,
          bookings: []
        }
      ]
    },
    {
      id: 5,
      name: "Sri Ram Guest House",
      type: "Guesthouse",
      location: "Polur Road",
      rating: 8.2,
      reviews: 97,
      price: 500,
      imageUrl: "https://source.unsplash.com/featured/?indian-lodge",
      featured: false,
      distanceFromCenter: "3 km",
      rooms: [
        {
          id: 13,
          roomNo: 601,
          name: "Basic Room",
          type: "Standard",
          beds: 1,
          maxGuests: 2,
          price: 500,
          imageUrl: "https://source.unsplash.com/featured/?cheap-room",
          amenities: ["Fan", "Shared Bathroom"],
          availability: true,
          bookings: []
        },
        {
          id: 14,
          roomNo: 602,
          name: "Double Room",
          type: "Standard",
          beds: 2,
          maxGuests: 2,
          price: 600,
          imageUrl: "https://source.unsplash.com/featured/?hotel-room-india",
          amenities: ["Fan", "Attached Bathroom"],
          availability: true,
          bookings: []
        },
        {
          id: 15,
          roomNo: 603,
          name: "Small Suite",
          type: "Suite",
          beds: 2,
          maxGuests: 3,
          price: 900,
          imageUrl: "https://source.unsplash.com/featured/?small-hotel-room",
          amenities: ["WiFi", "Kitchenette", "Balcony"],
          availability: true,
          bookings: []
        }
      ]
    }
  ];
  