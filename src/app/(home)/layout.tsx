
import Navbar from "@/components/Navbar/Navbar";
import FooterOne from "@/components/layout/FooterOne";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            
                {children}
            
            <FooterOne />
        </>
    );
}


export default Layout;