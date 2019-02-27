import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor:'white',
    
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'

  },

});



class OutlinedTextFields extends React.Component {
 

  render() {
    const { classes } = this.props;
    

    return (
      <div>
        <TextField
          id="outlined-name"
          className={classes.textField}
           InputProps={{
            classes: {
                  notchedOutline: classes.notchedOutline,
            }          }}
            placeholder={this.props.text}
          margin="normal"
          variant="outlined"
        />

        
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);