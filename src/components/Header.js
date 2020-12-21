import React, { useEffect } from 'react';


function Header(props) {
    const { categories = [],
        setCurrentCategory,
        currentCategory } = props;
    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);
    return (
        <header className="flex-row">
            <h1>Jaydon Goodrich</h1>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                            
                            className={`mx-1 ${currentCategory.name === category.name && `navActive`
                                }`}
                            key={category.name}
                        >
                            <a href={'#' + category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category.name);
                                }}
                                className={
                                    currentCategory === category.name && `navActive`
                                }
                            >
                                {category.name}
                            </span></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;