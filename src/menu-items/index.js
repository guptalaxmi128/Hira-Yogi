// project import
import master from './master';
import dashboard from './dashboard';
import content from './content';
import user from './user';
import currentAffairs from './currentAffairs';
import business from './business';
import addLeads from './addLeads';
import appointment from './appointment';
import employee from './employee';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, master, user, business ,addLeads,appointment,employee, content
        // currentAffairs,
    ]
};

export default menuItems;
