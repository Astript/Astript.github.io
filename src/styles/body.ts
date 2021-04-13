import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {StyleRules} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
export const styles = (theme: Theme): StyleRules =>
    createStyles({
        root: {
            textAlign: "center"
        },
        header: {
            textAlign: "center",
            borderBottom: "solid 1px #ddd",
            zIndex: 20,
        },
        container: {
            width: '100%',
            margin: "0 auto",
            padding: '0',
            boxSizing: "border-box",
        },
        fullscreen: {
            position: "relative"
        },

        title: {
            textAlign: "center",
            fontFamily: 'Cutive Mono',
            width: "100%",
            fontSize: 60,
            fontWeight: 100,
        },
        // subtext: {
        //     fontFamily: "raleway,century gothic,sans-serif",
        //     paddingTop: "50px",
        //     fontSize: "15px",
        //     fontWeight: 500,
        //     lineHeight: "22px",
        //     letterSpacing: "6px",
        //     textTransform: "uppercase",
        //     color: "#999",
        //     textAlign: "center",
        // },
        body: {
            backgroundColor: "red"
        },
    });