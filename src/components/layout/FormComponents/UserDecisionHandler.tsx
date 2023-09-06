import styles from './UserDecisionHandler.module.css'
import React from 'react'

interface UserDecisionHandler {
    width?: string,
    height?: string,
    lineExtent?: string

}


function UserDecisionHandler(props : UserDecisionHandler) {

    const Line = (
        <div
            className={styles.line}
            style={{
                width: '100%',
                backgroundColor: 'black',
                height: '2px'
            }}
        ></div>
    );

    return (
    <>
     <div style={{
        width: props.width,
        // backgroundColor: 'pink',
        height: props.height,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        gap:'2%'
    }}>
            {Line}
            <span style={{
                fontSize:'0.9vw'

            }}>ou</span>
            {Line}
    </div>
    </>
    )
  
}

export default UserDecisionHandler