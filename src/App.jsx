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
  return (
    <AppLayout
      toolsHide={true}
      navigationHide={true}
      contentHeader={
        <HomeHeader
          home="Working with CloudScape"
          description="CloudScape Documentation"
          link="https://cloudscape.design/"
        />
      }
      content={
        <HomePage submit="Click Me" label="This is the label for the project" />
      }
    />
  );
}
