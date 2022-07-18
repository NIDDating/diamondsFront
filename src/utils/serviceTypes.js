import {DropdownItem} from "../components/DropdownSelect";

const serviceTypes = [
  new DropdownItem("VIP", "vip"),
  new DropdownItem("Платно", "pay"),
  new DropdownItem("Бесплатно", "free"),
  new DropdownItem("Оплачено", "paid"),
];

export default serviceTypes;