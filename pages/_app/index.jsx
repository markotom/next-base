/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../src/theme';
import Navbar from '../../components/Navbar';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next Base</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
