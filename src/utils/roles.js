import {DropdownItem} from "../components/DropdownSelect";

const roles = [
  "Менеджер",
  "Админ"
];

const rolesOptions = [
  new DropdownItem("Все роли", 0),
  new DropdownItem("Менеджер", 2),
  new DropdownItem("Админ", 1),
]

const rolesStrictOptions = [
  new DropdownItem("Менеджер", 2),
  new DropdownItem("Админ", 1),
]

export default roles;
export {rolesOptions, rolesStrictOptions};