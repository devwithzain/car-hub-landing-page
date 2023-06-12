import "@styles/globals.css";
import { Footer, NavBar } from "@components";

export const metadata = {
    title: "Car Hub",
    description: "Car Hub For Car Lovers",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <html lang="en">
            <body className='relative'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;