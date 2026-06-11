import { Helmet } from "react-helmet-async";
import { clinic } from "../../config/clinic";

const SEO = ({ title, description, path = "/" }) => {
  const pageTitle = title ? `${title} | ${clinic.name}` : `${clinic.name} | Dermatology & Aesthetic Clinic`;
  const url = `https://skinscanctuary.com${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;

