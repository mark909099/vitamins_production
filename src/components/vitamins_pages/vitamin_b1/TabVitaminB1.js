import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionVitaminB1 from './DescriptionVitaminB1';
import FunctionsVitaminB1 from './FunctionsVitaminB1';
import SourcesVitaminB1 from './SourcesVitaminB1';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  header: {
    paddingTop:'3.7rem',
    paddingBottom:'2rem',
    display:'flex',
    justifyContent:'center'
  },
  app_bar: {
      backgroundColor:'#023e8a',
  },
  tab: {
      [theme.breakpoints.up('xs')]: {
        fontSize:'1.25rem',   
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'1.75rem',   
      },
  },
  indicator: {
      backgroundColor:'white',
  },
}));

export default function TabVitamin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Typography className={classes.header} variant='h2'>Vitamin B1</Typography>
    <div className={classes.root}>
      <AppBar className={classes.app_bar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          classes = {{
              indicator: classes.indicator,

            }}
          centered
        >
          <Tab className={classes.tab} label="Description" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Functions" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Sources" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.description} value={value} index={0}>
        <DescriptionVitaminB1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FunctionsVitaminB1 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SourcesVitaminB1 />
      </TabPanel>
    </div>
    </div>
  );
}