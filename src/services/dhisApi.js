const axios = require('axios');
const programId = process.env.REACT_APP_PROGRAM_ID;

let axiosInstance;

if (process.env.NODE_ENV === 'development') {
    axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 30000,
        auth: {username: 'MatsW', password: 'District1-'}
    });
}
else {
    axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_PROD_URL,
        timeout: 10000
    });
}

export const getUser = () => {
    return axiosInstance.get('me').then(({data}) => data);
};

export const getReports = (usersOrg, filter) => {
    return axiosInstance.get(`events?program=${programId}&orgUnit=${usersOrg}&totalPages=true&pageSize=${filter.pageSize}&page=${filter.page}&order=eventDate:DESC`)
        .then(({data}) => data);
};


export const getReport = (eventId) => {
    return axiosInstance.get(`events/${eventId}`)
        .then(({data}) => data);
};

export const postReport = report => {
    return axiosInstance.post('events', report);
};

export const postNote = (note, eventId) => {
    //TODO headers?
    return axiosInstance.post(`events/${eventId}/note`, note);
  };

export const putReport = (report, eventId) => {
    return axiosInstance.put(`events/${eventId}`, report);
};

export const getTrackedEntityInstance = usersOrg => {
  return axiosInstance
      .get(`trackedEntityInstances?ou=${usersOrg}&program=${programId}`)
    .then(({ data }) => data);
};

export const getProgramStage = () => {
  return axiosInstance
      .get(`programs/${programId}`)
    .then(({ data }) => data);
};

export const getUserRole = () => {
  return axiosInstance
      .get('me?fields=userCredentials[userRoles[id,displayName]]')
    .then(({ data }) => data);
};

export const getForm = programStage => {
  return axiosInstance
    .get(
        `programStages/${programStage}?fields=programStageDataElements[dataElement[name,id,valueType,optionSetValue,optionSet]]`
    )
    .then(({ data }) => data);
};

export const getOptionSet = (optionSetId) => {
    return axiosInstance
        .get(
            `optionSets/${optionSetId}`
        )
        .then(({ data }) => data);
};

export const getOption = (optionId) => {
    return axiosInstance
        .get(
            `options/${optionId}`
        )
        .then(({ data }) => data);
};
