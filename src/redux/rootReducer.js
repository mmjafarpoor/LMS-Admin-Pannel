// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import users_management from '../components/UsersManagement/store'
import comments from '../components/Comments/store'
import news from '../components/News/store'
import courses from '../components/CoursesManagement/store'

const rootReducer = { navbar, layout, users_management, comments, news, courses};

export default rootReducer;
