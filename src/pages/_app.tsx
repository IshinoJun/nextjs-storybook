import '../styles/globals.css';
import * as React from "react";
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />
}

export default MyApp
