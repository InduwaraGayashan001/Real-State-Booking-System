import './homePage.scss';
import SearchBar from '../../components/searchBar/searchBar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


function HomePage() { 
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real State & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                        ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>20+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;