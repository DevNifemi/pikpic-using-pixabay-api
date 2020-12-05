import React, { Component } from 'react';
import styles from './home-bg.module.css';
import SearchInput from './search_input'

class HomeBackground extends Component {
    render() { 
        return (
            <div className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.top}>
                    <h1>Get random pictures for free!</h1>
                    <h2>Over a million pictures here for you</h2>
                </div>

                <div className={styles.search_form}>
                    <form className={styles.media_search}>
                      <SearchInput/>
                    </form>
                </div>
                
                <p>We can get you more pictures!</p>

            </div>
        );
    }
}
 
export default HomeBackground;