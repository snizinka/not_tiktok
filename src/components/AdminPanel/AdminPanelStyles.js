import styled from 'styled-components'
export const AdminPanelStyles = styled.div`
.admin-wrapper {
    height: calc(100vh - 180px);
    background: #BDBDBD;
    width: 90%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    max-height: calc(100vh - 140px);
}

.admin-container {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.admin-search {
    background: #968F8F;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    color: white;
    margin-bottom: 20px;
}

.parts-wrapper {
    width: 100%;
    height: calc(90% - 20px);
    display: flex;
    justify-content: space-between;
}

.left-part {
    height: 100%;
    border-radius: 6px;
    background: #D9D9D9;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left-part-container {
    height: 100%;
    width: 90%;
}

.left-part-container h1 {
    font-family: 'Signika Negative', sans-serif;
    font-size: 23px;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 30px;
}

.posts-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: calc(90% - 60px);
    overflow: auto;
}

.post {
    border-radius: 6px;
    background: #968F8F;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 8px;
    min-height: 30px;
    max-height: 56px;
}

.post p {
    font-family: 'Signika Negative', sans-serif;
    height: 100%;
    overflow: hidden;
}

.right-part {
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 69%;
}

.right-part-top {
    height: 43%;
    display: flex;
    justify-content: space-between;
}

.top-left {
    background: #D9D9D9;
    border-radius: 6px;
    width: 56%;
    height: 100%;
}

.top-container {
    height: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.info-item {
    background: #C5B8B8;
    border-radius: 4px;
    display: flex;
    gap: 6px;
    padding: 4px 8px;
    width: 70%;
    overflow: hidden;
    font-family: 'Signika Negative', sans-serif;
}

.reactive {
    color: white;
}

.top-right {
    background: #D9D9D9;
    border-radius: 6px;
    height: 100%;
    width: 42.5%;
}

.right-part-bottom {
    background: #D9D9D9;
    border-radius: 6px;
    height: 55%;
    width: 100%;
}

.bottom-container {
    align-items: center;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    justify-content: center;
    overflow: auto;
    padding: 10px;
    display: flex;
    gap: 6px;
}

.post-preview {
    background: #968F8F;
    border-radius: 10px;
    height: 150px;
    width: 150px;
}

.post-details {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: calc(55%);
}

.action-btn {
    width: fit-content;
}

.action-btn button {
    background: #968F8F;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-family: 'Signika Negative', sans-serif;
    width: fit-content;
    padding: 6px 12px;
}

.results-wrapper {
    background: #C5B8B8;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px 0;
    position: absolute;
    font-family: 'Signika Negative', sans-serif;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.results-container {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.result-item {
    border-radius: 6px;
    border: solid #968F8F 2px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 2px 4px;
    width: calc(100% - 12px);
    overflow: hidden;
}

.result-item:hover {
    background: #968F8F;
    color: white;
}

.indetifiery {
    border-radius: 8px;
    border: solid #FFF9D7 2px;
    padding: 1px 4px;
}

.post-preview-image {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.posts-search {
    background: #968F8F;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    color: white;
    margin-bottom: 20px;
}

.info-item-categories {
    display: flex;
    gap: 4px;
    height: 20px;
    width: calc(100% - 80px);
    overflow: auto;
}
`