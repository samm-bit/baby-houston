import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

const colors = [
  "#ff5733",
  "#33ffc3",
  "#fd9bdb",
  "#9bcffd",
  "#fdfa9b",
  "#eb5f45",
  "#91eb45",
  "#45ebe4",
  "#b545eb",
];

function App() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === 9 ? 0 : v + 3));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header style={{ ...appHeader, background: colors[value] }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Whhooopp whooopp</p>
        <p>Baby Houston is here!!!</p>
      </header>
    </div>
  );
}


const appHeader={
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 'calc(10px + 2vmin)'
  }

export default App;
