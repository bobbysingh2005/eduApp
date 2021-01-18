const pages = [
{name: "home", url: "/home", pageName: "dashboard/", title: "EduApp - Home"},
{name: "users", url: "/users", pageName: "users/", title: "Members"},
{name: "User", url: "/user", pageName: "user/", title: "eduApp - Member Profile" },
{name: "MemberPage", url: "/user/:type/:id", pageName: "user/", title: "eduApp - Member Profile"},
{name: "Roles", url: "/users/roles", pageName: "users/", title: "eduApp - Member Roles list" },
{name: "SignUp", url: "/signup", pageName: "signup/", title: "eduApp - Member registration", public: "true"},
{name: "Login", url: "/login", pageName: "login/", title: "eduApp - Login", public: "true"},
{name: "Logout", url: "/logout", pageName: "logout/", title: "eduApp - Logout", public: "true"},
{name: "PageNotFount", url: "/404-page", pageName: "404/", public: "true"},
];//TheEnd;
export default pages;
