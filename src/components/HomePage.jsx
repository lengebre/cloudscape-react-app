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

/*
 * Learn more about Cloudscape Design System at
 * https://cloudscape.design
 */

export default function HomePage(props) {
  const [value, setValue] = useState("");

  return (
    <Container>
      <SpaceBetween size="l">
        <FormField label={props.label}>
          <Input
            value={value}
            onChange={(event) => setValue(event.detail.value)}
          />
        </FormField>
        <Button variant="primary">{props.submit}</Button>
      </SpaceBetween>
    </Container>
  );
}
