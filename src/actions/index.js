const dhisApi = require('../services/dhisApi');
//Action types
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const GET_REPORTS_PENDING = 'GET_REPORTS_PENDING';
export const GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS';
export const GET_REPORTS_FAILED = 'GET_REPORTS_FAILED';

export const GET_REPORT_PENDING = 'GET_REPORT_PENDING';
export const GET_REPORT_SUCCESS = 'GET_REPORT_SUCCESS';
export const GET_REPORT_FAILED = 'GET_REPORT_FAILED';

export const GET_TRACKED_ENTITY_INSTANCE_PENDING = 'GET_TRACKED_ENTITY_INSTANCE_PENDING';
export const GET_TRACKED_ENTITY_INSTANCE_SUCCESS = 'GET_TRACKED_ENTITY_INSTANCE_SUCCESS';
export const GET_TRACKED_ENTITY_INSTANCE_FAILED = 'GET_TRACKED_ENTITY_INSTANCE_FAILED';

export const POST_REPORT_PENDING = 'POST_REPORT_PENDING';
export const POST_REPORT_SUCCESS = 'POST_REPORT_SUCCESS';
export const POST_REPORT_FAILED = 'POST_REPORT_FAILED';

export const PUT_REPORT_PENDING = 'PUT_REPORT_PENDING';
export const PUT_REPORT_SUCCESS = 'PUT_REPORT_SUCCESS';
export const PUT_REPORT_FAILED = 'PUT_REPORT_FAILED';

export const GET_PROGRAM_STAGE_PENDING = 'GET_PROGRAM_STAGE_PENDING';
export const GET_PROGRAM_STAGE_SUCCESS = 'GET_PROGRAM_STAGE_SUCCESS';
export const GET_PROGRAM_STAGE_FAILED = 'GET_PROGRAM_STAGE_FAILED';

export const GET_USER_ROLE_PENDING = 'GET_USER_ROLE_PENDING';
export const GET_USER_ROLE_SUCCESS = 'GET_USER_ROLE_SUCCESS';
export const GET_USER_ROLE_FAILED = 'GET_USER_ROLE_FAILED';

export const GET_FORM_PENDING = 'GET_FORM_PENDING';
export const GET_FORM_SUCCESS = 'GET_FORM_SUCCESS';
export const GET_FORM_FAILED = 'GET_FORM_FAILED';

export const GET_OPTION_SET_PENDING = 'GET_OPTION_SET_PENDING';
export const GET_OPTION_SET_SUCCESS = 'GET_OPTION_SET_SUCCESS';
export const GET_OPTION_SET_FAILED = 'GET_OPTION_SET_FAILED';

export const GET_OPTION_PENDING = 'GET_OPTION_PENDING';
export const GET_OPTION_SUCCESS = 'GET_OPTION_SUCCESS';
export const GET_OPTION_FAILED = 'GET_OPTION_FAILED';

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_FORM = 'UPDATE_FORM';

export const UPDATE_NOTE = 'UPDATE_NOTE';

export const POST_NOTE_PENDING = 'POST_NOTE_PENDING';
export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const POST_NOTE_FAILED = 'POST_NOTE_FAILED';

export const CLEAR_NOTE = 'CLEAR_NOTE';


function getUserPending() {
    return {type: GET_USER_PENDING};
}

function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        user
    };
}

function getUserFailed(error) {
    return {
        type: GET_USER_FAILED,
        error
    };
}

function getReportsPending() {
    return {type: GET_REPORTS_PENDING};
}

function getReportsSuccess(reports) {
    return {
        type: GET_REPORTS_SUCCESS,
        reports
    };
}

function getReportsFailed(error) {
    return {
        type: GET_REPORTS_FAILED,
        error
    };
}

function getReportPending() {
    return {type: GET_REPORT_PENDING};
}

function getReportSuccess(report) {
    return {
        type: GET_REPORT_SUCCESS,
        report
    };
}

function getReportFailed(error) {
    return {
        type: GET_REPORT_FAILED,
        error
    };
}

function getUserRolePending() {
    return {type: GET_USER_ROLE_PENDING};
}

function getUserRoleSuccess(userRole) {
    return {type: GET_USER_ROLE_SUCCESS, userRole};
}

function getUserRoleFailed(error) {
    return {type: GET_USER_ROLE_FAILED, error};
}

function postReportPending() {
    return {
        type: POST_REPORT_PENDING
    };
}

function postReportSuccess() {
    return {
        type: POST_REPORT_SUCCESS
    };
}

function postReportFailed(error) {
    return {
        type: POST_REPORT_FAILED,
        error
    };
}

function putReportPending() {
    return {
        type: PUT_REPORT_PENDING
    };
}

function putReportSuccess() {
    return {
        type: PUT_REPORT_SUCCESS
    };
}

function putReportFailed(error) {
    return {
        type: PUT_REPORT_FAILED,
        error
    };
}

function getTrackedEntityInstancePending() {
    return {
        type: GET_TRACKED_ENTITY_INSTANCE_PENDING
    };
}

function getTrackedEntityInstanceSuccess(trackedEntityInstance) {
    return {
        type: GET_TRACKED_ENTITY_INSTANCE_SUCCESS,
        trackedEntityInstance
    };
}

function getTrackedEntityInstanceFailed(error) {
    return {
        type: GET_TRACKED_ENTITY_INSTANCE_FAILED,
        error
    };
}

function getProgramStagePending() {
    return {
        type: GET_PROGRAM_STAGE_PENDING
    };
}

function getProgramStageSuccess(programStage) {
    return {
        type: GET_PROGRAM_STAGE_SUCCESS,
        programStage
    };
}

function getProgramStageFailed(error) {
    return {
        type: GET_PROGRAM_STAGE_FAILED,
        error
    };
}

function getFormPending() {
    return {
        type: GET_FORM_PENDING
    };
}

function getFormSuccess(form) {
    return {
        type: GET_FORM_SUCCESS,
        form
    };
}

function getFormFailed(error) {
    return {
        type: GET_FORM_FAILED,
        error
    };
}

function getOptionSetPending() {
    return {
        type: GET_OPTION_SET_PENDING
    };
}

function getOptionSetSuccess(optionSet) {
    return {
        type: GET_OPTION_SET_SUCCESS,
        optionSet
    };
}

function getOptionSetFailed(error) {
    return {
        type: GET_OPTION_SET_FAILED,
        error
    };
}

function getOptionPending() {
    return {
        type: GET_OPTION_PENDING
    };
}

function getOptionSuccess(option) {
    return {
        type: GET_OPTION_SUCCESS,
        option
    };
}

function getOptionFailed(error) {
    return {
        type: GET_OPTION_FAILED,
        error
    };
}

function postNotePending(){
    return {
        type: POST_NOTE_PENDING
    };
}

function postNoteSuccess() {
    return {
        type: POST_NOTE_SUCCESS
    };
}

function postNoteFailed(error) {
    return {
        type: POST_NOTE_FAILED,
        error
    };
}
//Exports
export function getUser() {
    return (dispatch) => {
        dispatch(getUserPending());

        return dhisApi.getUser()
            .then((user) => dispatch(getUserSuccess(user)))
            .then(() => dispatch(getUserRole()))
            .then(() => dispatch(getTrackedEntityInstance()))
            .catch((error) => dispatch(getUserFailed(error)));
    };
}

export function getReports() {
    return (dispatch, getState) => {
        dispatch(getReportsPending());

        const usersOrg = getState().userRole.displayName === 'DHO' ? '' : getState().user.teiSearchOrganisationUnits[0].id;
        const filter = getState().filter;
        return dhisApi.getReports(usersOrg, filter)
            .then((reports) => dispatch(getReportsSuccess(reports)))
            .catch((error) => dispatch(getReportsFailed(error)));
    };
}

export function getReport(eventId) {
    return (dispatch) => {
        dispatch(getReportPending());

        return dhisApi.getReport(eventId)
            .then((report) => dispatch(getReportSuccess(report)))
            .catch((error) => dispatch(getReportFailed(error)));
    };
}

export function postReport(report) {
    return (dispatch, getState) => {
        dispatch(postReportPending());
        const config = {
            programStage: getState().programStage,
            program: process.env.REACT_APP_PROGRAM_ID,
            trackedEntityInstance: getState().trackedEntityInstance,
            orgUnit: getState().user.teiSearchOrganisationUnits[0].id,
            status: 'ACTIVE'
        };
        const mergedReport = {...config, ...report};
        return dhisApi.postReport(mergedReport)
            .then(() => dispatch(postReportSuccess()))
            .catch((error) => postReportFailed(error));
    };
}

export function putReport(report, eventId) {
    return (dispatch) => {
        dispatch(putReportPending());
        return dhisApi.putReport(report, eventId)
            .then(() => dispatch(putReportSuccess()))
            .catch((error) => putReportFailed(error));
    };
}

export function getTrackedEntityInstance() {
    return (dispatch, getState) => {
        dispatch(getTrackedEntityInstancePending());

        const usersOrg = getState().user.teiSearchOrganisationUnits[0].id;

        return dhisApi.getTrackedEntityInstance(usersOrg)
            .then((trackedEntityInstance) => dispatch(getTrackedEntityInstanceSuccess(trackedEntityInstance.trackedEntityInstances[0].trackedEntityInstance)))
            .catch((error) => dispatch(getTrackedEntityInstanceFailed(error)));
    };
}

export function getProgramStage() {
    return (dispatch) => {
        dispatch(getProgramStagePending());

        return dhisApi.getProgramStage()
            .then((program) => dispatch(getProgramStageSuccess(program.programStages[0].id)))
            .then(() => dispatch(getForm()))
            .catch((error) => dispatch(getProgramStageFailed(error)));
    };
}

export function getUserRole() {
    return (dispatch) => {
        dispatch(getUserRolePending());

        return dhisApi.getUserRole()
            .then((userRole) => {
                    const role = userRole.userCredentials.userRoles.filter(u => u.displayName === 'DHO' || u.displayName === 'Doctor')[0];
                dispatch(getUserRoleSuccess(role));
                }
            )
            .catch((error) => dispatch(getUserRoleFailed(error)));
    };
}

export function getForm() {
    return (dispatch, getState) => {
        dispatch(getFormPending());

        const programStage = getState().programStage;

        return dhisApi
            .getForm(programStage)
            .then(form => dispatch(getFormSuccess(form)))
            .then(() => dispatch(getOptionSet()))
            .catch(error => dispatch(getFormFailed(error)));
    };
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
    error: null
  };
};

export const clearSuccess = () => {
    return {
        type: CLEAR_SUCCESS,
        success: null
    };
};
export const updateFilter = (filter) => {
    return {
        type: UPDATE_FILTER,
        filter: filter
    };
};

export const updateNote = (note) => {
    return {
        type: UPDATE_NOTE,
        note: note
    };
};
export const getOptionSet = () => {
    return (dispatch, getState) => {
        const inputsWithOptions = getState().form.programStageDataElements.filter(i => i.dataElement.optionSetValue);

        inputsWithOptions.forEach(function (element) {
            dispatch(getOptionSetPending());
            return dhisApi.getOptionSet(element.dataElement.optionSet.id)
                .then(optionSet => {
                    dispatch(getOptionSetSuccess(optionSet));
                    dispatch(getOption(optionSet));
                })
                .catch(error => dispatch(getOptionSetFailed(error)));
        });
    };
};


export const getOption = (optionSet) => {
    return (dispatch) => {
        dispatch(getOptionPending());

        optionSet.options.forEach(function (element) {
            dispatch(getOptionPending());
            return dhisApi.getOption(element.id)
                .then(option => dispatch(getOptionSuccess(option)))
                .catch(error => dispatch(getOptionFailed(error)));
        });
    };
};

export const updateForm = (report) => {
    return {
        type: UPDATE_FORM,
        report: report
    };
};

export const clearNote = () => {
    return{
        type:CLEAR_NOTE
    };
};

export function postNote(note, eventId) {

    return (dispatch, getState) => {
        dispatch(postNotePending());
        let noteArray = [note];
        const payload = {
            programStage: getState().programStage,
            program: process.env.REACT_APP_PROGRAM_ID,
            trackedEntityInstance: getState().trackedEntityInstance,
            orgUnit: getState().user.teiSearchOrganisationUnits[0].id,
            event: eventId,
            notes: noteArray
                };
        return dhisApi.postNote(payload, eventId)
            .then(() => dispatch(postNoteSuccess()))
            .catch((error) => postNoteFailed(error));
    };
}

