import {
    CLEAR_ERROR,
    CLEAR_NOTE,
    CLEAR_SUCCESS,
    GET_FORM_FAILED,
    GET_FORM_PENDING,
    GET_FORM_SUCCESS,
    GET_OPTION_FAILED,
    GET_OPTION_SET_FAILED,
    GET_OPTION_SET_SUCCESS,
    GET_OPTION_SUCCESS,
    GET_PROGRAM_STAGE_FAILED,
    GET_PROGRAM_STAGE_SUCCESS,
    GET_REPORT_FAILED,
    GET_REPORT_PENDING,
    GET_REPORT_SUCCESS,
    GET_REPORTS_FAILED,
    GET_REPORTS_PENDING,
    GET_REPORTS_SUCCESS,
    GET_TRACKED_ENTITY_INSTANCE_FAILED,
    GET_TRACKED_ENTITY_INSTANCE_SUCCESS,
    GET_USER_FAILED,
    GET_USER_ROLE_FAILED,
    GET_USER_ROLE_SUCCESS,
    GET_USER_SUCCESS,
    POST_NOTE_FAILED,
    POST_NOTE_SUCCESS,
    POST_REPORT_FAILED,
    POST_REPORT_SUCCESS,
    PUT_REPORT_FAILED,
    PUT_REPORT_SUCCESS,
    UPDATE_FILTER,
    UPDATE_FORM,
    UPDATE_NOTE
} from '../actions';

const initialState = {
    user: null,
    userRole: null,
    reports: {pager: {pageCount: 0}, events: []},
    loading: false,
    error: null,
    trackedEntityInstance: null,
    programStage: null,
    report: null,
    filter: {
        status: '',
        eventDate: '',
        page: 1,
        pageSize: 10,
    },
    form: {programStageDataElements: []},
    optionSets: [],
    options: [],
    success: null,
    notes: [],
    note: null,
    noteSuccess: null

};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        case GET_USER_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case GET_REPORTS_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_REPORTS_SUCCESS:
            return {
                ...state,
                reports: action.reports,
                loading: false
            };
        case GET_REPORTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case GET_REPORT_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_REPORT_SUCCESS:
            return {
                ...state,
                report: action.report,
                loading: false
            };
        case GET_REPORT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case POST_REPORT_SUCCESS:
            return {
                ...state,
                success: true
            };
        case POST_REPORT_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case GET_TRACKED_ENTITY_INSTANCE_SUCCESS:
            return {
                ...state,
                trackedEntityInstance: action.trackedEntityInstance
            };
        case GET_TRACKED_ENTITY_INSTANCE_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case GET_PROGRAM_STAGE_SUCCESS:
            return {
                ...state,
                programStage: action.programStage
            };
        case GET_PROGRAM_STAGE_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case PUT_REPORT_SUCCESS:
            return {
                ...state,
                success: true,
            };
        case PUT_REPORT_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case GET_USER_ROLE_SUCCESS:
            return {
                ...state,
                userRole: action.userRole,
            };
        case GET_USER_ROLE_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case GET_FORM_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                form: action.form,
            };
        case GET_FORM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case UPDATE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        case GET_OPTION_SET_SUCCESS:
            return {
                ...state,
                optionSets: [...state.optionSets, action.optionSet]
            };
        case GET_OPTION_SET_FAILED:
            return {
                ...state,
                error: action.error
            };
        case GET_OPTION_SUCCESS:
            return {
                ...state,
                options: [...state.options, action.option]
            };
        case GET_OPTION_FAILED:
            return {
                ...state,
                error: action.error
            };
        case UPDATE_FORM:
            return {
                ...state,
                report: action.report
            };
        case CLEAR_ERROR:
            return {
              ...state,
              error: action.error
            };
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: action.success
            };
        case UPDATE_NOTE:
            return {
                ...state,
                note: action.note
            };

        case POST_NOTE_FAILED:
            return {
                ...state,
                error: action.error
            };
        case POST_NOTE_SUCCESS:
            return {
                ...state,
                noteSuccess: true,
            };

        case CLEAR_NOTE:
            return {
                ...state,
                noteSuccess: null,
                note: null
            };
        default:
            return state;
    }
}
