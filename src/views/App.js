import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** View **/
//import MessageList from '../views/MessageList.js';
import NavBar from '../components/NavBar/NavBar';
import Bandeau from '../components/ImageBandeau/Bandeau';
import SocialNetwork from '../components/SocialNetwork/SocialNetwork';
import Projects from '../components/Projects/Projects';

/** Reducer Action**/
import * as TestActions from '../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
            element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
        TestActions: bindActionCreators(TestActions, dispatch)
});

class App extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test') );

        var displayInfo  = true;
        return(
            <div>
                <div>
                    <NavBar />
                    <Bandeau/>
                    <SocialNetwork />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <Projects />
                            </div>
                            { displayInfo &&
                                <div className="col-md-3">
                                   <h3></h3>
                                </div>
                            }
                        </div>
                    </div>

                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <p className="navbar-text">
                                    2016, <a href="mailto:test@test.net">Globullo</a>.
                                </p>
                                <p></p>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>
        );
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(App);

