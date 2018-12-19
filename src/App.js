import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Submit from './components/Submit';
import ReportList from './components/ReportList';
import Error from './components/Error';
import NotFound from './components/NotFound';
import './App.scss';
import {
    clearError,
    clearNote,
    clearSuccess,
    getForm,
    getOption,
    getOptionSet,
    getProgramStage,
    getReport,
    getReports,
    getUser,
    getUserRole,
    postNote,
    postReport,
    putReport,
    updateFilter,
    updateForm,
    updateNote
} from './actions';

class App extends Component {
    componentDidMount() {
        this.props.getUser();
        this.props.getProgramStage();
    }

    checkError(error) {
        if (error !== null) {
            return <Error clearError={this.props.clearError} message={error}/>;
      }
    }

    handleNavigation() {
        this.props.updateForm(null);
        this.props.clearSuccess();
    }

    render() {
        const {
            reports,
            userRole,
            filter,
            updateFilter,
            getReports,
            loading,
            user,
            getForm,
            getProgramStage,
            form,
            options,
            updateForm,
            report,
            putReport,
            postReport,
            getReport,
            success,
            clearSuccess,
            postNote,
            note,
            updateNote,
            clearNote,
            noteSuccess,
            baseURL
        } = this.props;

        return (
            // BrowserRouter should be used when we have a server that will handle dynamic requests, while the HashRouter should be used for static websites (where the server can only respond to requests for files that it knows about).
            // Change accordingly depening on our usecase.
            <Router>
                <div className="App">
                    <Header baseURL={baseURL} userRole={userRole} handleNavigation={() => this.handleNavigation()}
                            user={user} title="DHIS2"/>
                    <div className="Page">
                        {this.checkError(this.props.error)}
                        {userRole === null ?
                            <i className='fas fa-spinner fa-spin'></i> :
                            <Switch>
                                <Route exact path={baseURL}>
                                    <ReportList
                                        reports={reports}
                                        userRole={userRole}
                                        filter={filter}
                                        updateFilter={updateFilter}
                                        getReports={getReports}
                                        loading={loading}
                                        user={user}
                                        getReport={getReport}
                                        options={options}
                                        baseURL={baseURL}
                                    />
                                </Route>
                                <Route exact path={baseURL + 'submit'}>
                                    <Submit
                                        getForm={getForm}
                                        getProgramStage={getProgramStage}
                                        form={form}
                                        options={options}
                                        userRole={userRole}
                                        updateForm={updateForm}
                                        report={report}
                                        putReport={putReport}
                                        postReport={postReport}
                                        success={success}
                                        loading={loading}
                                        clearSuccess={clearSuccess}
                                        postNote={postNote}
                                        note={note}
                                        updateNote={updateNote}
                                        clearNote={clearNote}
                                        noteSuccess={noteSuccess}
                                        getReport={getReport}
                                        baseURL={baseURL}
                                    />
                                </Route>
                                <Route component={NotFound}/>
                            </Switch>
                        }
                    </div>
                </div>
            </Router>
        );
    }
}

/**
 * Mapping redux state to react props
 */
const mapStateToProps = state => {
    return {
        user: state.user,
        reports: state.reports,
        loading: state.loading,
        error: state.error,
        userRole: state.userRole,
        programStage: state.programStage,
        form: state.form,
        filter: state.filter,
        optionSet: state.optionSet,
        options: state.options,
        report: state.report,
        success: state.success,
        notes: state.notes,
        note: state.note,
        noteSuccess: state.noteSuccess
    };
};


/**
 *   Mapping actions via dispatcher to react props
 */
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUser,
            getReports,
            getUserRole,
            getProgramStage,
            updateFilter,
            getForm,
            getOptionSet,
            getOption,
            updateForm,
            putReport,
            postReport,
            getReport,
            clearError,
            clearSuccess,
            postNote,
            updateNote,
            clearNote
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
