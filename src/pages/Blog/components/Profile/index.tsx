import { ProfileContainer, ProfileContent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProfileProps } from "../../../../contexts/BlogContext";

interface ProfileDataProps {
  data: ProfileProps;
}

export const Profile = ({ data }: ProfileDataProps) => {
  return (
    <ProfileContainer>
      <img src={data.avatar_url} alt={data.name} />
      <ProfileContent>
        <header>
          <h1>{data.name}</h1>
          <a href={data.html_url} target="_blank">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{data.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            thiagotnon
          </li>
          {data.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {data.company}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserFriends} />
            {data.followers} seguidores
          </li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  );
};
