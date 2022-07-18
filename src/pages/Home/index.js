import {Component} from "react";
import Container from "../../components/Container";
import PageHeader from "../../pageComponents/Home/PageHeader"
import UserComponent from "../../components/UserComponent";
import Loader from "../../components/Loader";
import NewApplications from "../../pageComponents/Home/NewApplications";
import Tag from "../../components/Tag";
import Stats from "../../pageComponents/Home/Stats";
import api from "../../utils/api";
import toast, {Toaster} from "react-hot-toast";
import serviceTypes from "../../utils/serviceTypes";
import NewQuestionairies from "../../pageComponents/Home/NewQuestionairies";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [],
      loading: true,
      stats: null
    }
  }

  render() {
    return (
      <div>
        <Toaster />
        <PageHeader name={"Настя"}>
        </PageHeader>
        <Container>
          {
            this.state.loading ? (
              <Loader />
            ) : (
              <>
                <Stats
                  allQuestionaires={this.state.stats.questionnaires_all_count}
                  allAppliactions={this.state.stats.applications_all_count}
                  newQuestionaires={this.state.stats.questionnaires_new_count}
                  newApplications={this.state.stats.applications_new_count}
                />
                <NewApplications data={this.state.applications} />
                <NewQuestionairies />
              </>
            )
          }
        </Container>
      </div>
    );
  }

  buildRows(rows) {
    let temp = [];

    rows.forEach((row) => {
      let serviceTypeLabel = "";
      let serviceTypeLabelOption = null;

      serviceTypes.forEach(item => {
        if (item.value === row.service_type) {
          serviceTypeLabel = item.label;
          serviceTypeLabelOption = item;
        }
      });

      let data = {
        id: row.id,
        name: row.client_name,
        email: row.email,
        phone: row.phone,
        type: serviceTypeLabelOption
      }

      temp.push({
        data: data,
        cells: [
          <UserComponent name={row.client_name} />,
          row.email,
          row.phone,
          <Tag type={row.service_type === "pay" ? "primary" : "secondary"} label={serviceTypeLabel} />,
        ]
      });
    });

    return temp;
  }
  async getStats() {
    try {
      const data = await api("GET", "/analytics/analytics.get");

      this.setState({
        stats: data,
        applications: this.buildRows(data.last_applications),
        loading: false
      });
    } catch (e) {
      toast.error(e.toString());
    }
  }
  async getData() {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    try {
      await this.getStats();
    } catch (e) {
      toast.error(e.toString());
    }
  }

  componentDidMount() {
    this.getData();
  }
}

export default Home;