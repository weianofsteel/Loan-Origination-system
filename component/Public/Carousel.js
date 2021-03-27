import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';

class CustomizeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        this.handleTimer();
    }

    componentWillUnmount() {
        clearInterval(this.handleTimer);
    }

    handleTimer() {
        setInterval(()=>{this.timer();},1000);
    }

    timer() {
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    }

    handleNext() {
        if(!this.props.rotateBy) {
            this.setState((prevState)=>({
                count: prevState.count + 3
            }));
        }else {
            this.setState((prevState, props)=>({
                count: prevState.count + props.rotateBy
            }));
        }
    }

    handleBack() {
        if(!this.props.rotateBy) {
            if(this.state.count > 3) {
                this.setState((prevState)=>({
                    count: prevState.count - 3
                }));
            }else {
                this.setState({count: 0});
            }
        }else {
            if(this.state.count > 3) {
                this.setState((prevState, props)=>({
                    count: prevState.count - props.rotateBy
                }));
            }else {
                this.setState({count: 0});
            }
            
        }
    }

    render() {
        
        const {
            imgsrc,
            rotateBy,
            mode,
            controlButton,
            navigateButton
        } = this.props;

        const list = [];

        if(!imgsrc) {
            return list
        }else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div key={i}>
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <div style={{width:'100%'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%'}}/>
                                </div>
                            :''}        
                        </div>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div key={i}>
                            {parseInt( this.state.count / rotateBy) % imgsrc.length === i ?
                                <div style={{width:'100%'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%'}}/>
                                </div>
                            :''}        
                        </div>
                    )
                }
            }
        }
    
        const RadioNavigation = [];

        if(!imgsrc) {
            return RadioNavigation
        }
        else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    RadioNavigation.push(
                        <div key={i} style={{display:'inline', textAlign:'center'}}>
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <IconButton size="small" onClick={()=>{this.setState({count: 3 * i})}}>
                                    <PlayCircleFilledIcon style={{color:(mode==='day'?'black':'white')}}/>
                                </IconButton>
                            :
                                <IconButton size="small" onClick={()=>{this.setState({count: 3 * i})}}>
                                    <RadioButtonUncheckedIcon style={{color:(mode==='day'?'black':'white')}}/>
                                </IconButton>
                            }
                        </div>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    RadioNavigation.push(
                        <div key={i} style={{display:'inline', textAlign:'center'}}>
                            {parseInt( this.state.count / rotateBy) % imgsrc.length === i ?
                                <IconButton size="small" onClick={()=>{this.setState({count: rotateBy * i})}}>
                                    <PlayCircleFilledIcon style={{color:(mode==='day'?'black':'white')}}/>
                                </IconButton>
                            :
                                <IconButton size="small" onClick={()=>{this.setState({count: rotateBy * i})}}>
                                    <RadioButtonUncheckedIcon style={{color:(mode==='day'?'black':'white')}}/>
                                </IconButton>
                            }
                        </div>
                    )
                }
            }
        }

        return(
            <React.Fragment>

                <Grid container>
                
                    <Grid item xs={12}>
                        {list}
                    </Grid>

                
                </Grid>

                <Grid container style={{marginLeft:'-1rem'}}>
                    <Grid item xs={1} md={1} style={{paddingLeft:0}}>
                        {controlButton === true &&
                            <Button 
                                style={{color:(mode==='day'?'black':'white')}}
                                onClick={this.handleBack}
                            >
                                <ArrowBackIosIcon/>
                            </Button>
                        }
                    </Grid>
                    {navigateButton===true?
                        <Grid item xs={10} md={10} style={{textAlign:'center'}}>
                            {RadioNavigation}
                        </Grid>
                        :<Grid item xs={10} style={{textAlign:'center'}}></Grid>
                    }               
                    <Grid item xs={1} md={1}>
                        {controlButton === true &&
                            <Button 
                                onClick={this.handleNext}
                                style={{color:(mode==='day'?'black':'white')}}
                            >
                                <ArrowForwardIosIcon/>
                            </Button>
                        }
                    </Grid>
                </Grid>
                

            </React.Fragment>
        )
    }
}

export default CustomizeCarousel;