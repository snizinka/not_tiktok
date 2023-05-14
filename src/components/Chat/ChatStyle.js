import styled from 'styled-components'
export const ChatStyle = styled.div`
    .chat-img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        object-fit: cover;
        padding-right: 5px;
    }

    .chat {
        display: flex;
        height: 60px;
        width: 100%;
        padding: 3px;
        border: solid #b1bce6 3px;
        border-radius: 10px;
        cursor: pointer;
    }

    .chat-username {
        font-family: 'Signika Negative', sans-serif;
        font-weight: 600;
        font-size: 20px;
        padding-top: 2.5px;
    }

    .chat-text {
        font-family: 'Signika Negative', sans-serif;
        padding-top: 2.5px;
        font-size: 15px;
    }

    .chat-textside {
        
    }

    .chat-field {
        height: calc(100vh - 270px);
        overflow: auto;
    }

    .chat-field>div {
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 90%;
    }

    .message-container {
        display: flex;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chat-img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        object-fit: cover;
        padding-right: 5px;
    }
    
    .username {
        font-family: 'Signika Negative', sans-serif;
        font-weight: 600;
        font-size: 20px;
        padding-top: 2.5px;
    }

    .message-content {
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
    }
    
    .chat-container {
        display: flex;
        width: 1400px;
        margin: auto;
    }

    .left-pannel {
        width: 25%;
        display: flex;
        justify-content: center;
    }

    .chat-box {
        width: 75%;
    }

    .chat-list {
        width: 90%;
    }

    .input-message {
        height: auto;
        border: none;
        outline: none;
        border-radius: 7px;
        margin-right: 30px;
        resize: none;
        padding: 3px;
    }

    .chat-accessories {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .send-message {
        height: 30px;
        border: none;
        outline: none;
        border-radius: 7px;
        padding: 0 10px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    .chat-info {
        padding: 6px 0;
        height: 60px;
        background: #b1bce6;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
    }

    .reply-container {
        display: flex;
    }

    .reply {
        font-size: 14px;
    }

    .inputRow {
        text-align: center;
        width: 50%;
        margin: auto;
    }

    .replyingMessage {
        display: flex;
    }

    .replyingMessageContent {
        display: flex;
    }

    .chat_list {
        height: calc(100vh - 250px);
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0 10px 0 0;
    }

    .chat-contact-img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        object-fit: cover;
        padding-right: 5px;
    }

    .leave-chat {
        align-self: center;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        border: none;
        background: #F32828;
    }

    .bluring_back {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: #685f5f73;
    }

    .create_chat {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: max-content;
        padding: 20px;
        border-radius: 8px;
        background: #BDBDBD;
        align-items: center;
    }

    .create_chat_container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .input_field p {
        font-family: 'Signika Negative',sans-serif;
        font-size: 18px;
    }

    .input_field input {
        border-radius: 6px;
        border: solid black 2px;
        padding: 3px;
    }

    .chat_user_list {
        height: 110px;
        overflow: auto;
    }

    .create_button {
        width: fit-content;
        padding: 4px;
        border: solid black 2px;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
    }

    .create_chat_trigger {
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Signika Negative', sans-serif;
        font-size: 15px;
        font-weight: 700;
        padding: 10px 0px;
        width: 150px;
        margin-top: auto;
        margin-bottom: 10px;
        background: #D9D9D9;
        border: none;
    }

    .search_fro_chat {
        font-family: 'Signika Negative', sans-serif;
        font-size: 14px;
        width: 66%;
        padding: 0 2%;
        margin-right: 5%;
        height: 40px;
        border-radius: 10px;
        border: none;
        margin-bottom: 10px;
    }

    .chat-textside {
        width: calc(325px - 65px - 70px);
    }

    .chat_users_container {
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 10px;
    }

    .chat_user {
        width: 200px;
        display: flex;
        align-items: center;
    }

    .chat_user_link {
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
        color: black;
        font-weight: 500;
        width: 80px;
    }

    .chat_user_button {
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 15px;
        font-weight: 700;
        padding: 3px 8px;
        margin-top: auto;
        margin-bottom: 10px;
        background: #D9D9D9;
        border: none;
        transition: .3s ease;
    }

    .chat_user_button:hover {
        background: #bdb4b4;
        transition: .3s ease;
    }

    .chat_users_wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        background: #685f5f73;
    }

    .chat_users_container {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 10px;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        padding: 20px;
        border-radius: 8px;
        background: #BDBDBD;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .chat_users_container_list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 10px;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 230px;
        overflow: auto;
    }

    .messageHandler {
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 15px;
        font-weight: 700;
        padding: 4px 6px;
        margin-top: auto;
        margin-bottom: 10px;
        background: #D9D9D9;
        border: none;
    }

    .remove {
        background: #F32828;
    }

    .replyHandler {
        background: transparent;
        border: none;
        margin-right: 4px;
        cursor: pointer;
    }

    .replyAsset {
        height: 25px;
    }

    .chat-all {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chat-reply-container {
        height: 26px;
    }

    .reply-username {
        font-family: 'Signika Negative',sans-serif;
        font-weight: 600;
        font-size: 18px;
        margin-right: 4px;
    }

    .reply-message {
        font-family: 'Signika Negative',sans-serif;
        margin-right: 4px;
    }

    .reply-cancel {
        background: #F32828;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        border: none;
        cursor: pointer;
    }

    .chat-info-btn {
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 15px;
        font-weight: 700;
        padding: 3px 8px;
        background: #D9D9D9;
        border: none;
        transition: .3s ease;
    }

    .add_users_container {
        width: max-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        overflow: auto;
    }

    .accent-btn {
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 15px;
        font-weight: 700;
        padding: 4px 8px;
        background: #FFF9D7;
        border: none;
        transition: .3s ease;
    }

    .chat_users {
        max-width: 200px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .message-image {
        height: 200px;
        width: fit-content;
        border-radius: 10px;
    }

    .preview-link {
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
    }

    .preview-image {
        height: 300px;
        max-width: 500px;
        border-radius: 6px;
    }

    .preview-maintext {
        color: black;
        font-family: 'Signika Negative',sans-serif;
        font-size: 15px;
        font-weight: 600;
        width: 300px;
    }

    .preview-categories {
        width: 300px;
        display: flex;
        gap: 4px;
    }

    .preview-categories a {
        font-family: 'Signika Negative',sans-serif;
        font-size: 14px;
    }
`