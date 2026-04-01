import tattooUpclose from "@/components/assets/tattoo-upclose.jpg";
import tattooLights from "@/components/assets/tattoo-lights.jpg";

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface Artist {
  id: number;
  slug: string;
  name: string;
  specialization: string;
  tags: string[];
  description: string;
  bio: string;
  image: any;
  galleryImages: any[];
  reviews: Review[];
  instagram?: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: "alex-rivera",
    name: "Alex Rivera",
    specialization: "Black & Grey Realism",
    tags: ["Realism", "Portraits", "Black & Grey"],
    description:
      "Specializing in black and grey realism with over 8 years of experience. Known for intricate portrait work and detailed shading techniques.",
    bio: "My journey in tattooing began with a deep fascination for photorealistic art. Every piece I create tells a story, capturing not just the image but the emotion behind it. I believe that black and grey realism allows for the most intimate connection between the art and the person wearing it. Each tattoo is a collaboration between my technical skills and the client's personal narrative.",
    image: tattooUpclose,
    galleryImages: [
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
    ],
    instagram: "@alex.rivera.ink",
    reviews: [
      {
        name: "Laura M.",
        text: "Alex did an incredible portrait of my grandmother. The detail is unreal — people think it's a photo. Absolutely recommend!",
        rating: 5,
      },
      {
        name: "Tomas K.",
        text: "Professional from start to finish. The shading work is next level.",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    slug: "maya-chen",
    name: "Maya Chen",
    specialization: "Japanese & Neo-Traditional",
    tags: ["Japanese", "Neo-Traditional", "Color"],
    description:
      "Traditional Japanese and neo-traditional artist. Expert in bold lines, vibrant colors, and mythological creature designs.",
    bio: "Growing up surrounded by Asian culture, I developed a profound respect for traditional Japanese tattooing. My work honors these ancient techniques while incorporating modern elements. Every dragon, koi, and cherry blossom I ink carries centuries of symbolism and meaning. I strive to create pieces that are both visually stunning and spiritually significant.",
    image: tattooUpclose,
    galleryImages: [
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
    ],
    instagram: "@maya.chen.tattoo",
    reviews: [
      {
        name: "Andrius V.",
        text: "Maya's Japanese sleeve is a masterpiece. Bold, vibrant, and perfectly composed. Can't wait for the next session!",
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    slug: "marcus-johnson",
    name: "Marcus Johnson",
    specialization: "Fine Line & Minimalist",
    tags: ["Fine Line", "Minimalist", "Geometric"],
    description:
      "Fine line and minimalist tattoo specialist. Creates delicate, precise designs with a focus on geometric patterns and nature motifs.",
    bio: "Less is more - this philosophy drives everything I create. Fine line tattooing requires incredible precision and patience, but the results speak for themselves. I find beauty in simplicity, whether it's a delicate botanical piece or a complex geometric pattern. My goal is to create tattoos that age gracefully and maintain their elegance over time.",
    image: tattooUpclose,
    galleryImages: [
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
    ],
    instagram: "@marcus.fineline",
    reviews: [
      {
        name: "Ieva S.",
        text: "The most delicate, precise work I've ever seen. My tiny botanical piece is absolutely perfect.",
        rating: 5,
      },
      {
        name: "Matas R.",
        text: "Marcus nailed the geometric design I wanted. Clean lines, exactly as discussed.",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    slug: "sofia-andersson",
    name: "Sofia Andersson",
    specialization: "Watercolor & Abstract",
    tags: ["Watercolor", "Abstract", "Color"],
    description:
      "Watercolor and abstract style expert. Brings paintings to life on skin with flowing colors and artistic brush stroke effects.",
    bio: "My background in fine arts heavily influences my approach to tattooing. I see skin as a canvas for creating flowing, organic masterpieces. Watercolor techniques in tattooing require a deep understanding of color theory and composition. Each piece I create is unique, with colors that blend and flow like paint on canvas.",
    image: tattooUpclose,
    galleryImages: [
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
    ],
    instagram: "@sofia.watercolor",
    reviews: [
      {
        name: "Greta J.",
        text: "Sofia's watercolor style is unlike anything I've seen. The colors are so vibrant and natural. Love my piece!",
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    slug: "diego-martinez",
    name: "Diego Martinez",
    specialization: "Chicano & Lettering",
    tags: ["Chicano", "Lettering", "Script", "Portraits"],
    description:
      "Chicano and lettering artist with 10+ years experience. Specializes in script work, portraits, and cultural heritage pieces.",
    bio: "Tattooing is about preserving culture and telling stories. My Chicano-style work pays homage to my heritage while creating powerful visual narratives. From intricate script work to detailed portraits, every piece connects the wearer to their roots and identity. I take pride in keeping these artistic traditions alive through my work.",
    image: tattooUpclose,
    galleryImages: [
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
    ],
    instagram: "@diego.chicano.ink",
    reviews: [
      {
        name: "Karolis B.",
        text: "Diego's lettering work is flawless. The script flows beautifully. True craftsman.",
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    slug: "emma-thompson",
    name: "Emma Thompson",
    specialization: "Botanical & Floral",
    tags: ["Botanical", "Floral", "Fine Line", "Nature"],
    description:
      "Botanical and floral design specialist. Creates stunning nature-inspired pieces with incredible attention to organic detail.",
    bio: "Nature has always been my greatest inspiration. I study botanical illustrations, spend time in gardens, and observe the intricate details of plant life. My tattoos capture the delicate beauty of flowers, leaves, and vines with scientific accuracy and artistic flair. Each botanical piece is researched and designed to reflect the natural world's perfection.",
    image: tattooUpclose,
    galleryImages: [
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
    ],
    instagram: "@emma.botanical",
    reviews: [
      {
        name: "Simona L.",
        text: "Emma created the most beautiful peony sleeve for me. Every petal looks real. She truly understands botanicals.",
        rating: 5,
      },
      {
        name: "Justina P.",
        text: "Delicate, feminine, and absolutely gorgeous work. Highly recommend for floral pieces.",
        rating: 5,
      },
    ],
  },
  {
    id: 7,
    slug: "kai-nakamura",
    name: "Kai Nakamura",
    specialization: "Contemporary & Surreal",
    tags: ["Contemporary", "Surreal", "Abstract", "Modern"],
    description:
      "Contemporary and surreal tattoo artist. Blends modern art techniques with traditional tattooing for unique, eye-catching designs.",
    bio: "I push the boundaries of what's possible in tattooing. My work combines surreal imagery with contemporary art movements, creating pieces that challenge perception and spark conversation. Each tattoo is an exploration of creativity, blending unexpected elements to create something entirely new and thought-provoking.",
    image: tattooUpclose,
    galleryImages: [
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
    ],
    instagram: "@kai.surreal",
    reviews: [
      {
        name: "Paulius D.",
        text: "Kai created something I couldn't even imagine. Truly an artist who thinks outside the box.",
        rating: 5,
      },
    ],
  },
  {
    id: 8,
    slug: "isabella-santos",
    name: "Isabella Santos",
    specialization: "Ornamental & Mandala",
    tags: ["Ornamental", "Mandala", "Geometric", "Dotwork"],
    description:
      "Ornamental and mandala expert. Creates intricate, symmetrical designs that flow beautifully with body contours and movement.",
    bio: "Sacred geometry and ornamental patterns have deep spiritual significance. My mandalas and ornamental pieces are more than decoration - they're meditative art forms that promote balance and harmony. I spend hours perfecting each symmetrical element, ensuring that every line flows naturally with the body's curves and movements.",
    image: tattooUpclose,
    galleryImages: [
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
      tattooLights,
      tattooUpclose,
    ],
    instagram: "@isabella.mandala",
    reviews: [
      {
        name: "Egle T.",
        text: "The symmetry is absolutely perfect. Isabella has an incredible eye for detail. My mandala is a work of art.",
        rating: 5,
      },
    ],
  },
];

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  artistName: string;
  tattooStyle: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Laura M.",
    text: "Alex did an incredible portrait of my grandmother. The detail is unreal — people think it's a photo. The whole experience from consultation to the final session was professional and comfortable.",
    rating: 5,
    artistName: "Alex Rivera",
    tattooStyle: "Portrait Realism",
  },
  {
    name: "Andrius V.",
    text: "Maya's Japanese sleeve is a masterpiece. Bold, vibrant, and perfectly composed. The studio atmosphere is amazing — clean, welcoming, and they really make you feel at ease.",
    rating: 5,
    artistName: "Maya Chen",
    tattooStyle: "Japanese Sleeve",
  },
  {
    name: "Simona L.",
    text: "Emma created the most beautiful peony sleeve for me. Every petal looks real. She truly understands botanicals. I've been to many studios and PGC is by far the best in Vilnius.",
    rating: 5,
    artistName: "Emma Thompson",
    tattooStyle: "Botanical Floral",
  },
  {
    name: "Matas R.",
    text: "Marcus nailed the geometric design I wanted. Clean lines, exactly as discussed. The consultation process was thorough — he really took time to understand my vision.",
    rating: 5,
    artistName: "Marcus Johnson",
    tattooStyle: "Geometric Minimalist",
  },
  {
    name: "Greta J.",
    text: "Sofia's watercolor style is unlike anything I've seen. The colors are so vibrant and natural. The healing was smooth thanks to their detailed aftercare instructions.",
    rating: 5,
    artistName: "Sofia Andersson",
    tattooStyle: "Watercolor",
  },
  {
    name: "Egle T.",
    text: "The symmetry is absolutely perfect. Isabella has an incredible eye for detail. My mandala is a work of art. Can't recommend Pain Game Club enough!",
    rating: 5,
    artistName: "Isabella Santos",
    tattooStyle: "Ornamental Mandala",
  },
];

export function getAllArtists(): Artist[] {
  return artists;
}

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function getArtistById(id: number): Artist | undefined {
  return artists.find((artist) => artist.id === id);
}
