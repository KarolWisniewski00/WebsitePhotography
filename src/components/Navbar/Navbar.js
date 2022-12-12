import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="text-font bg-transparent absolute inset-0">
                <div className="container flex items-center justify-between p-6 mx-auto text-gray-300 whitespace-nowrap">
                    <a href="#" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl lg:text-5xl">Ilona Wiśniewska</a>
                    <div className="hidden lg:flex">
                        <a href="#" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl">Start</a>
                        <a href="#about" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl">O mnie</a>
                        <a href="#portfolio" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl">Portfolio</a>
                        <a href="#contact" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl">Kontakt</a>
                        <a href="https://instagram.com/ilona_wisniewska_fotografia?igshid=YmMyMTA2M2Y=" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl"><svg className="w-8 h-8 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg></a>
                        <a href="https://www.facebook.com/profile.php?id=100039597771612" className="hover:text-gray-200 mx-1.5 sm:mx-6 text-2xl"><svg className="w-8 h-8 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg></a>
                    </div>
                    <a href="#" className="flex lg:hidden hover:text-gray-200 mx-1.5 sm:mx-6"><svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" /></g></g></svg></a>
                </div>
            </nav>
        )
    }
}

export default Navbar