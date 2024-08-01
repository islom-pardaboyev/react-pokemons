import "./App.css";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";

function App() {
  return (
    <>
      <section className="flex w-screen h-screen overflow-hidden">
        <Navbar />
        <main className="w-full">
          <CustomRoutes />
        </main>
      </section>
    </>
  );
}

export default App;
