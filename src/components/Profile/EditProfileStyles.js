import styled from 'styled-components'
export const EditProfileStyles = styled.div`
.edit-wrapper {
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

.container {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fields-wrappers {
    height: 95%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.left-bar {
    padding-top: 10%;
    width: 20%;
    height: 65%;
}

.img-name-link {
    padding: 20px 0;
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #D9D9D9;
    border-radius: 10px;
}

.profile-img {
    position: relative;
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
}

.profile-img img {
    height: 100%;
    width: 100%;
    border-radius: 6px;
    object-fit: cover;
}

.change-img {
    bottom: 0px;
    right: 25%;
    font-family: 'Signika Negative', sans-serif;
    position: absolute;
}

.username {
    font-family: 'Signika Negative', sans-serif;
    font-weight: 500;
    font-size: 17px;
}

.user-link {
    font-family: 'Signika Negative', sans-serif;
    font-weight: 100;
    font-size: 13px;
    text-align: center;
    width: 100%;
    word-break: break-all;
}

.middle-bar {
    width: 50%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    
}

.title {
    font-family: 'Signika Negative', sans-serif;
    font-weight: 600;
}

.editing-fields-wrapper {
    display: flex;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
}

.fields-pair {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.field-title {
    font-family: 'Signika Negative', sans-serif;
    font-weight: 100;
    margin-bottom: 4px;
    width: 134px;
}

.field-input {
    padding: 4px 6px;
    background: #D9D9D9;
    border: solid #746d6d 1px;
    border-radius: 4px;
    font-family: 'Signika Negative', sans-serif;
    width: 100%;
}

.right-bar {
    width: 20%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
}

.privacy {
    font-family: 'Signika Negative', sans-serif;
    font-weight: 400;
    font-size: 20px;
    height: 39px;
    display: flex;
    align-items: center;
}

.check-field {
    align-items: center;
    display: flex;
    gap: 5px;
}

.choice-checkbox {
    width: 52px;
    height: 28px;
    position: relative;
    border-radius: 20px;
    background: #DDDDDD;
    box-sizing: content-box;
    border: none;
    cursor: pointer;
}

.dot-switch {
    background: #FFFFFF;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: absolute;
    left: 5px;
    bottom: 13%;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
}

.alert {
    font-family: 'Signika Negative', sans-serif;
    color: #9b111e;
    visibility: hidden;
}

.save-changes {
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #1A1C2B;
    cursor: pointer;
    color: white;
    font-family: 'Signika Negative', sans-serif;
}

.more-settings {
    background: #DDDDDD;
    border: solid transparent;
    border-radius: 3px;
    cursor: pointer;
    font-family: 'Signika Negative', sans-serif;
    width: auto;
}
`