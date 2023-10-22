import React, {useState} from "react";

function Content({selectedItem, result, setResult, pointA, pointB, setPointB, setPointA, number, setNumber}) {
    const [mode, setMode] = useState("Площина"); // За замовчуванням "Площина"
    const [dimension, setDimension] = useState("2D"); // За замовчуванням "2D"


    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const handleDimensionChange = (newDimension) => {
        setDimension(newDimension);
    };

    const handleInputChange = (point, key, value) => {
        const newPoint = {...point, [key]: value};
        if (point === pointA) {
            setPointA(newPoint);
        } else {
            setPointB(newPoint);
        }
    };

    const handleCalculation = () => {

        if (mode === "Площина") {
            const distance2D = Math.sqrt(
                (pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2
            );
            setResult(`Відстань між точками A та B в площині: ${distance2D}`);
        } else {
            const distance3D = Math.sqrt(
                (pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2 + (pointB.z - pointA.z) ** 2
            );
            setResult(`Відстань між точками A та B в просторі: ${distance3D}`);
        }

    };

    const handelMiddleOfSegmentOne = () => {

        if (mode === "Площина") {
            const xm = (pointB.x + pointA.x) / 2;
            const ym = (pointB.y + pointA.y) / 2;
            setResult(`Координати вектора AB: (${xm}, ${ym})`);
        } else {
            const xm = (pointB.x + pointA.x) / 2;
            const ym = (pointB.y + pointA.y) / 2;
            const zm = (pointB.z + pointA.z) / 2;
            setResult(`Координати вектора AB: (${xm}, ${ym}, ${zm})`);
        }
    }

    const handelMiddleOfSegmentS = () => {

        if (mode === "Площина") {
            const xm = (pointB.x + pointA.x) / 2;
            const ym = (pointB.y + pointA.y) / 2;
            setResult(`Координати вектора AB: (${xm}, ${ym})`);
        } else {
            const xm = (pointB.x + pointA.x) / 2;
            const ym = (pointB.y + pointA.y) / 2;
            const zm = (pointB.z + pointA.z) / 2;
            setResult(`Координати вектора AB: (${xm}, ${ym}, ${zm})`);
        }
    }
    const handleVectorCoordinates = () => {

        if (mode === "Площина") {
            const vectorX = pointB.x - pointA.x;
            const vectorY = pointB.y - pointA.y;
            setResult(`Координати вектора AB: (${vectorX}, ${vectorY})`);
        } else {
            const vectorX = pointB.x - pointA.x;
            const vectorY = pointB.y - pointA.y;
            const vectorZ = pointB.z - pointA.z;
            setResult(`Координати вектора AB: (${vectorX}, ${vectorY}, ${vectorZ})`);
        }

    };

    const handleVectorModule = () => {

        if (mode === "Площина") {
            const vector = Math.sqrt(pointA.x * pointA.x + pointA.y * pointA.y);
            setResult(`Модуль вектора: (${vector})`);
        } else {
            const vector = Math.sqrt(pointA.x * pointA.x + pointA.y * pointA.y + pointA.z * pointA.z);
            setResult(`Модуль вектора: (${vector})`);
        }

    };

    const handleSumOfTwoVectors = () => {
        if (mode === "Площина") {
            const sumX = pointA.x + pointB.x;
            const sumY = pointA.y + pointB.y;
            setResult(`Сума векторів AB і CD: (${sumX}, ${sumY})`);
        } else {
            const sumX = pointA.x + pointB.x;
            const sumY = pointA.y + pointB.y;
            const sumZ = pointA.z + pointB.z;
            setResult(`Сума векторів AB і CD: (${sumX}, ${sumY}, ${sumZ})`);
        }
    };

    const handleDifferenceBetweenTwoVectors = () => {
        if (mode === "Площина") {
            const sumX = pointA.x - pointB.x;
            const sumY = pointA.y - pointB.y;
            setResult(`Різниця векторів AB і CD: (${sumX}, ${sumY})`);
        } else {
            const sumX = pointA.x - pointB.x;
            const sumY = pointA.y - pointB.y;
            const sumZ = pointA.z - pointB.z;
            setResult(`Різниця векторів AB і CD: (${sumX}, ${sumY}, ${sumZ})`);
        }
    };

    const handleProductOfVectorByNumber = () => {
        if (mode === "Площина") {
            const sumX = pointA.x * number;
            const sumY = pointA.y * number;
            setResult(`Різниця векторів AB і CD: (${sumX}, ${sumY})`);
        } else {
            const sumX = pointA.x * number;
            const sumY = pointA.y * number;
            const sumZ = pointA.z * number;
            setResult(`Різниця векторів AB і CD: (${sumX}, ${sumY}, ${sumZ})`);
        }
    }

    const ScalarProductOfTwoVectors = () => {
        if (mode === "Площина") {
            const Scalar = pointA.x * pointB.x + pointA.y + pointB.y;
            setResult(`Скалярний добуток двох векторів a і b: ${Scalar}`);
        } else {
            const Scalar = pointA.x * pointB.x + pointA.y + pointB.y + pointA.z * pointB.z;
            setResult(`Скалярний добуток двох векторів a і b:${Scalar}`);
        }
    }

    const ScalarByAngle = () => {
        if (mode === "Площина") {
            const Scalar = Math.sqrt(pointA.x * pointA.x + pointA.y + pointA.y)
                * Math.sqrt(pointB.x * pointB.x + pointB.y + pointB.y) * Math.cos(number);
            setResult(`Скалярний добуток двох векторів a і b: ${Scalar}`);
        } else {
            const Scalar = Math.sqrt(pointA.x * pointA.x + pointA.y + pointA.y + pointA.z * pointA.z)
                * Math.sqrt(pointB.x * pointB.x + pointB.y + pointB.y + pointB.z * pointB.z) * Math.cos(number);
            setResult(`Скалярний добуток двох векторів a і b:${Scalar}`);
        }
    }

    const angleBetweenVectors = () => {
        if (mode === "Площина") {
            const angleInDegrees = Math.acos((pointA.x * pointB.x + pointA.y * pointB.y)
                / (Math.sqrt(pointA.x * pointA.x + pointA.y * pointA.y)
                    * Math.sqrt(pointB.x * pointB.x + pointB.y * pointB.y))) * (180 / Math.PI);
            setResult(`СКут між векторами: ${angleInDegrees}`);
        } else {
            const angleInDegrees = Math.acos((pointA.x * pointB.x + pointA.y * pointB.y + pointA.z * pointB.z)
                    / (Math.sqrt(pointA.x * pointA.x + pointA.y * pointA.y + pointA.z * pointA.z)
                        * Math.sqrt(pointB.x * pointB.x + pointB.y * pointB.y + pointB.z * pointB.z)))
                * (180 / Math.PI);
            setResult(`СКут між векторами: ${angleInDegrees}`);
        }
    }

    const CollinearityOfTwoVectors = () => {
        if (pointA.x / pointB.x === pointA.y / pointB.y) {
            if (pointA.x / pointB.x > 0) {
                setResult(`Співнапрямлені вектори`);
            } else if (pointA.x / pointB.x < 0) {
                setResult(`Різнонапрямлені вектори`);
            }
        } else {
            setResult(`Не колінеарні`);
        }
        if (mode === "Площина") {
            if (pointA.x / pointB.x === pointA.y / pointB.y === pointA.z / pointB.z) {
                if (pointA.x / pointB.x > 0) {
                    setResult(`Співнапрямлені вектори`);
                } else if (pointA.x / pointB.x < 0) {
                    setResult(`Різнонапрямлені вектори`);
                }
            } else {
                setResult(`Не колінеарні`);
            }
        } else {

        }
    }

    const renderContent = () => {
        switch (selectedItem) {
            case "Відстань між двома точками":
                return (
                    <div className={"content"}>
                        <h2>Відстань між двома точками</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть A{" "}
                            (
                            <input

                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input

                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input

                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть B{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input

                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input

                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input

                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <p>
                            Відстань між точками{" "}
                            <span className="formula">
                                d = &radic;((x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup>
                                {mode === "Простір" && <span> + (z<sub>2</sub> - z<sub>1</sub>)<sup>2</sup></span>}
                                )
                            </span>
                        </p>
                        <button onClick={handleCalculation}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Пошук середини відрізка за координатами кінців відрізка":
                return (
                    <div className={"content"}>
                        <h2>Пошук середини відрізка за координатами кінців відрізка</h2>
                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть A{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input

                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть B{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>


                        <button onClick={handelMiddleOfSegmentOne}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Пошук кінця відрізка за координатами середини та іншого кінця відрізка":
                return (
                    <div className={"content"}>
                        <h2>Пошук кінця відрізка за координатами середини та іншого кінця відрізка</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть A{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть B{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>


                        <button onClick={handelMiddleOfSegmentS}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                )
            case "Координати вектора":
                return (
                    <div className={"content"}>
                        <h2>Координати вектора</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть A{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть B{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <p>Координати вектора: x= x1-x2 y=y1-y2</p>
                        <button onClick={handleVectorCoordinates}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Модуль вектора (довжина)":
                return (
                    <div className={"content"}>
                        <h2>Модуль вектора (довжина)</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть A{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <p>|a| = √(x^2 + y^2 + z^2)</p>

                        <button onClick={handleVectorModule}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Сума двох векторів (додавання)":
                return (
                    <div className={"content"}>
                        <h2>Сума двох векторів (додавання)</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <p>V_sum = (x1 + x2, y1 + y2, z1 + z2)</p>
                        <button onClick={handleSumOfTwoVectors}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Різниця двох векторів (віднімання)":
                return (
                    <div className={"content"}>
                        <h2>Різниця двох векторів (віднімання)</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <p>V_sum = (x1 - x2, y1 - y2, z1 - z2)</p>
                        <button onClick={handleDifferenceBetweenTwoVectors}>Розрахувати</button>
                        {result && <p>{result}</p>}

                    </div>
                );
            case "Добуток вектора на число (множення)":
                return (
                    <div className={"content"}>
                        <h2>Добуток вектора на число (множення)</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть число лямбда:{" "}

                            <input
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>

                        <p>λ*a = (λ*x, λ*y, λ*z)</p>
                        <button onClick={handleProductOfVectorByNumber}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Скалярний добуток двох векторів(За координатами)":
                return (
                    <div className={"content"}>
                        <h2>Скалярний добуток двох векторів(За координатами) </h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <p>a * b = (x1 * x2 + y1 * y2 + z1 * z2)</p>
                        <button onClick={ScalarProductOfTwoVectors}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Скалярний добуток двох векторів(За кутом)":
                return (
                    <div className={"content"}>
                        <h2>Скалярний добуток двох векторів(За кутом) </h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть число лямбда:{" "}

                            <input
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>

                        <button onClick={ScalarByAngle}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Кут між векторами":
                return (
                    <div className={"content"}>
                        <h2>Кут між векторами</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>


                        <p>θ = arccos((x1 * x2 + y1 * y2) / (|V1| * |V2|))</p>
                        <button onClick={angleBetweenVectors}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            case "Колінеарність двох векторів":
                return (
                    <div className={"content"}>
                        <h2>Колінеарність двох векторів</h2>

                        <div className={"plane-space"}>
                            <button
                                onClick={() => handleModeChange("Площина")}
                                className={mode === "Площина" ? "active" : ""}
                            >
                                Площина
                            </button>
                            <button
                                onClick={() => handleModeChange("Простір")}
                                className={mode === "Простір" ? "active" : ""}
                            >
                                Простір
                            </button>
                        </div>
                        <div>
                            Введіть вектор a{" "}
                            (
                            <input
                                value={pointA.x}
                                onChange={(e) => handleInputChange(pointA, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointA.y}
                                onChange={(e) => handleInputChange(pointA, "y", e.target.value)}
                            />
                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointA.z}
                                        onChange={(e) => handleInputChange(pointA, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>
                        <div>
                            Введіть вектор b{" "}
                            {/*{mode === "Площина" ? "(x2, y2)" : "(x2, y2, z2)"}*/}
                            (
                            <input
                                value={pointB.x}
                                onChange={(e) => handleInputChange(pointB, "x", e.target.value)}
                            />
                            ,
                            <input
                                value={pointB.y}
                                onChange={(e) => handleInputChange(pointB, "y", e.target.value)}
                            />

                            {mode === "Простір" && (
                                <>
                                    ,
                                    <input
                                        type="number"
                                        value={pointB.z}
                                        onChange={(e) => handleInputChange(pointB, "z", e.target.value)}
                                    />
                                </>
                            )}
                            )
                        </div>

                        <button onClick={CollinearityOfTwoVectors}>Розрахувати</button>
                        {result && <p>{result}</p>}
                    </div>
                );
            default:
                return <p>Оберіть пункт меню для відображення вмісту.</p>;
        }
    };


    return <div className="content">{renderContent()}</div>;
}

export default Content;