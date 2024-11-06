import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="bg-blueDark">
        <Header />
        <Body />
      </div>
    </AppProvider>
  );
}

export default App;
