import Sidebar, {ButtonItem} from "../../../components/Sidebar";
import Input from "../../../components/Input";
import DropdownSelect, {DropdownItem} from "../../../components/DropdownSelect";
import {rolesStrictOptions} from "../../../utils/roles";

function Component({isVisible, role, name, email, phone, setData, addOnClick, closeOnClick, ...props}) {
  return (
    <Sidebar
      isVisible={isVisible}
      onClose={closeOnClick}
      title={"Добавить сотрудника"}
      buttons={[
        new ButtonItem("Добавить", addOnClick, "primary"),
        new ButtonItem("Отменить", closeOnClick, "secondary"),
      ]}
      {...props}>
      <div>
        <Input
          id={"addName"}
          label={"Имя"}
          value={name}
          onChange={(e) => setData("name", e.target.value)}
          placeholder={"Введите имя сотрудника"}
        />
        <DropdownSelect
          label={"Роль"}
          type={"button"}
          value={role}
          onSelect={(label, value, key) => setData("role", new DropdownItem(label, value))}
          items={rolesStrictOptions}
        />
        <Input
          id={"addEmail"}
          label={"Email"}
          value={email}
          onChange={(e) => setData("email", e.target.value)}
          placeholder={"Введите email сотрудника"}
        />
        <Input
          id={"addPhone"}
          label={"Номер телефона"}
          value={phone}
          onChange={(e) => setData("phone", e.target.value)}
          placeholder={"Введите номер телефона сотрудника"}
        />
      </div>
    </Sidebar>
  );
}

export default Component;