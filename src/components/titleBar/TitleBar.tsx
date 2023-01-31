import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//This code creates a functional component TitleBar that renders a Material UI AppBar component with a static position and a Toolbar component with a dense variant.

const TitleBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Designated Concrete
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
