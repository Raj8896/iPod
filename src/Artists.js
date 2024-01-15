// importing
import React from 'react';

class Artists extends React.Component{
    render(){
        return(
            <div style={styles.artistsContainer}>
                {/* title bar */}
                 <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png" alt=''></img>
                </div>
                {/* styling of artist */}
                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>   
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem',fontSize:'25px'}}>iPod.js <span><img style={styles.image} src="https://image.flaticon.com/icons/svg/953/953909.svg" alt=''/></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Arbaz Khan</p>
                    </div> 
                </div>
                {/* thanking */}
                <div style={styles.info2}>
                    <p style={{alignSelf : 'center', fontWeight:'bold'}}>Hope you liked the app!</p> 
                    <p style={{alignSelf : 'center', fontWeight:'bold'}}>Thank You! Visit Again :)</p>
                </div>
            </div>
        );
    }
}
// styles for artist
const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem',
        marginLeft: '70px'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '100%',
        // display : 'flex',
        // flexDirection : 'row',
        // flexWrap : 'wrap',
        // justifyContent : 'center'
        textAlign : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'96%',
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
export default Artists;