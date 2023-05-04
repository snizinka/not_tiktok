import styled from 'styled-components'
export const ContentStyles = styled.div`
.post-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}

.text-title {
    font-family: 'Signika Negative',sans-serif;
    height: 10%;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow: hidden;
    padding-top: 10px;
    font-size: 18px;
    word-wrap: break-word;
}

.text-title p, .text-body p {
    width: 100%;
}

.text-body {
    font-family: 'Signika Negative',sans-serif;
    height: 80%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    word-wrap: break-word;
    overflow: auto;
}
`