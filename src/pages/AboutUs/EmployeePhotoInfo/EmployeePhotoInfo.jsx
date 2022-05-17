import * as SC from "./EmployeePhotoInfo.styles";

const EmployeePhotoInfo = ({ data }) => {
  const { photo, name, workPosition } = data;
  return (
    <SC.Container>
      <SC.Photo src={photo} alt="employee picture"></SC.Photo>
      <p>{name}</p>
      <p>{workPosition}</p>
    </SC.Container>
  );
};

export default EmployeePhotoInfo;
