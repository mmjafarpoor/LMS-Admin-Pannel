// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";
// import ProtectedRoute from "../ProtectedRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import { getUserData, getUserRole, getHomeRouteForLoggedInUser,} from "../../utility/Utils";
import { elements } from "chart.js";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

const getHomeRoute = () => {
  const userRoles = getUserRole();
  // console.log("user role:", userRole)
  if (userRoles) return getHomeRouteForLoggedInUser(userRoles[0]);
  else return "/login";
};

const ProtectedRoute = ({ children }) => {
  const userRole = getUserRole();

  if (!userRole || !userRole.includes("admin")) {
    return <Navigate to="/login" replace />;
  } else return children;
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../pages/Dashboard/Home"));
const UsersManagement = lazy(() => import("../../pages/UsersManagement/UsersManagement"),);
const UserDetails = lazy(() => import("../../pages/UsersManagement/UserDetails"),);
const Login = lazy(() => import("../../pages/Auth/Login"));
const Register = lazy(() => import("../../pages/Auth/Register"));
const ForgotPassword = lazy(() => import("../../pages/Auth/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error/Error"));

const CoursesManagement = lazy(() => import("../../pages/Courses/CoursesManagement"),);
const CoursesList = lazy(() => import("../../pages/Courses/CoursesList"));
const CreateCourse = lazy(() => import("../../pages/Courses/CreateCourse"));
const CoursesLevel = lazy(() => import("../../pages/Courses/CoursesLevel"));
const CoursesStatus = lazy(() => import("../../pages/Courses/CoursesStatus"));
const CoursesTechnologies = lazy(() => import("../../pages/Courses/CoursesTechnologies"),);
const CourseUsersList = lazy(() => import("../../pages/Courses/CourseUsersList"),);
const ClassList = lazy(() => import("../../pages/Courses/ClassList"));
const Tasks = lazy(() => import("../../pages/Courses/Tasks"));
const Terms = lazy(() => import("../../pages/Courses/Terms"));
const CourseDetails = lazy(() => import("../../pages/Courses/CourseDetails"));

const News = lazy(() => import("../../pages/News/News"));
const NewsList = lazy(() => import("../../pages/News/NewsList"));
const AddNews = lazy(() => import("../../pages/News/AddNews"));
const NewsCategoriesManagement = lazy(() => import("../../pages/News/NewsCategoriesManagement"),);
const NewsDetails = lazy(() => import("../../pages/News/NewsDetails"),);

const TimeManagement = lazy(() => import("../../pages/TimeManagement/TimeManagement"),);
const StudentsTimeManagement = lazy(() => import("../../pages/TimeManagement/StudentsTimeManagement"),);
const AdminsTimeManagement = lazy(() => import("../../pages/TimeManagement/AdminsTimeManagement"),);

const Comments = lazy(() => import("../../pages/Comments/Comments"));
const Mails = lazy(() => import("../../pages/Mails/Mails"));
const Department = lazy(() => import("../../pages/Department/Department"));
const Buildings = lazy(() => import("../../pages/Buildings/Buildings"));

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: (
      // <ProtectedRoute roles={["admin"]}>
      <Home />
    ),
    // </ProtectedRoute>
  },

  { path: "/users-management", element: <UsersManagement /> },
  { path: "/users-management/:UserId/:Name", element: <UserDetails /> },

  {
    path: "/courses-management",
    element: <CoursesManagement />,
    children: [
      { path: "courses-list", element: <CoursesList /> },
      { path: "create-course", element: <CreateCourse /> },
      { path: "courses-technologies",element: <CoursesTechnologies />, },
      { path: "courses-status", element: <CoursesStatus />, },
      { path: "courses-level", element: <CoursesLevel />, },
      { path: "course-users-list", element: <CourseUsersList />, },
      {
        path: "class-list",
        element: <ClassList />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  { path: "/courses-management/:CourseId/:Name", element: <CourseDetails /> },

  {
    path: "/time-management",
    element: <TimeManagement />,
    children: [
      { path: "students", element: <StudentsTimeManagement /> },
      { path: "admins", element: <AdminsTimeManagement /> },
    ],
  },
  {
    path: "/news",
    element: <News />,
    children: [
      { path: "news-list", element: <NewsList /> },
      { path: "add-news", element: <AddNews /> },
      {
        path: "news-categories-management",
        element: <NewsCategoriesManagement />,
      },
    ],
  },
  { path: "/news/:NewsId/:Name", element: <NewsDetails /> },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/mails",
    element: <Mails />,
  },

  {
    path: "/department",
    element: <Department />,
  },
  { path: "/buildings", element: <Buildings />, },
  {path: "/login", element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  { path: "/register", element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({ path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
