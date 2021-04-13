import React from 'react';
import Body from './components/Body';
import {CssBaseline, withStyles} from "@material-ui/core";
import {createStyles, WithStyles} from "@material-ui/styles";
import withRoot from "./utils/withRoot";

const styles = createStyles({
    root: {
        fontFamily: "sans-serif",
    },
    scrollArea : {
        width: "100%",
        height: "100vh",
        overflow: "auto",
        webkitScrollBehavior: "smooth",
        scrollBehavior: "smooth",
        webkitScrollSnapType: "mandatory",
        scrollSnapType: "",
        //msScrollSnapPointsY: repeat(100%)",
        msScrollSnapPointsY: "repeat(100%)",
    },
    box : {
        width: "100vw",
        height: "100vh",
    },
    // home: {},
    // // Theme Colors
    // palette: {
    //     primary: purple,
    //     secondary: purple,
    // },
    // body: {
    //     backgroundColor: "red",
    // },
    // // typography
    // typography: {
    //     //useNextVariants: true
    // },
    // section: {
    //     display: "block",
    //     background: "#CFF",
    //     height: "100%",
    //     width: "100%",
    //     padding: "60px",
    //     paddingLeft: "120px",
    //     boxSizing: "border-box"
    // }
});

type Props = WithStyles<typeof styles>;

const App: React.FC<Props> = ({classes}: Props) => {
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Body title={"Astript"}/>
        </div>
    );
}
export default withRoot(withStyles(styles)(App));
