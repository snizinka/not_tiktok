import styled from 'styled-components'
export const CreatePostStyles = styled.div`
.content-type-wrapper {
    margin: auto;
    height: 650px;
    width: 1400px;
    background: #BDBDBD;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content-type-container {
    width: 80%;
    margin: auto;
    overflow-y: auto;
    height: 570px;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.content-type {
    background: #D9D9D9;
    width: 20%;
    height: 190px;
    border-radius: 8px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: .3s ease;
    font-family: 'Signika Negative', sans-serif;
    font-size: 18px;
}

.content-type:hover {
    background: #FFF9D7;
    transition: .3s ease;
}

.text-content-type, .photo-content-type, .video-content-type {
    font-family: 'Signika Negative',sans-serif;
    width: 100%;
    height: 100%;
}

.text-content-type p {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
}

.text-content-title {
    font-family: 'Signika Negative',sans-serif;
    font-size: 14px;
    width: calc(100% - 20px);
    padding: 0 10px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
}

.text-content-value {
    font-family: 'Signika Negative',sans-serif;
    font-size: 14px;
    width: calc(100% - 20px);
    padding: 10px 10px;
    height: 40vh;
    border-radius: 10px;
    border: none;
}

.pictures-upload {
    max-height: 160px;
    width: 20%;
    flex-direction: column;
    align-items: center;
}

.photo-content-type-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.video-content-type-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.content-type-slider {
    width: 90%;
    height: 100%;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.content-type-slide {
    height: 100%;
    scroll-snap-align: start;
}

.next-button {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
    padding: 8px 30px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

.content-type-slider-switches {
    width: 10%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.content-type-slider-switches button {
    width: 80px;
    padding: 10px 0;
    border: none;
    border-radius: 6px;
}

.content-type-slider-wrapper {
    width: 100%;
    height: 100%;
}
`