import { combineReducers } from 'redux';

import menu from './menu/menu';
import article from './article/article';
import editorial from './editorial/editorial';
import auth from './auth/auth';

import category from './master/category';
import subject from './master/subject';
import medium from './master/medium';
import level from './master/level';
import language from './master/language';
import importantIssue from './master/importantIssues';
import weeklyNews from './master/weeklyNews';

import course from './course/course';
import liveclass from './course/liveClass';
import content from './course/uploadContent';
import user from './user/user';
import lead from './lead/lead';
import leadFrom from './leadform/leadform';
import employee from './employee/employee';
import appointment from './appointment/appointment';
import assignLead from './assignlead/assignlead';
import leadByLeadCode from './leadbyleadcode/leadbyleadcode';

export const reducers = combineReducers({
    menu,
    article,
    editorial,
    auth,
    category,
    subject,
    medium,
    level,
    language,
    course,
    liveclass,
    content,
    importantIssue,
    weeklyNews,
    user,
    lead,
    leadFrom,
    employee,
    appointment,
    assignLead,
    leadByLeadCode
});
