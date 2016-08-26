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


class Bandeau extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./css/bandeau.css');
    }

    render() {
        //console.log("element", this.props.element.text);
        /**http://stackoverflow.com/questions/35269036/drawing-random-coloured-circles-on-html-canvas-with-js    paper.js**/
        return(
            <div className="bandeau">
                <div className="col-lg-12">
                </div>
            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(Bandeau);
