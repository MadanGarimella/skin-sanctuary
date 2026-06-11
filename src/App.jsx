import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Treatments = lazy(() => import("./pages/Treatments"));
const TreatmentDetail = lazy(() => import("./pages/TreatmentDetail"));
const Doctor = lazy(() => import("./pages/Doctor"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => (
  <div className="grid min-h-[50vh] place-items-center bg-light">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
