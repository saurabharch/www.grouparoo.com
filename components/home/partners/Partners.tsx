import { Container } from "react-bootstrap";
import { Bloq } from "./logos/Bloq";
import { Chipax } from "./logos/Chipax";
import { MindfulChef } from "./logos/MindfulChef";
import { OneMedical } from "./logos/OneMedical";
import { Raisedev } from "./logos/Raisedev";
import { Spotify } from "./logos/Spotify";
import styles from "./Partners.module.scss";

export const Partners = () => (
  <Container
    fluid
    className={styles.partners + " d-flex flex-column justify-content-center"}
  >
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      <Spotify />
      <OneMedical />
      <MindfulChef className={styles.mindfulChef} />
      <Raisedev />
      <Bloq />
    </div>
  </Container>
);
