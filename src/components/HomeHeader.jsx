import { useState } from "react";
import {
  AppLayout,
  Button,
  Container,
  FormField,
  Header,
  Input,
  Link,
  SpaceBetween,
} from "@cloudscape-design/components";

export default function HomeHeader(props) {
  const [value, setValue] = useState("");

  return (
    <Header
      variant="h1"
      description={
        <>
          This is just an example of leveraging a CloudScape application{" "}
          <Link
            href={props.link}
            external
            externalIconAriaLabel="Opens in a new tab"
          >
            {props.description}
          </Link>
        </>
      }
    >
      {props.home}
    </Header>
  );
}
