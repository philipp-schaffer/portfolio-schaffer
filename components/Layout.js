import { Sora } from "next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weights: ["100", "200", " 800 ", " 300", " 400", "500", " 600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div className="{`h-full page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}">
      <Nav></Nav>
      <Header></Header>
      <TopLeftImg></TopLeftImg>
      <div className="overflow-y-scroll overflow-x-hidden">{children}</div>
    </div>
  );
};

export default Layout;
