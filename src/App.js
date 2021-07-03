import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Anita Sutton"
        avatar="https://randomuser.me/api/portraits/women/27.jpg"
        online
      />
      <Contact
        name="Corey Day"
        avatar="https://randomuser.me/api/portraits/men/38.jpg"
        offline
      />
      <Contact
        name="Carter Stone"
        avatar="https://randomuser.me/api/portraits/men/41.jpg"
        online
      />
    </div>
  );
}

export default App;
