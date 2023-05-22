import styled from 'styled-components'
export const SharePostStyles = styled.div`
    .shareTopPart {
        padding: 10px 0;
        height: calc(80% - 20px);
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .shareBottomPart {
        display: flex;
        gap: 10px;
        padding: 10px;
        margin: auto;
        width: 80%;
    }

    .shareBottomPart input {
        border: none;
        padding: 6px;
        border-radius: 8px;
        font-family: 'Signika Negative', sans-serif;
    }

    .shareBottomPart button {
        padding: 6px;
        border: none;
        border-radius: 6px;
        font-family: 'Signika Negative', sans-serif;
    }

    .share-to-chat {
        align-items: center;
        background: #C5B8B8;
        box-sizing: border-box;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        font-family: 'Signika Negative', sans-serif;
        gap: 4px;
        padding: 4px 6px;
    }

    .share-to-chat img {
        border-radius: 100%;
        object-fit: cover;
        height: 40px;
        width: 40px;
    }
`