import { useState } from 'react';


const SideBar = () => {
    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    console.log(isOffcanvasOpen)

    const handleOffcanvasToggle = () => {
        setOffcanvasOpen(!isOffcanvasOpen);
    };


    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };


    return (
        <div className="sidebar">
            <span onClick={handleOffcanvasToggle} className="offcanvas-opener">
                <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </span>
            <div className={` sideber-item ${isOffcanvasOpen ? 'sideber-click' : 'sideber-removeclick'}`}>
                


            </div>
        </div>
    );
}

export default SideBar;
