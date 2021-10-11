import {createMuiTheme} from '@material-ui/core/styles';


class ThemaCustomized {

    static system() {

        return createMuiTheme({
            palette: {
                type: 'light',
                primary: {
                    main: '#e78c20'
                },
                secondary: {
                    main: '#e55827',
                },
            },
            overrides: {
                MuiTooltip: {
                    tooltip: {
                        fontSize: '1em',
                        backgroundColor: '#e3e3e3',
                        color: '#216a9f',
                    }
                }
            },
        });
    }
}

export default ThemaCustomized