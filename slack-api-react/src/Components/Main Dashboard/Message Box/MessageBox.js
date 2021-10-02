import React from 'react'
import './design.css'
function MessageBox({ body, uid, id }) {
    let name = uid.split('@')[0]
    return (
        <div className={"Message-Box"}>
            <div className={"Avatar-and-Image"}>
                <p className={"User-Name"}>{name}</p>
                <div className={"Image-Avatar"} />
            </div>
            <p className={"Message-Body"}>{body}</p>

        </div>

    )
}
export default MessageBox
