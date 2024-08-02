import { Avatar } from "@mui/material";
import "../styles/team.css";
interface TeamCardProps {
  name: string;
  role: string;
  imageURL: string;
}
const TeamCard = ({ name, role, imageURL }: TeamCardProps) => {
  return (
    <div className="team-card">
      <Avatar alt={name} src={imageURL} sx={{ width: 200, height: 200 }} />
      <div className="title-product">
        <h3>{name}</h3>
        <p className="description-prod">{role}</p>
      </div>
    </div>
  );
};
const Team = () => {
  return (
    <div className="team-cards">
      <TeamCard
        name={"Lorem"}
        role={"Founder & CEO - 4D Productions"}
        imageURL={"./assets/images/avatarImage1.jpg"}
      />
      ;
      <TeamCard
        name={"Ipsum"}
        role={"CFO - 4D Productions"}
        imageURL={"./assets/images/avatarImage2.avif"}
      />
      ;
      <TeamCard
        name={"Dolor"}
        role={"Vice president- 4D Productions"}
        imageURL={"./assets/images/avatarImage3.avif"}
      />
      ;
    </div>
  );
};
export default Team;
