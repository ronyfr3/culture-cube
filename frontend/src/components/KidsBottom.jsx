import React from 'react'
import classes from "./KidsBottom.module.css"

const KidsBottom = () => {
    return (
        <section className={classes.kidsBottomSection}>
            <div className={`${classes.kidsBottomWrapper} container`}>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/kids_bg.png"})`}} className={classes.kidsBottomLeft}>
                        <div>
                            <h2>Kids Fashion</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi.</p>
                            <button className="btn">Shop now</button>
                        </div>
                </div>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bottom_bg.png"})`}} className={classes.kidsBottomRight}>
                <div><h2>Bottom Wears</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi.</p>
                            <button className="btn">Shop now</button></div>
                </div>
            </div>
        </section>
    )
}

export default KidsBottom
