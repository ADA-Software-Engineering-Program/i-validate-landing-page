// import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function AppLayout({ children }) {
  return (
    <div>
        {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}