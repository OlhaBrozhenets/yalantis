import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    marginTop: 20,
    marginRight: 15,
  },
});

function UsersItem({ user }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar>{`${user.firstName.slice(0, 1)}`}</Avatar>}
        title={`${user.firstName} ${user.lastName}`}
        subheader={`Date of Birth: ${user.dob.split("T")[0]}`}
      />
    </Card>
  );
}

export default UsersItem;
