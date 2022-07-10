import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

function FirstPost() {
  return (
  	<Layout>
  		<Head>
	  		<title>First Post</title>
	  		<Script src="https://unpkg.com/jzz"
	  			strategy="lazyOnload"
	  			onLoad={() => {
	  				console.log('loaded')
	  			}}
	  		/>
  		</Head>
  		<h1>First Post</h1>
  		<h2>
  		<Link href='/'>
  			<a>back to start</a>
  		</Link>
  		<Image src='/images/profile.jpg' height={144} width={144}/>
  		</h2>
  	</Layout>
  );
}

export default FirstPos;
