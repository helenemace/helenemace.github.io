import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Header from './Header/Header';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import About from './TabContent/About/About';
import Contact from './TabContent/Contact/Contact';
import photoUrls from '../../assets/photoUrls';
import './Layout.css';
import Photos from './TabContent/Photos/Photos';

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>PORTFOLIO</Tab>
          <Tab>ABOUT</Tab>
          <Tab>CONTACT</Tab>
        </TabList>
        <TabPanel>
          <ContentWrapper>
            <Photos
              photos = {photoUrls}
            />
          </ContentWrapper>
        </TabPanel>
        <TabPanel>
          <ContentWrapper>
            <About />
          </ContentWrapper>
        </TabPanel>
        <TabPanel>
          <ContentWrapper>
            <Contact />
          </ContentWrapper>
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}
