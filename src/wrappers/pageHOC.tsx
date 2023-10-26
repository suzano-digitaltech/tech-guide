import React from "react";
import Head from "next/head";
import { I18nProvider, useI18n } from "@src/infra/i18n";
import { ModalProviderWithActiveCard } from "@src/components/Modal/ModalProviderWithInitialCard";

export function CommonHead({ pageTitle }: { pageTitle?: string }) {
  const i18n = useI18n();

  const defaultTitle = i18n.content("HEAD.TITLE") as string;
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = i18n.content("HEAD.DESCRIPTION") as string;
  const image = i18n.content("HEAD.SHARE_IMAGE") as string;
  return (
    <Head>
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <link rel="manifest" href="assets/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#0E1724" />
      <meta
        name="msapplication-TileImage"
        content="//suzano-digitaltech.github.io/tech-guide/assets/favicon/favicon.svg"
      />
      <meta name="theme-color" content="#0E1724" />

      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://metatags.io/" /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

export function pageHOC<ComponentType>(Component: ComponentType) {
  return function PageHOC({ i18nKeys, ...props }: any) {
    const OutputComponent = Component as unknown as any;
    return (
      <I18nProvider locale={props.locale} keys={i18nKeys}>
        <ModalProviderWithActiveCard modalInitialData={props.modalInitialData}>
          <CommonHead pageTitle={props.pageTitle} />
          <OutputComponent {...props} />
        </ModalProviderWithActiveCard>
      </I18nProvider>
    );
  };
}
