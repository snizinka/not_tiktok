import styled from 'styled-components'
export const NotificationBarStyles = styled.div`
.notification-image {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    object-fit: cover;
}

.notification-field {
    display: flex;
    width: calc(100% - 16px);
    gap: 6px;
    align-items: center;
    background: #D9D9D9;
    border-radius: 8px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    padding: 8px;
}

.notification-sender {
    font-family: 'Signika Negative', sans-serif;
    font-size: 19px;
}

.notification-message {
    font-family: 'Signika Negative', sans-serif;
    font-size: 17px;
    font-weight: 200;
}

.notification-close-btn {
    border-radius: 4px;
    border: none;
    padding: 4px;
    font-family: 'Signika Negative', sans-serif;
}

.notification-menu-field {
    z-index: 10; 
    gap: 5px; 
    display: flex;
    top: 0px; 
    left: calc(20%); 
    width: 250px; 
    height: 55px; 
    overflow: hidden;
}

.notification-menu-image {
    height: 50px;
    width: 50px;
    border-radius: 20px;
    object-fit: cover;
}

.notification-menu-sender {
    font-family: 'Signika Negative', sans-serif;
    font-size: 19px;
}

.notification-menu-message {
    font-family: 'Signika Negative', sans-serif;
    font-size: 17px;
    font-weight: 200;
}

.notification-menu-close-btn {
    border-radius: 4px;
    border: none;
    padding: 4px;
    font-family: 'Signika Negative', sans-serif;
}
`
