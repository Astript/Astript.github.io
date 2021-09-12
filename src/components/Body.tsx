import * as React from "react";
import withStyles, {
    WithStyles,
} from "@material-ui/core/styles/withStyles";
import {AppBar, Button, Slide} from "@material-ui/core";
import '../styles/box.css';
import {styles} from "../styles/body";
import logo from "../img/astript_icon_black.png";
interface Props extends WithStyles<typeof styles> {
    title?: string;
}

interface State {
    isHide: boolean;
}

class Body extends React.Component<Props, State> {
    readonly state: State = {
        isHide: false,
    };

    Hide = () => {
        console.log(this.state.isHide)
        this.setState({isHide: !this.state.isHide})
    }
    public render() {
        const {classes, title} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.header && classes.fullscreen}>
                    <div className={classes.container}>
                        <section className={"box boxBgPhoto"}>
                            <Slide appear={this.state.isHide} direction={"down"} in={this.state.isHide}>
                                <AppBar className={classes.header}>{title}</AppBar>
                            </Slide>
                            <div className={classes.title}>
                                <img className={"logo"} src={logo} alt="img"/>
                                <p className={"subtext"}>This is developed by Narange, Taku</p>
                            </div>
                        </section>
                        <section className="box">
                            <div>What is Astript</div>
                            <Button onClick={this.Hide}>Hide Button</Button>
                        </section>
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Body);
