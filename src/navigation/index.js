import { Users, Home, FileText, MessageSquare, Clock, Briefcase, Mail, Globe, BookOpen, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "usersManagement",
    title: "مدیریت کاربران",
    icon: <Users size={20} />,
    navLink: "/users-management",
  },
  {
    id: "corursesManagement",
    title: "مدیریت دوره‌ها",
    icon: <BookOpen size={20} />,
    navLink: "/courses-management",
    children: [
      {
        id: "coursesList",
        title: "لیست دوره‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/courses-list",
      },
      {
        id: "createCourse",
        title: "ساخت دوره",
        icon: <Circle size={12} />,
        navLink: "/courses-management/create-course",
      },
      {
        id: "coursesTechnologies",
        title: "تکنولوژی دوره‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/courses-technologies",
      },
      {
        id: "coursesStatus",
        title: "وضعیت دوره‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/courses-status",
      },
      {
        id: "coursesLevel",
        title: "سطح دوره‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/courses-level",
      },
      // {
      //   id: "CourseUsersList",
      //   title: "لیست کاربران",
      //   icon: <Circle size={12} />,
      //   navLink: "/courses-management/course-users-list",
      // },
      {
        id: "classList",
        title: "لیست کلاس‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/class-list",
      },
      {
        id: "terms",
        title: "ترم‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/terms",
      },
      {
        id: "tasks",
        title: "تسک‌ها",
        icon: <Circle size={12} />,
        navLink: "/courses-management/tasks",
      },
    ],
  },
  {
    id: "timeManagement",
    title: "مدیریت بازه‌های زمانی",
    icon: <Clock size={20} />,
    navLink: "/time-management",
    children: [
      // {
      //   id: "StudentsTimeManagement",
      //   title: "بازه زمانی کاربران",
      //   icon: <Circle size={12} />,
      //   navLink: "/time-management/students",
      // },
      {
        id: "AdminsTimeManagement",
        title: "بازه زمانی ادمین‌ها",
        icon: <Circle size={12} />,
        navLink: "/time-management/admins",
      },
    ],
  },
  {
    id: "news",
    title: "اخبار و مقالات",
    icon: <FileText size={20} />,
    navLink: "/news",
    children: [
      {
        id: "newsList",
        title: "لیست اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/news/news-list",
      },
      {
        id: "addNews",
        title: "افزودن اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/news/add-news",
      },
      {
        id: "newsCategoryManagement",
        title: "مدیریت دسته‌بندی اخبار",
        icon: <Circle size={12} />,
        navLink: "/news/news-categories-management",
      },
    ],
  },
  {
    id: "comments",
    title: "نظرات",
    icon: <MessageSquare size={20} />,
    navLink: "/comments",
  },
  // {
  //   id: "mails",
  //   title: "پیام‌ها",
  //   icon: <Mail size={20} />,
  //   navLink: "/mails",
  // },
  {
    id: "department",
    title: "دپارتمان",
    icon: <Briefcase size={20} />,
    navLink: "/department",
  },
  {
    id: "buildings",
    title: "ساختمان‌ها",
    icon: <Globe size={20} />,
    navLink: "/buildings",
  },
];
