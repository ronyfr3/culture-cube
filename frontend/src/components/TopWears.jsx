import React from 'react'
import classes from './TopWears.module.css'

const TopWears = () => {
    return (
        <section className={classes.topWearsSection}>
            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/top_wears_bg.png"})`}} className={`${classes.topWearsWrapper} container`}>
                <div className={classes.topWears}>
                <div>
                            <h2>Kids Fashion</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi.</p>
                            <button className="btn">Shop now</button>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default TopWears
