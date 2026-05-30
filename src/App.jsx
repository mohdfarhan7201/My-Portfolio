import { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/ui/Loader";
import PageTransition from "./components/ui/PageTransition";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/cursor/CustomCursor";
import useSound from "./hooks/useSound";

function App() {
  const [loading, setLoading] = useState(true);

  useSound();

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <Home />
      </PageTransition>
    </>
  );
}

export default App;