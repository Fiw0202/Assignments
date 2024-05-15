import { IconHome, IconTable,IconListCheck, IconReportSearch } from "@tabler/icons-react";

import { uniqueId } from "lodash";

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
        href: "/frontend/todo",
      },
      {
        id: 1.2,
        title: "Create Data",
        icon: IconReportSearch,
        href: "/frontend/create-data",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: IconTable,
    href: "/backend",
    subheader: [],
  },
];

export default Menuitems;
