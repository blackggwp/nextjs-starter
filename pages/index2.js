import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from '../Components/Menu';
import Layout, { siteTitle } from '../components/layout'
// import { pic_normal_nm, pic_normal_ovl, pic_normal_promotion, 
//   pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from '../public/Menu_Data'
import { pic_normal_promotion } from '../public/Menu_Data'

// const propsHome = {
//   "pic_normal": pic_normal_nm,
//   "pic_ovl": pic_normal_ovl,
//   "pic_promotion": pic_normal_promotion,
//   "headerText": "Tier1"
// }

const propsHome = {
  pic_promotion: pic_normal_promotion
}

// const propsT2 = {
//   "pic_normal": pic_pk_nm,
//   "pic_ovl": pic_pk_ovl,
//   "pic_promotion": pic_pk_promotion,
//   "headerText": "Tier2"
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Layout home>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </Layout>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="wrapped "
          variant="fullWidth"
          >
          <Tab
            value="one"
            label="Sukishi สุข Overload (All you can eat)"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Sukishi New Normal (A la carte)" 
          wrapped {...a11yProps('two')} />
          <Tab value="three" label="Promotion" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        
      </TabPanel>
      <TabPanel value={value} index="two">
      </TabPanel>
      <TabPanel value={value} index="three">
      </TabPanel>
    </div>
  );
}
