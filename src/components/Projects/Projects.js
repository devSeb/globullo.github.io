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


class Projects extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./css/projects.css');
    }

    render() {
        //console.log("element", this.props.element.text);

        /** Badge android
         *
         * https://play.google.com/intl/en_us/badges/
         *
         **/

        var projects = [
            {   icon: "fa fa-android",
                title : "Name",
                desc : "Description",
                techno : [ "Android", "Java"]
            }
        ];
        return(
            <div className="projects">

                { projects && projects.map(function (item, index ) {
                    return (
                        <div key={index} className="project">


                            <h2> <i className={( item.icon) ? item.icon : ""}/> {item.title}</h2>

                            <div className="container">
                            <div className="col-md-10 project-margin-left">
                                <div className="row">
                                    <ul className="list-inline">
                                        { item.techno && item.techno.map(function (itemTechno, indexTechno){
                                            console.log("tech", itemTechno, indexTechno);
                                            return (
                                                <li key={indexTechno}>
                                                    {itemTechno &&
                                                    <label className="label label-default">
                                                        {itemTechno}
                                                    </label>
                                                    }
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="col-md-10 project-margin-between">
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="container">
                                <div className="-project-margin-between">
                                    <div className="row">
                                        <ul className="list-inline">
                                            <li>
                                                <a href='http://play.google.com/store?utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                                    <img alt='Get it on Google Play'
                                                         className="img-android-badge"
                                                         src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
                                                </a>
                                            </li>
                                            <li>
                                                <button className="btn btn-success"> Documentation </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(Projects);
