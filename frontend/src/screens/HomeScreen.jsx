import React from 'react';
import { useSelector } from 'react-redux'
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import PopularCategory from '../components/PopularCategory';
import PopularItems from '../components/PopularItems';
import StayInTouch from '../components/StayInTouch';
import VerifiedShippingSecure from '../components/VerifiedShippingSecure';
import KidsBottom from '../components/KidsBottom';
import TopWears from '../components/TopWears';
import CustomerReview from '../components/CustomerReview';

const HomeScreen = () => {
  // const dispatch = useDispatch()
  // const {products} = useSelector(state => state.productsReducer)
  
  return (
    <>
      <Header />
      <HomeBanner />
      <KidsBottom />
      <TopWears />
      {/* <PopularCategory /> */}
      <PopularItems />
      <VerifiedShippingSecure />
      <ContactUs />
      <CustomerReview />
      <StayInTouch />
      <Footer />
    </>
  );
};

export default HomeScreen;
