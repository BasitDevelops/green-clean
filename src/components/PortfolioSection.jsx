"use client";
import { useRef } from "react";
import Image from "next/image";
import before_1 from "../assets/images/after_1.png";
import after_1 from "../assets/images/after_1.png";
import before_2 from "../assets/images/before_2.png";
import after_2 from "../assets/images/after_2.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/app/globals.css";

const PortfolioSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const projects = [
    {
      id: 1,
      beforeImg: before_1,
      afterImg: after_1,
    },
    {
      id: 2,
      beforeImg: before_2,
      afterImg: after_2,
    },
  ];

  return (
    <section
      className="wrapper"
      aria-label="Portfolio showcasing recent lawn mowing and cleaning works with before and after images"
    >
      <h2 className="mt-6 py-6 text-center text-2xl font-semibold uppercase md:mt-12 md:text-4xl">
        Our Recent Works
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onBeforeInit={(swiper) => {
          // Fix navigation refs not being available on first render
          // Assign them manually
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <article
              role="group"
              aria-label={`Project ${project.id} before and after images`}
              className="relative flex h-fit w-full flex-col justify-center p-4 md:h-[600px] md:flex-row md:py-8"
            >
              <div className="group relative top-0 h-[300px] w-full overflow-hidden border-b border-white sm:h-[400px] md:left-6 md:border-none">
                <Image
                  src={project.beforeImg}
                  fill
                  alt={`Before image of project ${project.id}`}
                  className="object-cover object-center duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute bg-[#000000bf] p-2 text-xs font-bold tracking-widest text-white uppercase md:p-4"
                  aria-hidden="true"
                >
                  Before
                </div>
                <span className="sr-only">
                  Before image showing project {project.id}
                </span>
              </div>

              <div className="group relative h-[300px] w-full overflow-hidden sm:h-[400px] md:top-1/4 md:right-6 md:border-4 md:border-white">
                <Image
                  src={project.afterImg}
                  fill
                  alt={`After image of project ${project.id}`}
                  className="object-cover object-center duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute bg-[#000000bf] p-2 text-xs font-bold tracking-widest text-white uppercase md:p-4"
                  aria-hidden="true"
                >
                  After
                </div>
                <span className="sr-only">
                  After image showing project {project.id}
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}

        <div
          ref={prevRef}
          className="swiper-button-prev absolute top-1/2 -left-40 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-200 p-6 !text-black duration-300 hover:bg-gray-300"
          aria-label="Previous slide"
        ></div>
        <div
          ref={nextRef}
          className="swiper-button-next absolute top-1/2 -right-40 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-200 p-6 !text-black duration-300 hover:bg-gray-300"
          aria-label="Next slide"
        ></div>
      </Swiper>
    </section>
  );
};

export default PortfolioSection;
