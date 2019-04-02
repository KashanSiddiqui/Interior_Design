import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: '0px',
    
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div >
      
      <Button variant="contained"  className={classes.button} style={{marginTop:props.margin,backgroundColor:props.color ,width:props.width,color:props.Textcolor,textDecoration:"none"}} >
        {props.text}
      </Button>
      
      
      
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ContainedButtons);