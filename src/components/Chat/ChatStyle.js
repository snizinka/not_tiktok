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
        display: inline-flex;
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
        width: 40%;
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
    }

    .reply-container {
        display: flex;
    }

    .reply {
        font-size: 14px;
    }

    .inputRow {
        text-align: center;
    }

    .replyingMessage {
        display: flex;
    }

    .replyingMessageContent {
        display: flex;
    }
`