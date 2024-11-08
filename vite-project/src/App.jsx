import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import {AppProvider} from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="bg-red-600 min-h-screen flex flex-col">
        <Header />
        <Body />
      </div>
    </AppProvider>
  );
}

export default App;
