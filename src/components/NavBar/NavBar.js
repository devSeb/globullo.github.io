import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
import * as TestActions from '../../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
    element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    TestActions: bindActionCreators(TestActions, dispatch)
});


class NavBar extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        console.log("element", this.props.element.text);

        return(
            <div className="nav-bar">
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="fa fa-bar"></span>
                                <span className="fa fa-bar"></span>
                                <span className="fa fa-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/"> Globullo <sup></sup>
                            </a>
                        </div>

                        <div className="navbar-collapse collapse navbar-ex1-collapse">
                            <div className="divider fg-color-white"></div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="/"><i className="fa fa-home"></i> Accueil</a>
                                </li>
                                <li>
                                    <a href="mailto:test@test.net"><i className="fa fa-envelope"></i> Contact</a>
                                </li>
                                <li>
                                    <a href="/"><i className="-fa -fa-calendar"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(NavBar);
