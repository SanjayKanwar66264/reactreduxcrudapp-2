import React, {Component} from 'react';
import {fetchAppList} from '../actions/index'
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import {Link} from 'react-router';


class ApplicationList extends Component {
    componentWillMount() {
        this.props.fetchAppList()
    }

    renderAppList() {
        return this.props.applications.map((app) => {
            return (<li className="list-group-item" key={app.id}>
                    <strong>{app.title}</strong>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="text-xs-right">
                <Link to="/application/new" className="btn btn-primary">
                    Create
                </Link>

                <ul className="list-group">
                    {this.renderAppList()}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAppList}, dispatch)
}
function mapStateToProps(state) {
    return {applications: state.applications.all}

}

export  default connect(mapStateToProps, mapDispatchToProps)(ApplicationList);