import {Component} from "react";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import Toolbar from "../../components/Toolbar";
import Table from "../../components/Table";
import UserComponent from "../../components/UserComponent";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import DropdownSelect, {DropdownItem} from "../../components/DropdownSelect";
import Input from "../../components/Input";
import SidebarAddEmployee from "../../pageComponents/Employers/SidebarAddEmployee";
import SidebarEditEmployee from "../../pageComponents/Employers/SidebarEditEmployee";
import {Row, Col} from "react-bootstrap";
import Tag from "../../components/Tag";
import limit from "../../utils/limit";
import sort from "../../utils/sort";
import {rolesOptions, rolesStrictOptions} from "../../utils/roles";
import api from "../../utils/api";
import pagination from "../../utils/pagination";
import styles from "./styles.module.scss";
import debounce from "debounce";
import toast, {Toaster} from "react-hot-toast";
import messages from "../../utils/messages";
import Sidebar, {ButtonItem} from "../../components/Sidebar";
import MobileOnly from "../../components/MobileOnly";

const addSidebarDefaultState = {
  show: false,
  role: rolesStrictOptions[0],
  name: "",
  email: "",
  phone: ""
}
const editSidebarDefaultState = {
  id: "",
  disabled: true,
  show: false,
  role: rolesStrictOptions[0],
  name: "",
  email: "",
  phone: ""
}
const filtersDefaultState = {
  role: rolesOptions[0],
  search: "",
}

class Employers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...filtersDefaultState,
      sort: sort[0],
      limit: limit[0],
      page: 1,
      pagination: [],
      data: [],
      loading: true,
      count: null,
      addSidebar: addSidebarDefaultState,
      editSidebar: editSidebarDefaultState,
      searchSidebarShow: false
    }

    this._setSort = this._setSort.bind(this);
    this._setLimit = this._setLimit.bind(this);
    this._setPage = this._setPage.bind(this);
    this._setAddData = this._setAddData.bind(this);
    this._setEditData = this._setEditData.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this._getEmployers = debounce((...props) => this.getEmployees(...props), 1000);
  }

  _setSort(sort) {
    this.setState({
      sort
    });

    this.getEmployees(this.state.page, limit.value, sort.value);
  }
  _setLimit(limit) {
    this.setState({
      limit,
      page: 1
    });

    this.getEmployees(1, limit.value);
  }
  _setPage(page) {
    let _page = page;

    if (page === true) {
      _page = this.state.page + 1;
    } else if (page === false) {
      _page = this.state.page - 1;
    }

    this.setState({
      page: _page
    });

    this.getEmployees(_page);
  }
  _setData(data, totalPages) {
    let newState = {
      data: data,
      loading: false
    }

    newState.pagination = pagination(this.state.page, totalPages);

    this.setState(newState);
  }
  _setRole(role, request = true) {
    this.setState({
      role: role
    });

    if (request) {
      this.getEmployees(this.state.page, this.state.limit.value, this.state.sort.value, role.value);
    }
  }
  _setSearch(search, request = true) {
    this.setState({
      search: search
    });

    if (request) {
      this._getEmployers(this.state.page,  this.state.limit.value, this.state.sort.value, this.state.role.value, search);
    }
  }

  _setAddData(field, value) {
    let newState = this.state.addSidebar;

    newState[field] = value;

    this.setState({
      addSidebar: newState
    });
  }
  _setEditData(field, value) {
    let newState = this.state.editSidebar;

    newState[field] = value;

    this.setState({
      editSidebar: newState
    });
  }

  toggleAddSidebar(value) {
    this.setState({
      addSidebar: {
        ...addSidebarDefaultState,
        show: value,
      }
    });
  }
  toggleEditSidebar(value, id, role, name, email, phone) {
    let newState = {
      ...editSidebarDefaultState,
      show: value,
    };

    if (value) {
      newState.disabled = false;
      newState.id = id;
      newState.role = role;
      newState.name = name;
      newState.email = email;
      newState.phone = phone;
    }

    this.setState({
      editSidebar: newState
    });
  }
  toggleSearchSidebar(value) {
    this.setState({
      searchSidebarShow: value
    });
  }
  goSearch() {
    this.toggleSearchSidebar(false);
    this.getEmployees();
  }

  render() {
    return (
      <div>
        <Toaster />
        <MobileOnly>
          <Sidebar
            className={styles.filtersSidebar}
            title={"Поиск"}
            isVisible={this.state.searchSidebarShow}
            onClose={() => this.toggleSearchSidebar(false)}
            buttons={[new ButtonItem("Найти", this.goSearch, "primary")]}>
            <div>
              <Input
                id={"search"}
                value={this.state.search}
                placeholder={"Поиск по ключевым словам"}
                onChange={(e) => this._setSearch(e.target.value, false)}
              />
              <DropdownSelect
                type={"button"}
                value={this.state.role}
                onSelect={(label, value, key) => this._setRole(new DropdownItem(label, value), false)}
                items={rolesOptions}
              />
            </div>
          </Sidebar>
        </MobileOnly>
        <SidebarAddEmployee
          isVisible={this.state.addSidebar.show}
          role={this.state.addSidebar.role}
          name={this.state.addSidebar.name}
          email={this.state.addSidebar.email}
          phone={this.state.addSidebar.phone}
          setData={this._setAddData}
          addOnClick={() => this.addEmployee()}
          closeOnClick={() => this.toggleAddSidebar(false)}
        />
        <SidebarEditEmployee
          isVisible={this.state.editSidebar.show}
          disabled={this.state.editSidebar.disabled}
          id={this.state.editSidebar.id}
          role={this.state.editSidebar.role}
          name={this.state.editSidebar.name}
          email={this.state.editSidebar.email}
          phone={this.state.editSidebar.phone}
          setData={this._setEditData}
          newPasswordOnClick={() => this.newPassword()}
          closeOnClick={() => this.toggleEditSidebar(false)}
          saveOnClick={() => this.saveEmployee()}
        />
        <PageHeader
          headings={["Сотрудники"]}
          active={0}
          setActive={() => null}
          buttonLabel={"Создать заявку"}
          searchOnClick={() => this.toggleSearchSidebar(true)}
          buttonOnClick={() => this.toggleAddSidebar(true)}>
          <div className={styles.filters}>
            <Row>
              <Col md={8}>
                <Input
                  id={"search"}
                  value={this.state.search}
                  placeholder={"Поиск по ключевым словам"}
                  onChange={(e) => this._setSearch(e.target.value, true)}
                />
              </Col>
              <Col md={4}>
                <DropdownSelect
                  type={"button"}
                  value={this.state.role}
                  onSelect={(label, value, key) => this._setRole(new DropdownItem(label, value))}
                  items={rolesOptions}
                />
              </Col>
            </Row>
          </div>
        </PageHeader>
        <Container>
          <Toolbar
            sort={this.state.sort}
            setSort={this._setSort}
            limit={this.state.limit}
            setLimit={this._setLimit}
          />
          {
            this.state.loading ? (
              <Loader />
            ) : (
              <>
                <Table
                  className={styles.table}
                  labels={["#", "Имя", "Email", "Номер телефона", "Роль"]}
                  rows={this.state.data}
                  rowOnClick={({id, role, name, email, phone}) => this.toggleEditSidebar(true, id, role, name, email, phone)}
                />
                {
                  this.state.pagination.length === 1 ? null : (
                    <Pagination
                      items={this.state.pagination}
                      active={this.state.page}
                      goTo={this._setPage}
                    />
                  )
                }
              </>
            )
          }
        </Container>
      </div>
    );
  }

  buildRows(rows) {
    let temp = [];

    rows.forEach((row, i) => {
      let roleLabel = "";
      let roleOption = null;

      rolesOptions.forEach(item => {
        if (item.value === row.role) {
          roleLabel = item.label;
          roleOption = item;
        }
      });

      let data = {
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        role: roleOption
      }

      temp.push({
        data: data,
        cells: [
          row.id,
          <UserComponent name={row.name} />,
          row.email,
          row.phone,
          <Tag type={row.role === 1 ? "primary" : "secondary"} label={roleLabel} />,
        ]
      });
    });

    return temp;
  }
  async getEmployees(page = this.state.page, limit = this.state.limit.value, sort = this.state.sort.value, role = this.state.role.value, search = this.state.search) {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    let params = {
      page: page,
      sort: sort,
      limit: limit,
    };

    if (search) params.search = search;
    if (role !== 0) params.role = role;

    try {
      const data = await api("GET", "/employee/employee.get_2", params);

      this._setData(this.buildRows(data.data), data.pagination.page_available);
    } catch (e) {
      toast.error(e.toString());
    }
  }
  async addEmployee() {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    try {
      await api("PUT", "/auth/auth.create", JSON.stringify({
        name: this.state.addSidebar.name,
        email: this.state.addSidebar.email,
        role: this.state.addSidebar.role.value,
        phone: this.state.addSidebar.phone
      }));

      await this.getEmployees();

      this.toggleAddSidebar(false);

      toast.success(messages.employers.add.success)
    } catch (e) {
      this.setState({loading: false});

      toast.error(e.toString());
    }
  }
  async saveEmployee() {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    try {
      await api("POST", "/employee/employee.update", JSON.stringify({
        user_id: this.state.editSidebar.id,
        name: this.state.editSidebar.name,
        email: this.state.editSidebar.email,
        role: this.state.editSidebar.role.value,
        phone: this.state.editSidebar.phone
      }));

      await this.getEmployees();

      this.toggleEditSidebar(false);

      toast.success(messages.employers.edit.success)
    } catch (e) {
      this.setState({loading: false});

      toast.error(e.toString());
    }
  }
  async newPassword() {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    try {
      await api("POST", "/employee/employee.newPassword", JSON.stringify({
        user_id: this.state.editSidebar.id,
        name: this.state.editSidebar.name,
      }));

      await this.getEmployees();

      this.toggleEditSidebar(false);

      toast.success(messages.employers.newPassword.success)
    } catch (e) {
      this.setState({loading: false});

      toast.error(e.toString());
    }
  }

  componentDidMount() {
    this.getEmployees();
  }
}

export default Employers;