import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

// getStaticProps only ever runs server-side
// Note that for server-side rendering you need to use getServerSideProps(context)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my barrista name is Rockin Pete.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              <Link href={`/posts/${id}`}>
              	<a>{title}</a>
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <body>
        <h1 className="title">
          Read{' '}
		  <Link href='posts/first-post'>
		  	<a>this page!</a>
		  </Link>
        </h1>
      </body>
    </Layout>
  );
}
