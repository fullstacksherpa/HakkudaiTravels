import Image from "next/image";
import Link from "next/link";

const PackageCardOne = (
    {img, title,  duration, price,} : 
    {
        img: string, 
        title: string, 
        duration: string,
        price: string,
    }
    
    ) => {
    return (
        <div className="group/card package-card-style-one wow fadeInUp">
            <div className="overflow-hidden relative">
               
                    <Image 
                        width={820}
                        height={520}
                        placeholder="blur"
                        blurDataURL='/assets/images/blur-placeholder.png'
                        src={img} 
                        alt={title} 
                        className="w-full group-hover/card:scale-105 duration-300" 
                    />
                
            </div>
            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                <Link href="/package-details">{title}</Link>
            </h3>
            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                <li>
                    <span className="text-primary-1">
                        <i className="bi bi-people" />
                    </span>
                </li>
                <li>
                    <span className="text-primary-1">
                        <i className="bi bi-clock" />
                    </span>
                    <span>{duration} Days</span>
                </li>
                <li>
                    <span className="text-primary-1">
                        <i className="bi bi-coin" />
                    </span>
                    <span>From <span className="text-primary-1 font-bold">Rs.{price}</span></span>
                </li>
            </ul>
            {/* <Link href="/package-details" className="package-explore-btn group/btn">
                <span className="mr-2">Explore Now</span>
                <svg className="group-hover/btn:translate-x-2 duration-200 " width={27} height={14} viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z" fill="currentColor" />
                    <path d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link> */}
        </div>
    );
}

export default PackageCardOne;