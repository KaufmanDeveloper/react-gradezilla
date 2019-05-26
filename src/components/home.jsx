import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./home.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <Box component="span" m={1}>
          <Grid container className={"home"} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Card className="home-card">
                  <CardActionArea>
                    <CardMedia
                      className={"card-media"}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
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
