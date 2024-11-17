// import React from 'react'

// import collections from '../components/collections'
// import header from '../components/header'
// import footer from '../components/footer'
// import banner from '../components/banner'
// const mainpage = () => {
//   return (
// <>
// <header/>
// <footer/>
// <collections/>
// <banner/>

// </>
//   )
// }

// export default mainpage
import React from 'react';
import Collections from '../components/collections'; // Capitalized
import Header from '../components/header'; // Capitalized
import Footer from '../components/footer'; // Capitalized
import Banner from '../components/banner'; // Capitalized

const MainPage = () => { // Capitalized
  return (
    <>
      <Header />
      <Banner />

      <Collections />
      <Footer />
    </>
  );
};

export default MainPage;
