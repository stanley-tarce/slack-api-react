import React from 'react'
import './MainNavBar.css'
function MainNavBar({ setHeaderBarSearch, headerBarSearch }) {
    // const openUserList = (event) => {
    //     event.preventDefault()
    //     setOpenUserListModal(true)
    // }


    return (
        <div className={"Main-Nav-Bar"}>
            <div className="Search-Container">
                <input onChange={(e) => setHeaderBarSearch(e.target.value)} type="search" placeholder="Search Members..." className="search-button" name="search" value={headerBarSearch} />
                <i className="fa fa-search searchIcon navBarSearch" />
            </div>
            <div className={"user-image"} />

        </div>
    )
}

export default MainNavBar
