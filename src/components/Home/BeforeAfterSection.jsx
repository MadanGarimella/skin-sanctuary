const BeforeAfterSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Real Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {[1,2,3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={`/images/results/result-${item}.jpg`}
                alt=""
                className="transition duration-700 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;