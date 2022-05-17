import * as SC from "./AboutUs.styles";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader";
import EmployeePhotoInfo from "./EmployeePhotoInfo";
import useApi from "../../hooks/useApi";
const AboutUs = () => {
  const [teamData, isLoading] = useApi("/team.json");
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <SC.Container>
          <h2>
            Meet our <span>team</span>
          </h2>
          <SC.Team>
            {teamData.map((team) => (
              <EmployeePhotoInfo key={team.id} data={team}></EmployeePhotoInfo>
            ))}
          </SC.Team>
          <h2>
            Who <span>we</span> are?
          </h2>
          <SC.Description>
            We are a <span>bookstore </span>created in 1995. Our goal is to
            provide you with the best service and help you find your favorite
            book. Our <span>team</span> is specialized in providing you with the
            best solutions and advice so that you can make a great purchase. We
            are waiting <span>for you</span> at our branches or on our
            telephone/whatsapp channels.
          </SC.Description>
          <h2>
            Contact <span>Us</span>
          </h2>
          <form></form>
        </SC.Container>
      )}
    </Layout>
  );
};

export default AboutUs;
