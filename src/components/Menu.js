function Menu({onItemClick, setResult, setPointA, setPointB, setNumber}) {
    const menuItems = [
        "Відстань між двома точками",
        "Пошук середини відрізка за координатами кінців відрізка",
        "Пошук кінця відрізка за координатами середини та іншого кінця відрізка",
        "Координати вектора",
        "Модуль вектора (довжина)",
        "Сума двох векторів (додавання)",
        "Різниця двох векторів (віднімання)",
        "Добуток вектора на число (множення)",
        "Скалярний добуток двох векторів(За координатами)",
        "Скалярний добуток двох векторів(За кутом)",
        "Кут між векторами",
        "Колінеарність двох векторів",
    ];

    const handleItemClick = (item) => {
        onItemClick(item);
        setResult(null)
        setPointA({x: 0, y: 0, z: 0})
        setPointB({x: 0, y: 0, z: 0})
        setNumber(0)
    };

    return (
        <div className="menu">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
