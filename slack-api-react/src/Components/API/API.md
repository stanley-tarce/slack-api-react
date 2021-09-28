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

getRetrieveAllChannel{
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

getRetrieveChannel
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

postCreateChannelWithUsers

<!DOCTYPE html>
<html>
<head>
	<title>We're sorry, but something went wrong (500)</title>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<style>
		.rails-default-error-page {
			background-color: #EFEFEF;
			color: #2E2F30;
			text-align: center;
			font-family: arial, sans-serif;
			margin: 0;
		}

    	.rails-default-error-page div.dialog {
    		width: 95%;
    		max-width: 33em;
    		margin: 4em auto 0;
    	}

    	.rails-default-error-page div.dialog>div {
    		border: 1px solid #CCC;
    		border-right-color: #999;
    		border-left-color: #999;
    		border-bottom-color: #BBB;
    		border-top: #B00100 solid 4px;
    		border-top-left-radius: 9px;
    		border-top-right-radius: 9px;
    		background-color: white;
    		padding: 7px 12% 0;
    		box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
    	}

    	.rails-default-error-page h1 {
    		font-size: 100%;
    		color: #730E15;
    		line-height: 1.5em;
    	}

    	.rails-default-error-page div.dialog>p {
    		margin: 0 0 1em;
    		padding: 1em;
    		background-color: #F7F7F7;
    		border: 1px solid #CCC;
    		border-right-color: #999;
    		border-left-color: #999;
    		border-bottom-color: #999;
    		border-bottom-left-radius: 4px;
    		border-bottom-right-radius: 4px;
    		border-top-color: #DADADA;
    		color: #666;
    		box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
    	}
    </style>

</head>

<body class="rails-default-error-page">
	<!-- This file lives in public/500.html -->
	<div class="dialog">
		<div>
			<h1>We're sorry, but something went wrong.</h1>
		</div>
		<p>If you are the application owner check the logs for more information.</p>
	</div>
</body>

</html>

# createMessageInAChannel

{
"data": {
"id": 3225,
"body": "Hello World penge lumpia",
"message_reference_id": 702,
"created_at": "2021-09-28T07:24:09.237Z",
"updated_at": "2021-09-28T07:24:09.237Z"
}
}
{
"data": {
"id": 3226,
"body": "Guys Penge Lumpia",
"message_reference_id": 702,
"created_at": "2021-09-28T07:25:44.814Z",
"updated_at": "2021-09-28T07:25:44.814Z"
}
}

#getRetrieveMessagesInChannel
{
"data": [
{
"id": 3225,
"body": "Hello World penge lumpia",
"created_at": "2021-09-28T07:24:09.237Z",
"sender": {
"id": 783,
"provider": "email",
"uid": "npmstan@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "npmstan@gmail.com",
"created_at": "2021-09-27T10:44:36.090Z",
"updated_at": "2021-09-28T07:04:28.167Z"
},
"receiver": {
"id": 690,
"owner_id": 783,
"name": "smansman",
"created_at": "2021-09-28T07:22:36.747Z",
"updated_at": "2021-09-28T07:22:36.747Z"
}
},
{
"id": 3226,
"body": "Guys Penge Lumpia",
"created_at": "2021-09-28T07:25:44.814Z",
"sender": {
"id": 783,
"provider": "email",
"uid": "npmstan@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "npmstan@gmail.com",
"created_at": "2021-09-27T10:44:36.090Z",
"updated_at": "2021-09-28T07:04:28.167Z"
},
"receiver": {
"id": 690,
"owner_id": 783,
"name": "smansman",
"created_at": "2021-09-28T07:22:36.747Z",
"updated_at": "2021-09-28T07:22:36.747Z"
}
}
]
}

#createMessageToUser
{
"data": {
"id": 3228,
"body": "Penge ako lumpia!!!!!!",
"message_reference_id": 703,
"created_at": "2021-09-28T07:30:12.553Z",
"updated_at": "2021-09-28T07:30:12.553Z"
}
}

#retrieveAllMessageToUsers
{
"data": [
{
"id": 3227,
"body": "Penge lumpia",
"created_at": "2021-09-28T07:29:58.108Z",
"sender": {
"id": 783,
"provider": "email",
"uid": "npmstan@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "npmstan@gmail.com",
"created_at": "2021-09-27T10:44:36.090Z",
"updated_at": "2021-09-28T07:04:28.167Z"
},
"receiver": {
"id": 680,
"provider": "email",
"uid": "martina@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "martina@gmail.com",
"created_at": "2021-09-25T08:05:41.708Z",
"updated_at": "2021-09-28T07:19:48.494Z"
}
},
{
"id": 3228,
"body": "Penge ako lumpia!!!!!!",
"created_at": "2021-09-28T07:30:12.553Z",
"sender": {
"id": 783,
"provider": "email",
"uid": "npmstan@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "npmstan@gmail.com",
"created_at": "2021-09-27T10:44:36.090Z",
"updated_at": "2021-09-28T07:04:28.167Z"
},
"receiver": {
"id": 680,
"provider": "email",
"uid": "martina@gmail.com",
"allow_password_change": false,
"name": null,
"nickname": null,
"image": null,
"email": "martina@gmail.com",
"created_at": "2021-09-25T08:05:41.708Z",
"updated_at": "2021-09-28T07:19:48.494Z"
}
}
]
}
