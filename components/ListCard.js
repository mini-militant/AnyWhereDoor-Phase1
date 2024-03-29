import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Like from './Like'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width:"84%",
    align:"centre"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" component="p">
          {props.item}
        </Typography>
      </CardContent>
      <Like/>
   {/*   <CardActions>
        <Button size="small"></Button>
      </CardActions> */}
    </Card>
  );
}