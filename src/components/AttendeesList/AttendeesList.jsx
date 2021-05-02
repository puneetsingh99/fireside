import "./attendees-list-styles.css";
import { Avatar } from "../";

export const AttendeesList = () => {
  return (
    <article className={`attendees-container`}>
      <ul className={`attendees-list`}>
        <li>
          <Avatar
            src={`https://picsum.photos/id/237/200/`}
            size={"xl"}
            variant={"typing"}
          />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/222/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/214/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/215/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/276/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/13/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/214/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/215/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/276/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/13/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/222/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/214/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/215/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/276/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/13/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/214/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/215/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/276/200/`} size={"xl"} />
        </li>
        <li>
          <Avatar src={`https://picsum.photos/id/13/200/`} size={"xl"} />
        </li>
      </ul>
    </article>
  );
};
