import React from "react"
import notFoundStyles from '../style/pagenotfound.module.css'

const PageWasNotFound = () => {
  return (
    <div className={notFoundStyles.notFoundContainer}>
      <h1 className={notFoundStyles.notfoundH1}>Page was not found</h1>
    </div>
  )
};

export default PageWasNotFound;
