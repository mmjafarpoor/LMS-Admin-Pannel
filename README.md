# 🎛️ LMS Admin & Teacher Panel

A dedicated **Admin & Teacher Management Panel** for the Learning Management System (LMS).

The panel provides a centralized interface for both **administrators and teachers**, allowing them to manage different parts of the LMS based on their responsibilities and permissions.

Administrators have access to platform-wide management features, while teachers can create and manage educational content such as **courses and news**.

The project is built with **React and JavaScript**, using **Redux** for global state management, **Bootstrap** for UI development, and **React Hook Form + Yup** for form management and validation.

---

## ✨ Features

### 📊 Dashboard

The dashboard provides an overview of the LMS management environment.

Depending on the authenticated user's role, different information and management options can be displayed.

* Administrative overview
* Teacher overview
* Statistics and summarized information
* Platform information
* Quick access to management sections
* Role-based functionality

---

## 👥 User Roles

The panel supports two main roles:

### 👑 Admin

Administrators have access to platform-wide management functionality.

Admin capabilities include:

* Course management
* Teacher management
* Student management
* News management
* Comment management
* Payment verification
* Payment management
* Platform-wide data management

### 👨‍🏫 Teacher

Teachers have access to educational content management features.

Teacher capabilities include:

* Create courses
* Edit courses
* Manage their courses
* Create news
* Edit news
* Manage their news
* View relevant educational data

The available features are determined by the authenticated user's role and permissions.

---

## 📚 Course Management

Courses can be managed by both administrators and teachers according to their permissions.

### Admin

Administrators can manage courses across the platform.

* View courses
* Search courses
* Filter courses
* View course information
* Manage course data
* Pagination

### Teacher

Teachers can create and manage their own educational courses.

* Create course
* Edit course
* Manage course information
* Manage course content
* View their courses

General workflow:

```text
Teacher
   ↓
Create Course
   ↓
Fill Course Form
   ↓
Validate Form
   ↓
Submit to API
   ↓
Course Created
```

---

## 📰 News Management

The news system is also available to both administrators and teachers.

### Admin

Administrators can manage platform-wide news.

* View news
* Search news
* View news details
* Manage news
* Pagination

### Teacher

Teachers can create and manage educational news.

* Create news
* Edit news
* Manage their news
* Publish educational content

General workflow:

```text
Teacher
   ↓
Create News
   ↓
Fill News Form
   ↓
Validate Form
   ↓
Submit to API
   ↓
News Created
```

---

## 💬 Comment Management

The Admin Panel provides functionality for reviewing user-generated comments.

Administrators can review comments and determine whether they should be approved or rejected.

Features include:

* View comments
* Approve comments
* Reject comments
* Manage comment status
* Pagination

Workflow:

```text
User submits comment
        ↓
Comment stored
        ↓
Admin reviews comment
        ↓
   ┌────┴────┐
   ↓         ↓
Approve    Reject
   ↓         ↓
Published  Rejected
```

---

## 💳 Payment Management & Verification

The panel includes payment management and payment verification functionality.

Administrators can review payment records and verify successful transactions.

Features include:

* View payment records
* Review payment information
* Verify payments
* Confirm successful transactions
* Manage payment status

Workflow:

```text
User
 ↓
Course Reservation
 ↓
Payment
 ↓
Payment Gateway
 ↓
Payment Result
 ↓
Admin Review
 ↓
Payment Verification
 ↓
Reservation / Course Access Confirmation
```

---

## 📅 Course Reservation

The LMS reservation flow is connected to course enrollment and payment.

The general flow is:

```text
User
 ↓
Course Details
 ↓
Reserve Course
 ↓
Reservation Created
 ↓
Payment
 ↓
Payment Verification
 ↓
Course Access
```

The Admin Panel provides the necessary management functionality for reviewing the payment and reservation process.

---

## 🔐 Authentication & Authorization

The application includes authentication and role-based access control.

After authentication, the user's role determines which parts of the panel are available.

```text
User Login
    ↓
Authentication API
    ↓
Access Token
    ↓
User / Role Information
    ↓
Authorization
    ↓
┌───────────────┬────────────────┐
│     Admin     │     Teacher    │
│               │                │
│ Full Access   │ Content Access │
└───────────────┴────────────────┘
```

This allows the same application to serve both administrators and teachers while providing different functionality based on permissions.

---

## 🔐 Two-Step Verification

The authentication system supports a two-step verification flow for additional account security.

```text
Login
  ↓
Authentication
  ↓
Verification Required
  ↓
Verification Code
  ↓
Verify Code
  ↓
Authentication Completed
  ↓
Access Panel
```

The flow handles:

* Verification code input
* Code validation
* Invalid codes
* Expired codes
* Resending verification codes
* Loading states
* Authentication errors

---

## 🛠️ Technologies

| Technology      | Purpose                     |
| --------------- | --------------------------- |
| React           | Building the user interface |
| JavaScript      | Application logic           |
| Redux           | Global state management     |
| Bootstrap       | UI styling and layout       |
| React Hook Form | Form management             |
| Yup             | Form validation             |
| Axios           | HTTP requests               |
| React Router    | Application routing         |

---

## 📝 Forms & Validation

Forms throughout the panel are managed using **React Hook Form**.

**Yup** is used to define validation schemas and validate user input.

This combination provides a structured approach to handling administrative and teacher forms.

Used for forms such as:

* Course creation
* Course editing
* News creation
* News editing
* Authentication
* User information
* Other management forms

Example:

```javascript
const validationSchema = yup.object({
  title: yup
    .string()
    .required("Title is required"),

  description: yup
    .string()
    .required("Description is required"),
});
```

The validation flow is:

```text
User Input
    ↓
React Hook Form
    ↓
Yup Validation
    ↓
Valid?
 ┌──┴──┐
 ↓     ↓
Yes    No
 ↓     ↓
API   Show Errors
Request
```

---

## 🧠 State Management

The project uses **Redux** for centralized client-side state management.

Redux is responsible for managing shared application state across different parts of the panel.

General flow:

```text
Component
    ↓
Dispatch Action
    ↓
Redux Store
    ↓
Reducer
    ↓
Updated State
    ↓
Components
```

This architecture provides a predictable way to manage shared state between different management sections.

---

## 🔌 API Communication

The panel communicates with the backend through REST APIs.

Axios is used as the HTTP client with a centralized API configuration.

The API layer is separated from UI components to keep request logic maintainable.

Example:

```javascript
export const getTeachersList = (data) => {
  return apiClient.get("/Home/GetTeachers", {
    params: data,
  });
};
```

Authentication tokens can be automatically attached to requests through the Axios interceptor.

---

## 🏗️ Project Architecture

The application follows a modular React architecture.

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── Courses/
│   ├── News/
│   ├── Teachers/
│   ├── Students/
│   ├── Comments/
│   └── Payments/
│
├── core/
│   ├── services/
│   ├── interceptor/
│   └── config/
│
├── pages/
│   ├── Dashboard/
│   ├── Courses/
│   ├── News/
│   ├── Teachers/
│   ├── Students/
│   ├── Comments/
│   ├── Payments/
│   └── Auth/
│
├── redux/
│   ├── store/
│   └── slices/
│
├── routes/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

## 🧩 Component-Based Development

The application uses reusable React components to reduce duplication and keep the codebase maintainable.

For example:

```text
Courses
│
├── CourseFilter
├── CourseData
├── CourseForm
├── CourseTable
└── Pagination
```

Reusable components can be shared between different management sections where appropriate.

---

## 🎨 UI

The Admin & Teacher Panel is primarily built using **Bootstrap**.

Bootstrap is used for:

* Layout
* Forms
* Tables
* Buttons
* Cards
* Modals
* Navigation
* Spacing
* Administrative interfaces

The project does not use Tailwind CSS or CSS Modules as its primary styling approach.

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd <project-directory>
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=your_api_base_url
```

Do not commit sensitive environment variables to the repository.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🎯 Project Goals

The main goals of the Admin & Teacher Panel are:

1. Provide a centralized management environment for the LMS.
2. Support both administrator and teacher roles.
3. Allow teachers to create and manage courses.
4. Allow teachers to create and manage educational news.
5. Provide administrators with platform-wide management capabilities.
6. Provide comment approval and moderation functionality.
7. Provide payment verification functionality.
8. Support secure authentication and two-step verification.
9. Use Redux for predictable global state management.
10. Use React Hook Form and Yup for structured form handling and validation.
11. Maintain a modular and reusable React architecture.

---

## 👨‍💻 Author

**Mohammad Mehdi Jafarpoor**

Frontend Developer focused on building modern web applications with React and JavaScript.

* GitHub: [mmjafarpoor](https://github.com/mmjafarpoor)
* LinkedIn: [Mohammad Mehdi Jafarpoor](https://www.linkedin.com/in/mmjafarpoor/)

---

## 📄 License

This project is developed for educational and portfolio purposes.
