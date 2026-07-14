// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import users_management from "../components/UsersManagement/store";
import comments from "../components/Comments/store";
import news from "../components/News/NewsList/store";
import news_categories from "../components/News/NewsCategoriesList/store";
import courses from "../components/CoursesManagement/CoursesList/store";
import courses_technologies from "../components/CoursesManagement/TechnologiesList/store";
import courses_status from "../components/CoursesManagement/StatusList/store";
import courses_levels from "../components/CoursesManagement/LevelsList/store";
import courses_class_list from "../components/CoursesManagement/ClassList/store";
import courses_terms from "../components/CoursesManagement/TermsList/store";

const rootReducer = {
  navbar,
  layout,
  users_management,
  comments,
  news,
  news_categories,
  courses,
  courses_technologies,
  courses_status,
  courses_levels,
  courses_class_list,
  courses_terms,
};

export default rootReducer;
