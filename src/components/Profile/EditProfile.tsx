import React, { useRef, useState, useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useProfileActions from "../../hooks/useProfileActions";
import CheckButton from "../Buttons/CheckButton";
import Header from "../Header";
import { EditProfileStyles } from "./EditProfileStyles";
import axios from "axios";
import LoadImage from "../../hooks/LoadImage";

const EditProfile = () => {
    const { user } = useTypedSelector(state => state.user)
    const { success, profile, validation, validating, loading } = useTypedSelector(state => state.profile)
    const { fetchProfileSettings, checkUserLink, checkMailAddress, updateProfile } = useProfileActions()

    const [password, setPassword] = useState<any>('')
    const [newPassword, setNewPassword] = useState<any>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<any>('')
    const [profileImage, setProfileImage] = useState<any>('')
    const [phoneNumber, setPhoneNumber] = useState<any>('')
    const [username, setUsername] = useState<any>('')
    const [userLink, setUserLink] = useState<any>('')
    const [description, setDescription] = useState<any>('')
    const [email, setEmail] = useState<any>('')
    const [privateProfile, setPrivateProfile] = useState<boolean>(false)
    const [showSavedPosts, setShowSavedPosts] = useState<boolean>(false)
    const [recommendPosts, setRecommendPosts] = useState<boolean>(false)
    const phoneRef = useRef<any>('')
    const usernameRef = useRef<any>('')
    const imageRef = useRef<any>('')
    const newPasswordRef = useRef<any>('')
    const confirmNewPasswordRef = useRef<any>('')

    useEffect(() => {
        fetchProfileSettings(user[0].userId)
    }, [])

    useEffect(() => {
        setProfileImage(profile?.userImage)
        setUsername(profile?.username)
        setPhoneNumber(profile?.phoneNumber)
        setUserLink(profile?.userLink)
        setDescription(profile?.description ?? '')
        setEmail(profile?.mailAddress)
        setRecommendPosts(profile?.recomend_user_posts === 'true')
        setShowSavedPosts(profile?.show_profile_posts === 'true')
        setPrivateProfile(profile?.is_profile_private === 'true')
    }, [profile])

    useEffect(() => {
        if (newPassword !== '') {
            validateNewPassword(newPassword)
        }
    }, [newPassword])

    useEffect(() => {
        validateConfirmNewPassword(confirmNewPassword)
    }, [confirmNewPassword])

    useEffect(() => {
        let userString: any = localStorage.getItem('user');
        if (success) {
            if (newPassword) {
                let parsedUser = JSON.parse(userString)
                console.log(parsedUser[0])
                parsedUser[0].password = newPassword
                localStorage.setItem('user', JSON.stringify(parsedUser));
            }
            setPassword('')
            setNewPassword('')
            setConfirmNewPassword('')
        }
    }, [success])

    function saveEdited() {
        const data = {
            userId: profile?.userId,
            userImage: profileImage,
            phoneNumber: phoneNumber,
            username: username,
            userLink: userLink,
            description: description,
            mailAddress: email,
            is_profile_private: privateProfile,
            show_profile_posts: showSavedPosts,
            recomend_user_posts: recommendPosts,
        }
        checkUserLink(userLink, user[0].userId)
        validateEmail(email)
        if (!loading && !validating
            && !validation.userLink && !validation.mailAddress
            && validateUsername(username) && validatePhoneNumber(phoneNumber)
            && validatePassword()) {
            console.log('Success')
            updateProfile({
                userId: user[0].userId,
                mailAddress: email,
                userLink: userLink,
                password: password,
                username: username,
                phoneNumber: phoneNumber,
                userImage: profileImage,
                description: description,
                isProfilePrivate: privateProfile,
                showProfilePosts: showSavedPosts,
                recomendUsersPosts: recommendPosts,
                newPassword: newPassword
            })
        }
        console.log(data)
    }

    function changePrivacy() {
        setPrivateProfile((prev: any) => !prev)
    }

    function changeShowSavedPosts() {
        setShowSavedPosts((prev: any) => !prev)
    }

    function changeRecommend() {
        setRecommendPosts((prev: any) => !prev)
    }

    function validatePassword() {
        if (password) {
            const validateNewPass = validateNewPassword(newPassword)
            const validateNewConfPass = validateConfirmNewPassword(confirmNewPassword)

            if (!validateNewPass || !validateNewConfPass) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }

    function validateConfirmNewPassword(password: string) {
        if (password !== newPassword) {
            confirmNewPasswordRef.current.style.visibility = 'visible'
            return false
        } else {
            confirmNewPasswordRef.current.style.visibility = 'hidden'
            return true
        }
    }

    function validateNewPassword(password: string) {
        if (!password.match('[a-zA-Z-0-9]{4}')) {
            newPasswordRef.current.style.visibility = 'visible'
            return false
        } else {
            newPasswordRef.current.style.visibility = 'hidden'
            return true
        }
    }

    function validateUsername(username: any) {
        if (!username.match('[a-zA-Z]{3}')) {
            usernameRef.current.style.visibility = 'visible'
            return false
        } else {
            usernameRef.current.style.visibility = 'hidden'
            return true
        }
    }

    function validateUserLink(userLink: any) {
        checkUserLink(userLink, user[0].userId)
    }

    function validatePhoneNumber(number: any) {
        if (!(number.match('[0-9]{10}'))) {
            phoneRef.current.style.visibility = 'visible'
            return false
        } else {
            phoneRef.current.style.visibility = 'hidden'
            return true
        }
    }

    function validateEmail(email: any) {
        checkMailAddress(email, user[0].userId)
    }

    return (
        <EditProfileStyles>
            <Header></Header>
            <div className="edit-wrapper">
                <div className="container">
                    <div className="fields-wrappers">
                        <div className="left-bar">
                            <div className="img-name-link">
                                <div className="profile-img">
                                    <LoadImage className={'profile-image'} path={profileImage} />
                                    <button onClick={() => imageRef.current.click()} className="change-img">Change</button>
                                    <input ref={imageRef} style={{ visibility: "hidden" }} onChange={async (e: any) => {
                                        let formData: any = new FormData()
                                        formData.append("file", e.target.files[0])

                                        const { data } = await axios.post('http://localhost:9000/uploadfile', formData)
                                        let copiedImage = data.result.replace(/\\/g, '/')
                                        setProfileImage(copiedImage)
                                    }} type="file" />
                                </div>
                                <p className="username">{profile?.username}</p>
                                <p className="user-link">{profile?.mailAddress}</p>
                            </div>
                        </div>
                        <div className="middle-bar">
                            <h1 className="title">Profile Settings</h1>

                            <div className="editing-fields-wrapper">
                                <div className="fields-pair">
                                    <div className="field">
                                        <p className="field-title">Username</p>
                                        <input value={username} onChange={(e: any) => setUsername(e.target.value)}
                                            onBlur={() => validateUsername(username)}
                                            className="field-input"
                                            type="text"
                                            placeholder="Username" />
                                        <p ref={usernameRef} className="alert">Username cannot be empty</p>
                                    </div>

                                    <div className="field">
                                        <p className="field-title">User Link</p>
                                        <input value={userLink} onChange={(e: any) => {
                                            validateUserLink(e.target.value)
                                            setUserLink(e.target.value)
                                        }}
                                            className="field-input"
                                            type="text"
                                            placeholder="User Link" />
                                        <p style={{ visibility: validation.userLink ? 'visible' : 'hidden' }}
                                            className="alert">Particular user link already exists</p>
                                    </div>
                                </div>

                                <div className="field">
                                    <p className="field-title">Description</p>
                                    <textarea value={description} onChange={((e: any) => setDescription(e.target.value))}
                                        className="field-input"
                                        placeholder="Description" />
                                </div>

                                <div className="field">
                                    <p className="field-title">Phone Number</p>
                                    <input value={phoneNumber} onChange={((e: any) => setPhoneNumber(e.target.value))}
                                        onBlur={() => validatePhoneNumber(phoneNumber)}
                                        className="field-input"
                                        type="text"
                                        placeholder="Phone Number" />
                                    <p ref={phoneRef} className="alert">Input correct phone number</p>
                                </div>

                                <div className="field">
                                    <p className="field-title">Email</p>
                                    <input value={email} onChange={((e: any) => setEmail(e.target.value))}
                                        onBlur={() => validateEmail(email)}
                                        className="field-input"
                                        type="text"
                                        placeholder="Email" />
                                    <p style={{ visibility: validation.mailAddress ? 'visible' : 'hidden' }} className="alert">Input correct Email</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-bar">
                            <h2 className="privacy">Privacy settings</h2>

                            <div className="editing-fields-wrapper">
                                <div className="check-field">
                                    <p className="field-title">Private profile</p>
                                    <CheckButton checked={privateProfile} setChecked={changePrivacy} />
                                </div>

                                <div className="check-field">
                                    <p className="field-title">Show saved posts</p>
                                    <CheckButton checked={showSavedPosts} setChecked={changeShowSavedPosts} />
                                </div>

                                <div className="check-field">
                                    <p className="field-title">Recommend my posts</p>
                                    <CheckButton checked={recommendPosts} setChecked={changeRecommend} />
                                </div>

                                <button className='more-settings'>More settings</button>

                                <div className="additional-settings">
                                    <div className="field">
                                        <p className="field-title">Current password</p>
                                        <input value={password} onChange={((e: any) => setPassword(e.target.value))}
                                            className="field-input"
                                            type="password"
                                            autoComplete='new-password'
                                            placeholder="Password" />
                                        <p style={{ visibility: validation.password ? 'visible' : 'hidden' }} className="alert">Input correct password</p>
                                    </div>

                                    <div className="field">
                                        <p className="field-title">New password</p>
                                        <input value={newPassword} onChange={((e: any) => {
                                            setNewPassword((prev: any) => e.target.value)
                                        })}
                                            onBlur={() => {
                                                validateNewPassword(newPassword)
                                                validateConfirmNewPassword(confirmNewPassword)
                                            }}
                                            className="field-input"
                                            type="password"
                                            placeholder="New Password" />
                                        <p ref={newPasswordRef} style={{ visibility: validation.mailAddress ? 'visible' : 'hidden' }} className="alert">Password should have at least 4 symbols</p>
                                    </div>

                                    <div className="field">
                                        <p className="field-title">Confirm new password</p>
                                        <input value={confirmNewPassword} onChange={((e: any) => {
                                            setConfirmNewPassword((prev: any) => e.target.value)
                                            validateConfirmNewPassword(confirmNewPassword)
                                        })}
                                            onBlur={() => validateConfirmNewPassword(confirmNewPassword)}
                                            className="field-input"
                                            type="password"
                                            placeholder="Confirm New Password" />
                                        <p ref={confirmNewPasswordRef} style={{ visibility: validation.mailAddress ? 'visible' : 'hidden' }} className="alert">Passwords should match</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="save-changes" onClick={saveEdited}>Save</button>
                </div>
            </div>
        </EditProfileStyles>
    )
}

export default EditProfile;
