import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin',
    // baseURL: 'https://iqra-twfr.onrender.com/api/master'
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).authToken}`;
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});



export const addArticle = (articleInfo) => api.post(`/add-articles`, articleInfo);
export const getArticle = () => api.get(`/articles`);

export const addEditorial = (editorialInfo) => api.post(`/add-editorials`, editorialInfo);
export const getEditorial = () => api.get(`/editorials`);

export const signup = (userInfo) => api.post(`/register`, userInfo);
export const signin = (userInfo) => api.post(`/login`, userInfo); //working
export const signout = () => api.post(`/signoutAdmin`);
export const admin = () => api.get(`/information`, {
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('profile')).authToken}`
    }
});

export const addUser = (userInfo) => api.post(`/registerUser`, userInfo); //working
export const getUser = () => api.get(`/users`); //working

export const addLead = (leadInfo) => api.post(`/createLead`, leadInfo); //working
export const getLead = (status) => api.get(`/leadByStatus`,{status :status});

export const addLeadform = (userInfo) => api.post(`/createLeadFromOutSource`, userInfo); //source is not added

export const addEmployee = (employeeInfo) => api.post(`/registerEmployee`, employeeInfo); //working
export const getEmployee = () => api.get(`/allEmployeesInformation`);

export const addCategory = (categoryInfo) => api.post(`/add-categorys`, categoryInfo);
export const getCategory = () => api.get(`/categorys`);

export const addSubject = (subjectInfo) => api.post(`/add-subjects`, subjectInfo);
export const getSubject = () => api.get(`/subjects`);

export const addMedium = (mediumInfo) => api.post(`/add-mediums`, mediumInfo);
export const getMedium = () => api.get(`/mediums`);

export const addLevel = (levelInfo) => api.post(`/add-levels`, levelInfo);
export const getLevel = () => api.get(`/levels`);

export const addLanguage = (languageInfo) => api.post(`/add-languages`, languageInfo);
export const getLanguage = () => api.get(`/languages`);

export const addCourse = (courseInfo) => api.post(`/add-addCourses`, courseInfo);
export const getCourse = () => api.get(`/addCourses`);

export const addLiveclass = (liveclassInfo) => api.post(`/add-liveClasses`, liveclassInfo);
export const getLiveclass = () => api.get(`/liveClasses`);

export const addUploadcontent = (uploadcontentInfo) => api.post(`/add-contents`, uploadcontentInfo);
export const getUploadcontent = () => api.get(`/contents`);

export const addImportantIssue = (importantIssueInfo) => api.post(`/add-iICategories`, importantIssueInfo);
export const getImportantIssue = () => api.get(`/iICategories`);

export const addWeeklyNews = (weeklyNewsInfo) => api.post(`/add-wNCategories`, weeklyNewsInfo);
export const getWeeklyNews = () => api.get(`/wNCategories`);