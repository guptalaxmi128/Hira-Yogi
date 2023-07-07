import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin',
    // baseURL: 'https://hira-yogi.onrender.com/api/admin',
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
export const deleteUser = (userCode) => api.delete(`/deleteUser/${userCode}`); //working
export const getDeleteUser = () => api.get(`/deletedUsers`);
export const restoreUser = (userCode) => api.post(`/restoreUser/${userCode}`); 

export const addLead = (leadInfo) => api.post(`/createLead`, leadInfo); //working
export const getLead = (status) => api.get(`/leadByStatus`,{status :status}); //working
export const getLeadByLeadCode = (leadCode) => api.get(`/getLeadByLeadCode/${leadCode}`); //working
export const updateLead = ( { leadCode,...updatedData }) => api.put(`/updateLeadProfile/${leadCode}`,updatedData); //working
export const deleteLead = (leadCode) => api.delete(`/deleteLead/${leadCode}`); //working
export const restoreLead = (leadCode) => api.post(`/restoreLead/${leadCode}`); //working

export const addLeadform = (userInfo) => api.post(`/createLeadFromOutSource`, userInfo); //source is added but some fields is remaining

export const addEmployee = (employeeInfo) => api.post(`/registerEmployee`, employeeInfo); //working
export const getEmployee = () => api.get(`/allEmployeesInformation`); //working
export const deleteEmployee = (employeesCode) => api.delete(`/deleteEmployees/${employeesCode}`); //working
export const restoreEmployee = (employeesCode) => api.post(`/restoreEmployee/${employeesCode}`);  
export const getDeleteEmployee = () => api.get(`/deletedEmployeesInformation`);

export const addAppointmment = (appointmentInfo) => api.post(`/addAppointmentSlote`, appointmentInfo); //working

export const addAssignLead = (assignleadInfo) => api.post(`/assignLeadToUser`, assignleadInfo); //working

export const addCategory = (categoryInfo) => api.post(`/addCategory`, categoryInfo);
export const getCategory = () => api.get(`/categories`);
export const deleteCategory = (categoryCode) => api.delete(`/deleteCategory/${categoryCode}`);

export const addSubject = (subjectInfo) => api.post(`/addTopic`, subjectInfo); //only name change
export const getSubject = () => api.get(`/topics`);
export const deleteSubject= (topicCode) => api.delete(`/deleteTopic/${topicCode}`);

export const addMedium = (mediumInfo) => api.post(`/addMedium`, mediumInfo);
export const getMedium = () => api.get(`/mediums`);
export const deleteMedium = (mediumCode) => api.delete(`/deleteMedium/${mediumCode}`);

export const addLevel = (levelInfo) => api.post(`/addLevel`, levelInfo);
export const getLevel = () => api.get(`/levels`);
export const deleteLevel = (levelCode) => api.delete(`/deleteLevel/${levelCode}`);

export const addLanguage = (languageInfo) => api.post(`/addLanguage`, languageInfo);
export const getLanguage = () => api.get(`/languages`);
export const deleteLanguage = (languageCode) => api.delete(`/deleteLanguage/${languageCode}`);

export const addCourse = (courseInfo) => api.post(`/addCourse`, courseInfo); //working
export const getCourse = () => api.get(`/allCourse`);

export const addLiveclass = (liveclassInfo) => api.post(`/add-liveClasses`, liveclassInfo);
export const getLiveclass = () => api.get(`/liveClasses`);


export const addUploadcontent = (uploadContent) => { //working
    const formDataObject = Object.fromEntries(uploadContent);
    // console.log(formDataObject)
    const { courseId, ...uploadcontentinfo} = formDataObject;
    return api.post(`/addCourseContent/${courseId}`, uploadcontentinfo,{
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
    });
  };


export const getUploadcontent = () => api.get(`/contents`);

export const addImportantIssue = (importantIssueInfo) => api.post(`/add-iICategories`, importantIssueInfo);
export const getImportantIssue = () => api.get(`/iICategories`);

export const addWeeklyNews = (weeklyNewsInfo) => api.post(`/add-wNCategories`, weeklyNewsInfo);
export const getWeeklyNews = () => api.get(`/wNCategories`);