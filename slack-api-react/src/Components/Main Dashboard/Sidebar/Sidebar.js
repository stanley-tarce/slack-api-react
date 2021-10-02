import React from 'react'
import './Sidebar.css'
import ChannelCard from './ChannelCard/ChannelCard'
import MessageCard from './MessageCard/MessageCard'
import { useHistory } from 'react-router'
function Sidebar({
	channelList,
	setChannelData,
	channelData,
	header,
	setMode,
	redirectToChannel,
	userMessageList,
	userData,
	setUserData,
	setCreateMessageContainer }) {
	const history = useHistory()
	return (
		<div className={"Main-Sidebar"}>
			<div className={'SideBar-Title-Name'}>
				Avion School
			</div>
			<div
				onClick={(e) => history.push('/main/home')}
				className={'SideBar-Title-Home'}>
				Home
			</div>
			<div className={'SideBar-Channel-Container'}>
				<div className={'SideBar-Channel-Title'}>
					<div className={"DropDown"}></div>
					<p>Channel</p>

				</div>
				<div className={'SideBar-Channel-Lists'}>
					{channelList.length !== 0 && channelList.map((channel, index) =>
						<ChannelCard
							key={index}
							channelData={channelData}
							setMode={setMode}
							setChannelData={setChannelData}
							name={channel.name}
							channelId={channel.channelId}
							owner={channel.owner}
							header={header}
							redirectToChannel={redirectToChannel}
							setCreateMessageContainer={setCreateMessageContainer} />
					)}
					{/** 
					Insert Channel Card JS Here
					 1. Create a card for mapping channel lists with left margin of 10 px 
					 2. Map the channel list with the API Data  */}
				</div>
				<div className={'SideBar-Channel-CreateChannel'}>
					<div ></div>
					<p>Add Channels	</p>
				</div>
			</div>
			<div className={'SideBar-Message-Container'}>
				<div className={'SideBar-Message-Title'}>
					<div className={"DropDown"}></div>
					<p>Message</p>

				</div>
				<div className={'SideBar-Message-Lists'}>
					{userMessageList && userMessageList.length !== 0 && userMessageList.map((user, index) =>
						<MessageCard
							key={index}
							id={user.id}
							uid={user.uid}
							setUserData={setUserData}
							userData={userData}
							header={header}
							setMode={setMode}
							setCreateMessageContainer={setCreateMessageContainer} />)}

					{/** 
					 1. Create a card for mapping channel lists with left margin of 10 px 
					 2. Map the channel list with the API Data  */}
				</div>
				<div className={'SideBar-Message-CreateMessage'}>
					<div></div>
					<p>Send Message </p>
				</div>
			</div>
		</div>
	)
}


export default Sidebar
/**
getRetrieveAllChannel{
	"data": [
		{
			"id": 370,
			"owner_id": 333,
			"name": "qwerty=>",
			"created_at": "2021-09-08T12:52:27.055Z",
			"updated_at": "2021-09-08T12:52:27.055Z"
		},
		{
			"id": 506,
			"owner_id": 333,
			"name": "{{dis3}}",
			"created_at": "2021-09-24T11:40:21.251Z",
			"updated_at": "2021-09-24T11:40:21.251Z"
		},
		{
			"id": 507,
			"owner_id": 333,
			"name": "testingwwqe",
			"created_at": "2021-09-24T11:40:53.743Z",
			"updated_at": "2021-09-24T11:40:53.743Z"
		},
		{
			"id": 508,
			"owner_id": 333,
			"name": "testingas2312",
			"created_at": "2021-09-24T11:41:12.020Z",
			"updated_at": "2021-09-24T11:41:12.020Z"
		},
		{
			"id": 509,
			"owner_id": 333,
			"name": "testingas2312w",
			"created_at": "2021-09-24T11:41:28.856Z",
			"updated_at": "2021-09-24T11:41:28.856Z"
		},
		{
			"id": 510,
			"owner_id": 333,
			"name": "unknownchannel",
			"created_at": "2021-09-24T11:51:43.935Z",
			"updated_at": "2021-09-24T11:51:43.935Z"
		},
		{
			"id": 650,
			"owner_id": 333,
			"name": "unknownc",
			"created_at": "2021-09-26T03:57:04.005Z",
			"updated_at": "2021-09-26T03:57:04.005Z"
		}
	]

}
{
	"errors": "No available channels."
}

RETRIEVE ALL CHANNEL
{
	"data": [
		{
			"id": 688,
			"owner_id": 783,
			"name": "SlackAPIStanley",
			"created_at": "2021-09-28T07:07:23.627Z",
			"updated_at": "2021-09-28T07:07:23.627Z"
		},
		{
			"id": 689,
			"owner_id": 783,
			"name": "StanTheMan",
			"created_at": "2021-09-28T07:08:00.546Z",
			"updated_at": "2021-09-28T07:08:00.546Z"
		}
	]
}

{
	"data": {
		"id": 689,
		"owner_id": 783,
		"name": "StanTheMan",
		"created_at": "2021-09-28T07:08:00.546Z",
		"updated_at": "2021-09-28T07:08:00.546Z",
		"channel_members": [
			{
				"id": 2294,
				"channel_id": 689,
				"user_id": 783,
				"created_at": "2021-09-28T07:08:00.593Z",
				"updated_at": "2021-09-28T07:08:00.593Z"
			}
		]
	}
}
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'id': '510',
  'member_id': 'npmstan@gmail.com'
});
var config = {
  method: 'post',
  url: '206.189.91.54/api/v1/channel/add_member',
  headers: {
	'access-token': 'o6aJoEd6sg5LPtVEVEFkNQ ',
	'expiry': '1634021824 ',
	'uid': 'akosipc4@gmail.com ',
	'client': 'waH-7P6bbfHoEzNxG02QGQ',
	'Content-Type': 'application/x-www-form-urlencoded',
	'Cookie': '_rails_project_session=o4w3HGuutyGmuacZq%2FIZ%2FrIDGr4wC%2FjWPMCgwspAVhSFspRti4IOFAF4mZOkPODUTgJrcRkexvFqoWTlqd%2FVtvAaCKI765Kc1UsmlHodALwlo1%2Br6L%2FvXbSth6HDkvQ3jpNkqs%2BxUCO9gsft2MsEMQmy0ivKSBqOLy5GOh%2FJjUXk5awFJdlhZKR1EEgLCAQLTi4K%2B5u4s7BiPTt9BiPcEYkbF5yd%2BKBFlNzTYbczdk%2FppcJKVUBNkdp0oM43qYnPlnRjR0YieL8Xn5kKvV%2BCfas7SRsFNAb0DHWcVIfGrQGbG1HxVddh1hf86oS15kasOeVZsaHCfJGkSe2%2BygTmt%2FVomAkZM%2BqhgUim%2BObzSURoZTrVcll%2FzlAxzq6ToX1SmyUm%2BuiBfb6bd3KXx%2FCyyBWca%2FqLmXlbhbw257%2BpHIbRn3g0FtJSddCpavmrZFBYxxN4QhlRTIx1iAAzCcTT0A%2Bjl2Sgh2%2FZ6pd8adM84X5HB00lPPgFAKz0F2sl%2B8qOnYyWcXtAgoiAnf9L8hoKt2Mr%2F%2BfPRRz8%2FR2bGu3Qe35h4gkWQClcCcy3NQ4E07gD11cbd7pqoTD%2Fg%2BTka%2F6UzpmL5RcKXOoK0rPiqZoV7dtnHcN1jW3OCrj8gk92vKxTyCv8RnIU--fQDkleOxYDvTqLmu--s85VTIngLik2Z4GP2SVBXQ%3D%3D'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


*/