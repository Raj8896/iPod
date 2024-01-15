//importing
import React from 'react';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    //constructor 
    constructor(){
        super();
        this.state = {
            activeItem : 'Music',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }
    //to rotate wheel
    rotateWheel = () => {
        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //Perform Operations
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
    }
    //to change page 
    changePage = () => {
        //change the pages acc to the command
        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'Music',
                activePage : this.state.activeItem,
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic',
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }         
    }
    // to change page back to home screen
    changePageToHomeScreen = () => {
        // changing pages acc to the command
        if(this.state.activePage === 'Mymusic' || this.state.activePage === 'Artists'){
            this.setState({
                activeItem : 'Mymusic',
                activePage : 'Home',
                play : false,
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
    }
    //toggle
    toggle = () => {
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
            console.log("toggled")
        }
    }
    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
        console.log(audio)
        this.setState({
            audio : audio,
        })
        console.log(this.state)
    }

    render() {
        return (
            <div style = {styles.ipodContainer}>
                {/* audio tag for music */}
                <audio className="audio-element">
                    {/* <source src={}></source> */}
                </audio>    
                {/* to show the elements of screen */}
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio} />
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    {/* menu button */}
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <i onClick={this.changePageToHomeScreen} style = {styles.image}> MENU </i>
                        </div> 
                    </div>
                    {/* forward and backward button */}
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>       
                            <img style = {styles.icon} src='https://cdn-icons-png.flaticon.com/512/39/39712.png' alt=''></img>
                            <div onClick={this.changePage} style={{backgroundImage: 'linear-gradient(45deg, #8c8181, transparent)' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.icon} src='https://cdn-icons-png.flaticon.com/512/660/660276.png' alt=''></img>
                        </div>
                    </div>
                    {/* play pause button */}
                    <div style = {styles.buttonContainer}>
                        <div onClick={this.toggle} style = {styles.playButton}>
                            <img onClick={this.toggle} style = {styles.icon} src='https://cdn-icons-png.flaticon.com/512/7960/7960808.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// styling for iPod
const styles = {
    ipodContainer : {
        height : '35rem',
        width : '20rem',
        backgroundColor : 'yellow',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px',
        boxShadow : '7px 14px 0px'
    },
    wheel : {
        width : '75%',
        height : '40%',
        margin : '1rem auto',
        backgroundColor : '#C0C0C0',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    image: {
        alignSelf : 'center',
        fontSize: '1.5rem',
        color : 'black',
        fontWeight:'700',
    },
    icon:{
        height:'2rem',
        display:'flex',
        alignSelf:'center',

    }
}
export default Ipod;