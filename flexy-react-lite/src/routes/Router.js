import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const FullLayoutCandidat = lazy(() => import("../layouts/FullLayout/FullLayoutCandidat.js"));
const FullLayoutUser = lazy(() => import("../layouts/FullLayout/FullLayoutUser.js"));

/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));
const Dashboard2 = lazy(() => import("../views/dashboards/Dashboard2.js"))
const ListOfUsers = lazy(() => import("../views/dashboards/ListOfUsers"));
const ListOfCategories = lazy(() => import("../views/dashboards/ListOfCategories"));
const ListOfOffers = lazy(() => import("../views/dashboards/ListOfOffers"));
const ListOfApplications = lazy(() => import("../views/dashboards/ListOfApplications"));
const ListOfQuizzs = lazy(() => import("../views/dashboards/ListOfQuizzs"));
const ViewsDetails = lazy(() => import("../views/dashboards/ViewsDetails.js"));
const ViewDetailOffer = lazy(() => import("../views/dashboards/ViewDetailOffer"));
const ViewDetailOfferCandidat = lazy(() => import("../views/dashboards/ViewDetailOfferCandidat"));
const ViewDetailCategory = lazy(() => import("../views/dashboards/ViewDetailCategory"));
const AddUser = lazy(() => import("../views/dashboards/AddUser.js"));
const AddCategory = lazy(() => import("../views/dashboards/AddCategory.js"));
const AddOffer = lazy(() => import("../views/dashboards/AddOffer.js"));
const UpdateUser = lazy(() => import("../views/dashboards/UpdateUser"));
const UpdateCategory = lazy(() => import("../views/dashboards/UpdateCategory"));
const UpdateOffer = lazy(() => import("../views/dashboards/UpdateOffer"));
const Login = lazy(() => import("../views/dashboards/Login"));
const FormOfApplications = lazy(() => import("../views/dashboards/FormOfApplications"));
//const SideBarCandidat = lazy(() => import("../layouts/FullLayout/Sidebar/SideBarCandidat.js"));
const AddUserCandidat = lazy(() => import("../views/dashboards/AddUserCandidat.js"));
const AboutUs = lazy(() => import("../views/dashboards/AboutUs"));
const SearchBar = lazy(() => import("../views/dashboards/SearchBar.js"))
const Contact = lazy(() => import("../views/dashboards/Contact.js"))
const ViewDetailCategoryCandidate = lazy(() => import("../views/dashboards/ViewDetailCategoryCandidate"));
const ViewDetailApplication = lazy(() => import("../views/dashboards/ViewDetailApplication"));
const Quizz = lazy(() => import("../views/dashboards/Quizz"));
const QuizzDataScience = lazy(() => import("../views/dashboards/QuizzDataScience"));

const DashboardUser = lazy(() => import("../views/dashboards/DashboardUser"));
const AddOfferUser = lazy(() => import("../views/dashboards/AddOfferUser.js"));
const ListOfCategoriesUser = lazy(() => import("../views/dashboards/ListOfCategoriesUser"));
const ListOfOffersUser = lazy(() => import("../views/dashboards/ListOfOffersUser"));
const ListOfApplicationsUser = lazy(() => import("../views/dashboards/ListOfApplicationsUser"));


/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));

// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "dashboards/dashboard1",
    element: <FullLayout />,
    children: [
      // { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "/dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "/dashboards/dashboard1/ListOfUsers", exact: true, element: <ListOfUsers /> },
      { path: "/dashboards/dashboard1/ListOfOffers", exact: true, element: <ListOfOffers /> },
      { path: "/dashboards/dashboard1/ListOfCategories", exact: true, element: <ListOfCategories /> },
      { path: "/dashboards/dashboard1/ListOfApplications", exact: true, element: <ListOfApplications /> },
      { path: "/dashboards/dashboard1/ListOfQuizzs", exact: true, element: <ListOfQuizzs /> },
      { path: "/dashboards/dashboard1/ViewsDetails/:id", exact: true, element: <ViewsDetails /> },
      { path: "/dashboards/dashboard1/ViewDetailOffer/:id", exact: true, element: <ViewDetailOffer /> },
      { path: "/dashboards/dashboard1/ViewDetailCategory/:id", exact: true, element: <ViewDetailCategory /> },
      { path: "/dashboards/dashboard1/AddUser", exact: true, element: <AddUser /> },
      { path: "/dashboards/dashboard1/AddCategory", exact: true, element: <AddCategory /> },
      { path: "/dashboards/dashboard1/AddOffer", exact: true, element: <AddOffer /> },
      { path: "/dashboards/dashboard1/UpdateUser/:id", exact: true, element: <UpdateUser /> },
      { path: "/dashboards/dashboard1/UpdateCategory/:id", exact: true, element: <UpdateCategory /> },
      { path: "/dashboards/dashboard1/UpdateOffer/:id", exact: true, element: <UpdateOffer /> },
      { path: "/dashboards/dashboard1/ViewDetailApplication/:id", exact: true, element: <ViewDetailApplication /> },
      { path: "/dashboards/dashboard1/Quizz/:id", exact: true, element: <Quizz /> },




    ],
  },
  {
    path: "dashboards/dashboard2",
    element: <FullLayoutCandidat />,
    children: [
      { path: "/dashboards/dashboard2", exact: true, element: <Dashboard2 /> },
      // { path: "/dashboards/dashboard2/AddUserCandidat", exact: true, element: <AddUserCandidat /> },
      // { path: "/dashboards/dashboard2/ViewDetailCategoryCandidat/:id", exact: true, element: <ViewDetailCategoryCandidat /> },
      { path: "/dashboards/dashboard2/AboutUs", exact: true, element: <AboutUs /> },
      { path: "/dashboards/dashboard2/SearchBar", exact: true, element: <SearchBar /> },
      { path: "/dashboards/dashboard2/Contact", exact: true, element: <Contact /> },
      { path: "/dashboards/dashboard2/ViewDetailOfferCandidat/:id", exact: true, element: <ViewDetailOfferCandidat /> },
      { path: "/dashboards/dashboard2/FormOfApplications/:id", exact: true, element: <FormOfApplications /> },
      // { path: "/dashboards/dashboard2/Login", exact: true, element: <Login /> },
      { path: "/dashboards/dashboard2/ViewDetailCategoryCandidate/:id", exact: true, element: <ViewDetailCategoryCandidate /> },

      { path: "/dashboards/dashboard2/Quizz/:id", exact: true, element: <Quizz /> },
      { path: "/dashboards/dashboard2/QuizzDataScience/:id", exact: true, element: <QuizzDataScience /> },



    ],
  },
  { path: "/", element: <Login /> },
  { path: "/AddUserCandidat", element: <AddUserCandidat /> },
  {
    path: "dashboards/DashboardUser", element: <FullLayoutUser />,

    children: [
      { path: "/dashboards/DashboardUser", exact: true, element: <DashboardUser /> },
      { path: "/dashboards/DashboardUser/AddOfferUser", exact: true, element: <AddOfferUser /> },
      { path: "/dashboards/DashboardUser/ListOfOffersUser", exact: true, element: <ListOfOffersUser /> },
      { path: "/dashboards/DashboardUser/ListOfCategoriesUser", exact: true, element: <ListOfCategoriesUser /> },
      { path: "/dashboards/DashboardUser/ListOfApplicationsUser", exact: true, element: <ListOfApplicationsUser /> },
      { path: "/dashboards/DashboardUser/Quizz", exact: true, element: <Quizz /> },
      { path: "/dashboards/DashboardUser/ViewDetailOffer/:id", exact: true, element: <ViewDetailOffer /> },
      { path: "/dashboards/DashboardUser/ViewDetailCategory/:id", exact: true, element: <ViewDetailCategory /> },
      { path: "/dashboards/DashboardUser/UpdateOffer/:id", exact: true, element: <UpdateOffer /> },
      { path: "/dashboards/DashboardUser/ViewDetailApplication/:id", exact: true, element: <ViewDetailApplication /> },





    ],
  }
];

export default ThemeRoutes;
