import { notFound } from "next/navigation";
import ArtistGalleryPage from "@/components/artist-gallery-page";
import { getArtistBySlug, getAllArtists } from "@/lib/artists-data";

interface ArtistPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const artists = getAllArtists();
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const artist = getArtistBySlug(params.slug);

  if (!artist) {
    return {
      title: "Artist Not Found | Pain Game Club",
    };
  }

  return {
    title: `${artist.name} | Pain Game Club`,
    description: artist.description,
  };
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist = getArtistBySlug(params.slug);

  if (!artist) {
    notFound();
  }

  return <ArtistGalleryPage artist={artist} />;
}
