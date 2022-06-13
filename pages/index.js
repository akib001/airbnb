import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import MenuModal from '../components/MenuModal';
import LoginModal from '../components/LoginModal';


export default function Home({ exploreData, cardsData }) {
  const dispatch = useDispatch();
  
  // Beacuse it's a next app we can't run localstorage on redux app it will show an error so to avoid that error 
  useEffect(() => {
    let retrivedToken = localStorage.getItem('token');
    let retrivedEmail = localStorage.getItem('userEmail');

    dispatch(uiActions.retriveUserData({
      token: retrivedToken,
      userEmail: retrivedEmail
    }))
  }, [dispatch]);

  return (
    <div className="">
      {/* Modals */}
      <MenuModal/>
      <LoginModal/>
      <Head>
        <title>Share Home</title>
        <meta name="description" content="A MERN stack web application for users to search, post, review and rent vacation home rentals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* <div className='fixed top-20 right-8 border-2 z-50 bg-white p-8 rounded-xl shadow-md'>
        <li>Login</li>
        <li>Login</li>
        <li>become a host</li>
      </div> */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pl-6">
          <h2 className="text-4xl font-semibold pb-5 mt-5">Explore nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({ img, title }) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
        </div>
        <section>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by ShareHome"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const fetchedExploreData = await fetch('http://localhost:5000/exploreNearby').then(
    (res) => res.json()
  );

  const exploreData = fetchedExploreData.data;

  console.log(exploreData);

  const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
