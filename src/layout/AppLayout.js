import Footer from "../components/footer/Footer";

function AppLayout({ children }) {
  return (
    <main>
       <div>
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default AppLayout