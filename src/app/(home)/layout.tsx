
import Navbar from "@/components/Navbar/Navbar";
import FooterOne from "@/components/layout/FooterOne";
import WhatsappButton from "@/components/layout/WhatsappButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            
                {children}
                <WhatsappButton/>
            
            <FooterOne />
        </>
    );
}


export default Layout;