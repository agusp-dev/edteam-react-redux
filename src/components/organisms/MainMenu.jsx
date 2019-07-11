import React from 'react'
import Logo from '../atoms/Logo'
import MenuItems from '../molecules/MenuItems';

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <Logo />
            <MenuItems />
        </div>
    </header>
)

export default MainMenu