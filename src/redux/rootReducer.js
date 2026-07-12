// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import users_management from '../components/UsersManagement/invoice/store'
import comments from '../components/Comments/invoice/store'
import news from '../components/News/invoice/store'

const rootReducer = { navbar, layout, users_management, comments, news};

export default rootReducer;
