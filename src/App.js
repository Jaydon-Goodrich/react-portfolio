//Import the various components
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import backgroundImg from './assests/background-img.jpg';
import Contact from './components/Contact';
import Resume from './components/Resume';
// Style for the app.js with the main background
const divStyle = {
  height: '100%',
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover'
};

//start of app declaration
function App() {
  //useState to define the categories
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' },
  ])
  //useState to define the project objects
  const [projects] = useState([
    { id: 1, title: 'Photo Portfolio', url: "https://github.com/Jaydon-Goodrich/photo-port", dUrl: "https://jaydon-goodrich.github.io/photo-port/" },
    { id: 2, title: 'Tech Blog', url: "https://github.com/Jaydon-Goodrich/tech-blog", dUrl: "https://powerful-beyond-37749.herokuapp.com/" },
    { id: 3, title: 'Note Taker', url: "https://github.com/Jaydon-Goodrich/note-taker", dUrl: "https://peaceful-refuge-43745.herokuapp.com/" },
    { id: 4, title: 'Game Finder', url: "https://github.com/Jaydon-Goodrich/game-finder", dUrl: "https://github.com/Jaydon-Goodrich/game-finder" },
    { id: 5, title: 'Job Finder', url: "https://github.com/Jaydon-Goodrich/job-finder", dUrl: "https://buzzword-job-finder.herokuapp.com/" },
    { id: 6, title: 'Dino Store', url: "https://github.com/Jaydon-Goodrich/dino-store", dUrl: "https://ancient-lake-97986.herokuapp.com/" }
  ])
  //useState to define the categories
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //Used to control which page renders when a nav element is clicked
  const renderPage = () => {
    switch (currentCategory) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio projects={projects} />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <>
    {/* Main page */}
      <div className="cComponent" style={divStyle} >
        <Header categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory} />
        {renderPage(currentCategory)}
      </div>
    </>
  );
}

export default App;
