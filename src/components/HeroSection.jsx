import logo from "@/assets/images/logo.jpeg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#a0cc52",
        backgroundImage: `repeating-linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 0,
          rgba(255, 255, 255, 0.15) 0.5px,
          transparent 10px,
          transparent 20px
        )`,
      }}
      className="relative -z-10 h-[50vh] w-full 2xl:h-[35vh]"
      aria-label="Hero banner"
    >
      <figure className="custom-range-bottom absolute -bottom-10 left-1/2 flex size-[300px] -translate-x-1/2 transform justify-center rounded-full bg-white sm:-bottom-16 md:-bottom-36 md:size-[400px]">
        <div className="relative size-[125px]">
          <Image
            src={logo}
            fill
            alt="Green & Clean Services logo"
            className="custom-range-mt mt-6"
          />
        </div>
      </figure>

      <header className="absolute bottom-0 z-50 w-full bg-white px-4 py-6">
        <h1 className="text-bold text-center text-3xl uppercase md:text-6xl">
          Green & Clean Services
        </h1>
      </header>
    </section>
  );
};

export default HeroSection;
