import InstagramFeed from "@/components/layout/InstagramFeed";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Details | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

const BlogDetails = () => {
  return (
    <>
      {/*==========BLOG DETAILS WRAPPER START ==========*/}
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white lg:pt-[110px] pt-[86px] relative z-1">
        <div className="container">
          <div className="grid grid-cols-12 gap-base">
            <div className="lg:col-span-8 col-span-12">
              <div className="blog__details">
                <div className="disc__header text-center lg:pb-7 pb-6 border-b border-stock-1 lg:mb-10 mb">
                  <div className="disc__thumb overflow-hidden">
                    <img src="./assets/images/blog/blog-standard.webp" alt="bs" className="w-full" />
                  </div>
                  <ul className="flex items-center justify-center lg:text-sm text-xs font-medium text-dark-2 flex-wrap pt-7">
                    <li className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden">
                      <i className="bi bi-calendar-week" />
                      <span className="ml-2">24 Sep 2022 · 6:30 PM</span>
                    </li>
                  </ul>
                  <h3 className="text-dark-1 font-medium leading-[1.43] lg:text-2xl md:text-xl text-[28px] mt-[14px]">
                    We spent 24 hours in Switzerland with Trafalgar Travel Director
                  </h3>
                </div>
                <div className="disc__wrapper">
                  <h5 className="lg:text-2md text-md text-dark-2 font-medium leading-[1.5] font-sans mb-6">
                    Lorem omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn
                    eam dimo diam ea. Piber Korem sit amet.
                  </h5>
                  <p>
                    Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En
                    eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in
                    imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit
                    similique id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum
                    torquatos nec eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet. blandit
                    dicant definition.Sit delicata persequeris ex, in sea rebum deseruisse appellantur. Lorem
                    ipsum dolor sit amet.Eos ei nisl graecis, vix aperiri consequat an. Eius lorem.
                  </p>
                  <p>
                    Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem
                    dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue
                    imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                    altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                  </p>
                  <blockquote>
                    <p>
                      “Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiamre iracundia vim. An
                      eame, ut sint posse sumo diam ea. Cu omnis.”
                    </p>
                    <cite>Johan Martin Sr</cite>
                  </blockquote>
                  <h4>Why You Shouldn’t Ride Elephants France.</h4>
                  <p>
                    Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem
                    dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue
                    imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                    altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                  </p>
                  <div className="grid grid-cols-2 lg:gap-base gap-5 lg:pt-[10px] lg:pb-9 pb-6">
                    <div className="col-span-1">
                      <img src="./assets/images/details/des-disc-1.webp" alt="details" className="w-full" />
                    </div>
                    <div className="col-span-1">
                      <img src="./assets/images/details/des-disc-2.webp" alt="details" className="w-full" />
                    </div>
                  </div>
                  <p>
                    Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem
                    dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue
                    imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                    altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Professional Tour Guide
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Transportation cost for carrying new materials/parts
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Transportation cost for carrying new materials/parts
                    </li>
                  </ul>
                  <p>
                    Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac.
                  </p>
                  <div className="relative mt-[10px] pb-[20px]">
                    <img src="./assets/images/blog/blog-video.webp" alt="blog-video" className="w-full" />
                    {/* <a data-fancybox href="https://www.youtube.com/watch?v=vJoNqBZ9QlM" className="inline-flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:h-20 lg:w-20 h-16 w-16 justify-center items-center rounded-full bg-primary-1 before:content-[''] before:absolute before:-inset-3 before:border-primary-1 before:border-2 before:rounded-full before:animate-pulse">
                                            <img src="./assets/images/icons/video-circle.svg" alt="placeholder" />
                                        </a> */}
                  </div>
                  <h4>Why You Shouldn’t Ride Elephants France.</h4>
                  <p>
                    Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem
                    dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue
                    imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                    altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                  </p>
                  <ol className="custom_order__list">
                    <li>
                      <span className="list__count">01</span>
                      <div className="list__content">
                        <h5>Professional Tour Guide</h5>
                        <p>
                          Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta
                          scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum principes,
                          congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri
                          tation altera. At soluta fierent laboramus eum.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="list__count">02</span>
                      <div className="list__content">
                        <h5>Transportation cost for carrying new materials/parts</h5>
                        <p>
                          Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta
                          scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum principes,
                          congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri
                          tation altera. At soluta fierent laboramus eum.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <p>
                    Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <aside className="widget widget_blogs lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-5">
                  Trending Stories
                </h4>
                <ul>
                  <li className="flex items-center group mt-6 first:mt-0">
                    <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                      <img
                        src="./assets/images/blog/ts-1.webp"
                        alt="blogs"
                        className="w-full group-hover:scale-105 duration-200"
                      />
                    </Link>
                    <div className="grow">
                      <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                        <Link href="/blog-details">
                          The Most Underrated European Cities, according to google you should know
                        </Link>
                      </h5>
                      <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                    </div>
                  </li>
                  <li className="flex items-center group mt-6 first:mt-0">
                    <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                      <img
                        src="./assets/images/blog/ts-2.webp"
                        alt="blogs"
                        className="w-full group-hover:scale-105 duration-200"
                      />
                    </Link>
                    <div className="grow">
                      <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                        <Link href="/blog-details">
                          The Most Underrated European Cities, according to google you should know
                        </Link>
                      </h5>
                      <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                    </div>
                  </li>
                  <li className="flex items-center group mt-6 first:mt-0">
                    <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                      <img
                        src="./assets/images/blog/ts-3.webp"
                        alt="blogs"
                        className="w-full group-hover:scale-105 duration-200"
                      />
                    </Link>
                    <div className="grow">
                      <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                        <Link href="/blog-details">
                          The Most Underrated European Cities, according to google you should know
                        </Link>
                      </h5>
                      <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                    </div>
                  </li>
                </ul>
              </aside>

              <aside className="widget widget_offer lg:mt-[50px] mt-10">
                <Link href="/package-list">
                  <img
                    src="./assets/images/backgrounds/offer-side-banner.webp"
                    alt="offer"
                    className="w-full"
                  />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/*========== BLOG DETAILS WRAPPER END ==========*/}

      <InstagramFeed />
    </>
  );
};

export default BlogDetails;
