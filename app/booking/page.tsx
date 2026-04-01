import type { Metadata } from "next";
import BookingForm from "@/components/booking-form";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Book a Consultation | Pain Game Club",
  description:
    "Book a free tattoo consultation at Pain Game Club in Vilnius. Tell us your idea and we'll match you with the perfect artist.",
};

export default function BookingPage() {
  return (
    <main className="text-pgc-white min-h-screen font-medium">
      <Navigation />
      <BookingForm />
      <Footer />
    </main>
  );
}
