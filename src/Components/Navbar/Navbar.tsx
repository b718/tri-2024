import React from "react";
import "./Navbar.css";
import { Flex, Button, Grid } from "@mantine/core";

const Navbar = () => {
  return (
    <div>
      <Grid>
        <Grid.Col>TRI 2024</Grid.Col>
        <Grid.Col>
          {" "}
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
            className="nav-bar-whole"
          >
            <Button>Home</Button>
            <Button>Committee</Button>
            <Button>Conference Program</Button>
            <Button>Registration</Button>
            <Button>Presenters</Button>
            <Button>Sponsorship</Button>
            <Button>Venue</Button>
            <Button>Contact Us</Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Navbar;
