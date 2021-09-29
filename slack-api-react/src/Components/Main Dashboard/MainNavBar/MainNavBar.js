import React from 'react'
import './MainNavBar.css'
function MainNavBar() {
    return (
        <div className={"Main-Nav-Bar"}>
            <div className="Search-Container">
                <input type="search" placeholder="Search Members..." className="search-button" name="search" />
                <i className="fa fa-search searchIcon navBarSearch" />
            </div>
            <div className={"user-image"} />

        </div>
    )
}

export default MainNavBar
