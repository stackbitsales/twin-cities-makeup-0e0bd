import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page } = props;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{page.title} - Twin Cities Makeup &amp; Hair Services</title>
                <meta name="description" content="Premier on-location wedding Makeup &amp; Hair Service for Minneapolis and St. Paul. Bridal hair and makeup, NovaLash Eyelash Extensions, airbrush makeup, and more." />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Lisa Reinhardt Makeup &amp; Hair Artistry, LLC | Twincitiesmakeup.com - Twin Cities Bridal Makeup &amp; Hair Artistry"></meta>
                <meta property="og:description" content="Premier on-location wedding Makeup &amp; Hair Service for Minneapolis and St. Paul. Bridal hair and makeup, NovaLash Eyelash Extensions, airbrush makeup, and more."></meta>
                <meta property="og:url" content="https://www.twincitiesmakeup.com/"></meta>
                <meta property="og:site_name" content="Lisa Reinhardt Makeup &amp; Hair Artistry, LLC | Twincitiesmakeup.com"></meta>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            {props.children}
        </div>
    );
}
