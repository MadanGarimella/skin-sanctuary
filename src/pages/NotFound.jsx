import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const NotFound = () => {
  return (
    <section className="section-padding bg-light">
      <SEO title="Page Not Found" description="The requested Skin Scanctuary page was not found." />
      <div className="container-custom text-center max-w-3xl">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Page Not Found
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
          This page is not available
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          The page may have moved, but you can continue exploring the clinic from the home page.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-secondary"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
