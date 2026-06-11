const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Result Planning
          </span>
          <h2 className="mt-6 text-4xl font-bold text-dark">
            Before and After Journeys
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Actual outcomes vary by diagnosis, treatment choice, consistency, and skin biology. Consultation helps define realistic goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {["Acne correction", "Pigmentation care", "Hair restoration"].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="grid h-56 grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-dark">{item}</h3>
              <p className="mt-3 text-gray-600">Progress-focused documentation and follow-up support.</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
