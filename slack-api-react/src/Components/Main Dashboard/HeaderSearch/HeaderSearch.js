import React, { useState } from 'react'
import './HeaderSearch.css'
// ! PROPS FOR THE AVATAR
// 1. Pass a props with a string value of either user or group. if user -> avatar image else lock

function HeaderSearch() {
    return (
        <div className={"main-header"}>
            <div className={"label"}>
                <div className={`avatar`} />
                <p> Stanley</p>
            </div>
            <div className={"channel-list"}>
                <div className={"avatar-count"} />
                <p className={"list"}>24</p>
            </div>
        </div>
    )
}

export default HeaderSearch
