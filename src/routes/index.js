import React from "react";
import Layout from "../layout/index";
import Home from "../components/home/index";
import Overview from "../components/overview/index";
import OverviewDetail from "../components/overview/OverviewDetails";
import HomeOverview from "../components/overview/HomeOverview";
export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />

        },
            {
                path: "Overview",
                element: <Overview />,
                children: [
                            {
                                index: true,
                                element:<HomeOverview/>
                            }, {
                                path: ":idnew",
                                element:<OverviewDetail/>
                            }
                        ]

            }            /*, {*/
        //    path: "login",
        //    element:<Login/>
        //    }, {
        //        path: "register",
        //        element: <Register />
        //    }, {
        //        path: "allCourses",
        //    element: <Courses />,
        //        children: [
        //            {
        //                index: true,
        //                element:<AllCourses/>
        //            }, {
        //                path: ":idCourses",
        //                element:<CourseDetail/>
        //            }
        //        ]
        //    }, {
        //    path: "profile",
        //        element:<Profile/>
        //    }, {
        //        path: "favorite",
        //        element: <FavoritesPage />
        //    }
        ]
    }
]