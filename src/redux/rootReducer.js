// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import users_management from "../components/UsersManagement/UsersList/store";
import user_details from "../components/UsersManagement/UserDetails/store";
import comments from "../components/Comments/store";
import news from "../components/News/NewsList/store";
import news_categories from "../components/News/NewsCategoriesList/store";
import courses from "../components/CoursesManagement/CoursesList/store";
import courses_technologies from "../components/CoursesManagement/TechnologiesList/store";
import courses_status from "../components/CoursesManagement/StatusList/store";
import courses_levels from "../components/CoursesManagement/LevelsList/store";
import courses_class_list from "../components/CoursesManagement/ClassList/store";
import courses_terms from "../components/CoursesManagement/TermsList/store";
import department from "../components/Department/DepartmentList/store";
import buildings from "../components/Buildings/BuildingsList/store";

const rootReducer = {
  navbar,
  layout,
  users_management,
  user_details,
  comments,
  news,
  news_categories,
  courses,
  courses_technologies,
  courses_status,
  courses_levels,
  courses_class_list,
  courses_terms,
  department,
  buildings,
};

export default rootReducer;
