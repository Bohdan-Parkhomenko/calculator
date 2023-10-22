import React, {useState} from "react";
import "./index.css";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
    };
    const [result, setResult] = useState(null);
    const [pointA, setPointA] = useState({x: 0, y: 0, z: 0});
    const [pointB, setPointB] = useState({x: 0, y: 0, z: 0});
    const [number, setNumber] = useState(0)

    return (
        <div className="app">
            <Menu
                onItemClick={handleMenuItemClick}
                setResult={setResult}
                setPointA={setPointA}
                setPointB={setPointB}
                setNumber={setNumber}
            />
            <div className="container">
                <h1>Математичні дії</h1>
                <Content
                    selectedItem={selectedItem}
                    result={result}
                    setResult={setResult}
                    pointA={pointA}
                    pointB={pointB}
                    setPointA={setPointA}
                    setPointB={setPointB}
                    number={number}
                    setNumber={setNumber}
                />

            </div>
        </div>
    );
}

export default App;
