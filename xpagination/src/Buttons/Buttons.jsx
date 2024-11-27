import React from 'react';
import styles from './Buttons.module.css';


const Buttons = ({page, setPage, maxPage}) => {
    const increasePage = () => {
        console.log(maxPage);
        if(page<maxPage)
        {
            console.log("inside");
            setPage(p=>p+1);
        }
    }
    const decreasePage = () => {
        if(page>1)
            setPage(p=>p-1);
    }
    return (<div>
        <button className={styles.btn}
         disabled = {page==1}
          onClick={decreasePage}>Previous</button>
        <span>{page}</span>
        <button className={styles.btn} 
        disabled = {page==maxPage} 
        onClick={increasePage}>Next</button>
    </div>)
}

export default Buttons;