
// importing
import React from 'react';


class MyMusic extends React.Component{
    render(){
        return(
            <div style={styles.settings} >
                {/* title bar */}
                <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>Songs</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png" alt='' ></img>
                </div>
                {/* game */}
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://media.giphy.com/media/w5eFyOHmkS8uc/giphy.gif" alt=''></img>
                </div>
            </div>
        );
    }
}
// styling for games
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'96%',
        alignSelf : 'center',
        borderRadius:'0px 0px 10px 10px'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'
    },
    battery :{
        width : '20px',
        height: '20px',
    }
}
export default MyMusic;