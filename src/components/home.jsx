import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../App.css";
import { Redirect } from "react-router";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      routeTo: ""
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.routeTo} />;
    }

    return (
      <div>
        <Box component="span" m={1}>
          <Grid container className={"home"} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Card
                  className="home-card"
                  onClick={() => {
                    this.setState({ redirect: true, routeTo: "/assignments" });
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Assignments
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Manage assignments for current class
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Counter;
