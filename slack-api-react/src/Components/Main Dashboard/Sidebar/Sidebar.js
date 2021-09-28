import React from 'react'
import './Sidebar.css'
function Sidebar() {
	return (
		<div className={"Main-Sidebar"}>
			<div className={'SideBar-Title-Name'}>
				Avion School
			</div>
			<div className={'SideBar-Channel-Container'}>
				<div className={'SideBar-Channel-Title'}>
					<div></div>
					<p>Channel</p>
				</div>
				<div className={'SideBar-Channel-Lists'}>
					<p>Stanley</p>
					{/** 
					 1. Create a card for mapping channel lists with left margin of 10 px 
					 2. Map the channel list with the API Data  */}
				</div>
				<div className={'SideBar-Channel-CreateChannel'}>
					<div></div>
					<p>Add Channels	</p>
				</div>
			</div>
			<div className={'SideBar-Message-Container'}>
				<div className={'SideBar-Message-Title'}>
					<div></div>
					<p>Message</p>
				</div>
				<div className={'SideBar-Message-Lists'}>
					<p>Stanley</p>
					{/** 
					 1. Create a card for mapping channel lists with left margin of 10 px 
					 2. Map the channel list with the API Data  */}
				</div>
				<div className={'SideBar-Message-CreateMessage'}>
					<div></div>
					<p>Send Message </p>
				</div>
			</div>
			<div className={''}>
				Avion School
			</div>
		</div>
	)
}

export default Sidebar
