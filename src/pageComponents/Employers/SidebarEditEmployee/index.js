import Sidebar, {ButtonItem} from "../../../components/Sidebar";
import Input from "../../../components/Input";
import DropdownSelect, {DropdownItem} from "../../../components/DropdownSelect";
import {rolesStrictOptions} from "../../../utils/roles";

function Component({isVisible, disabled, id, role, name, email, phone, setData, newPasswordOnClick, saveOnClick, closeOnClick, ...props}) {
  return (
    <Sidebar
      isVisible={isVisible}
      onClose={closeOnClick}
      title={`Сотрудник ${id}`}
      buttons={[
        new ButtonItem("Сохранить", saveOnClick, "primary"),
        new ButtonItem("Новый пароль", newPasswordOnClick, "secondary"),
      ]}
      {...props}>
      <div>
        <Input
          disabled={disabled}
          id={"addName"}
          label={"Имя"}
          value={name}
          onChange={(e) => setData("name", e.target.value)}
          placeholder={"Введите имя сотрудника"}
        />
        <DropdownSelect
          disabled={disabled}
          label={"Роль"}
          type={"button"}
          value={role}
          onSelect={(label, value, key) => setData("role", new DropdownItem(label, value))}
          items={rolesStrictOptions}
        />
        <Input
          disabled={disabled}
          id={"addEmail"}
          label={"Email"}
          value={email}
          onChange={(e) => setData("email", e.target.value)}
          placeholder={"Введите email сотрудника"}
        />
        <Input
          disabled={disabled}
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