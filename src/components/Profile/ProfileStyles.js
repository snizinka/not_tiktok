import styled from 'styled-components'
export const ProfileStyles = styled.div`
.profile-post-card {
    height: 150px;
    width: 350px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transition: .4s ease;
    cursor: pointer;
    box-sizing: border-box;
    padding: 4px;
}

.profile-post-card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transition: .4s ease;
}

.profile-post-card img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.profile-post-image {
    height: 100%;
    width: 100%;
    position: relative;
}

.card-content h2 {
    color: white;
    font-size: 20px;
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Signika Negative',sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    height: 45px;
    overflow: hidden;
}

.additional-refs, .additional-refs {
    font-family: 'Signika Negative',sans-serif;
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
  }
  
  .additional-refs {
    color: white;
    inset: auto auto 60px 30px;
    bottom: 0;
    max-height: 100px;
    overflow: hidden;
    width: 100%;
  }
  
  .additional-refs a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }

  .profile-post-image:hover h2 {
    color: black;
    inset: auto auto 100px 30px;
    transition: inset .3s ease-out;
  }

  .profile-post-image:hover .additional-refs {
    color: black;
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }

  .profile-post-image:hover img {
    transition: opacity .3s ease-in;
    opacity: .2;
    transition: opacity .3s .1s ease-in;
  }

  .profile-post-categories {
    display: flex;
    gap: 4px;
    height: 20px;
    width: 100%;
    overflow: hidden;
  }
`