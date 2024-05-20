import {
  IconHome,
  IconTable,
  IconListCheck,
  IconReportSearch,
} from "@tabler/icons-react";

const Menuitems = [
  {
    id: 1,
    title: "Frontend",
    icon: IconHome,
    href: "",
    subheader: [
      {
        id: 1.1,
        title: "Todo List",
        icon: IconListCheck,
        href: "/todo",
      },
      {
        id: 1.2,
        title: "Create Data",
        icon: IconReportSearch,
        href: "/create-data",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Backend",
  //   icon: IconTable,
  //   href: "",
  //   subheader: [],
  // },
];

export default Menuitems;
