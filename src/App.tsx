import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppLayout from "./components/AppLayout";
import { AppContextProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <main>
          <AppHeader />
          <ErrorBoundary>
            <AppLayout />
          </ErrorBoundary>
        </main>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
