import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
} from "@material-ui/icons/";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboards/DashboardUser",
  },
  // {
  //   title: "Autocomplete",
  //   icon: AddToPhotosOutlined,
  //   href: "/form-elements/autocomplete",
  // },
  // {
  //   title: "Buttons",
  //   icon: AspectRatioOutlined,
  //   href: "/form-elements/button",
  // },
  // {
  //   title: "Checkbox",
  //   icon: AssignmentTurnedInOutlined,
  //   href: "/form-elements/checkbox",
  // },
  // {
  //   title: "Radio",
  //   icon: AlbumOutlined,
  //   href: "/form-elements/radio",
  // },
  // {
  //   title: "Slider",
  //   icon: SwitchCameraOutlined,
  //   href: "/form-elements/slider",
  // },
  // {
  //   title: "Switch",
  //   icon: SwitchLeftOutlined,
  //   href: "/form-elements/switch",
  // },
  // {
  //   title: "Form",
  //   icon: DescriptionOutlined,
  //   href: "/form-layouts/form-layouts",
  // },
  // {
  //   title: "Table",
  //   icon: AutoAwesomeMosaicOutlined,
  //   href: "/tables/basic-table",
  // },

  {
    title: "List of offers",
    // icon: AutoAwesomeMosaicOutlined,
    icon : LocalOfferOutlinedIcon,
    href: "/dashboards/DashboardUser/ListOfOffersUser",
  },
  {
    title: "List of categories",
    icon: AutoAwesomeMosaicOutlined,
    href: "/dashboards/DashboardUser/ListOfCategoriesUser",
  },
  {
    title: "List of applications",
    icon: AutoAwesomeMosaicOutlined,
    href: "/dashboards/DashboardUser/ListOfApplicationsUser",
  },
 
  {
    title: "Quizs",
    icon: AutoAwesomeMosaicOutlined,
    href: "/dashboards/DashboardUser/Quizz",
  },
  // {
  //   title: "Login",
  //   icon: AutoAwesomeMosaicOutlined,
  //   href: "/Login",
  // }
];

export default Menuitems;
