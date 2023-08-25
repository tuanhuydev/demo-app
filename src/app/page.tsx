import { Suspense, lazy } from "react";
import LoadingPage from "./loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const AppLauncher = lazy(() => import("./components/AppLauncher"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="grow">
          <Suspense fallback={<LoadingPage />}>
            <AppLauncher />
          </Suspense>
        </div>
        <Footer />
      </div>
    </main>
  );
}
