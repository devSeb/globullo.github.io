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


class SocialNetwork extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./css/socialNetwork.css');
    }

    render() {
        //console.log("element", this.props.element.text);

        return(
            <div className="social-network">
                <section id="social">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="list-inline">
                                    <li>Find us on:</li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter"></i> Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-github"></i> GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://speakerdeck.com/"><i className="fa fa-th"></i> Speakerdeck</a>
                                    </li>
                                    <li>
                                        <a href="http://klout.com/#/"><i className="fa fa-comment"></i> Klout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(SocialNetwork);
