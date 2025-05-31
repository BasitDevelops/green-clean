const AboutSection = () => {
  return (
    <section
      className="z-50 w-full bg-[#2c2a2c] py-4"
      aria-labelledby="about-heading"
    >
      <div className="flex justify-center">
        <address
          style={{
            clipPath: "polygon(100% 20%, 100% 80%, 50% 100%, 0 80%, 0% 20%)",
          }}
          className="w-[225px] rounded-b-2xl bg-[#a0cc52] px-2 py-4 not-italic md:w-[525px]"
        >
          <span className="flex justify-center font-semibold md:text-3xl">
            470-727-5797
          </span>
        </address>
      </div>

      <article className="wrapper flex justify-between gap-4 px-4 py-10 text-white md:gap-8 md:py-20 md:text-3xl">
        <div className="space-y-2" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">
            About Green & Clean Services
          </h2>
          <p>KAI TRUEX & CHARLIE BULLMAN</p>
          <p>Mowing, pressure washing, and weed pulling.</p>
        </div>
        <div>
          <p>Free estimate, just give us a call</p>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
