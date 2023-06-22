// import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AppLayout({ children }) {
  return (
    <div>
        {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout