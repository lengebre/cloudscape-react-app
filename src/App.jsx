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
import HomeHeader from "./components/HomeHeader";
import HomePage from "./components/HomePage";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <AppLayout
      toolsHide={true}
      navigationHide={true}
      contentHeader={
        <HomeHeader
          home="This is the home"
          description="description"
          link="https://cloudscape.design/"
        />
      }
      content={
        <HomePage
          value={value}
          submit="Click Me"
          label="This is the label for the project"
        />
      }
    />
  );
}
