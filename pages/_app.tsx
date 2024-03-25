import Head from "next/head";
import "../styles/global.css";
import Script from "next/script";
// import favicon from "../public/favicon.ico"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app";

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
  }: AppProps ) {
    return (<>
    <SessionProvider session={session}>
    <Head>
    <meta name="theme-color" content="black"/>
    </Head>
 <Script strategy="afterInteractive"
 type="text/javascript"
 id="yandex-metrika"
 dangerouslySetInnerHTML={{
    __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
    ym(96145801, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true
    });`
  }}
 />
    <Component {...pageProps}/>
    </SessionProvider>
 
    </>);
}