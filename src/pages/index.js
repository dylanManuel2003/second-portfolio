import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/index';
import Home from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function index() {
  return (
    <Layout >
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  )
}
