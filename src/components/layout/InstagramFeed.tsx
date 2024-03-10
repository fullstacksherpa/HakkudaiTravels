'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import InstagramData from '@/constant/common/InstagramData'
import { TikTokEmbed } from 'react-social-media-embed';
const InstagramFeed = () => {
    return (
        <div className="instagram_feed_style__one lg:pt-30 pt-24 ">
            {/* <div className="swiper max-w-[1570px] mx-auto px-3 insta-feed-slider">
                <div className="swiper-wrapper ">
                    <div className="swiper-slide">
                        <div className="relative overflow-hidden group">
                            <img src="./assets/images/instagram/insta-1.webp" alt="instagram" className="w-full" />
                            <a href="#" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative overflow-hidden group">
                            <img src="./assets/images/instagram/insta-2.webp" alt="instagram" className="w-full" />
                            <a href="#" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative overflow-hidden group">
                            <img src="./assets/images/instagram/insta-3.webp" alt="instagram" className="w-full" />
                            <a href="#" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative overflow-hidden group">
                            <img src="./assets/images/instagram/insta-4.webp" alt="instagram" className="w-full" />
                            <a href="#" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative overflow-hidden group">
                            <img src="./assets/images/instagram/insta-5.webp" alt="instagram" className="w-full" />
                            <a href="#" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            <Swiper 
                     slidesPerView={1}
                     spaceBetween={30}
                     loop={false}
                     breakpoints = {{
                        320: {
                            slidesPerView: 1
                          },
                          480: {
                            slidesPerView: 2
                          },
                          768: {
                            slidesPerView: 3
                          },
                          1200: {
                            slidesPerView: 4
                          }
                     }}
                     className='max-w-[95%] mx-auto overflow-hidden px-3 insta-feed-slider'
                >
                    {InstagramData.images?.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <div className="relative overflow-hidden group">
                            <TikTokEmbed url={item.url} width={325} />
                              
                            {/* <Image 
                                src={item.img} 
                                alt="instagram images"
                                height={280}
                                width={290} 
                                className="w-full" />
                            <Link href="/" className="insta-feed-icon">
                                <i className="bi bi-instagram" />
                            </Link> */}
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>

    );
}

export default InstagramFeed;