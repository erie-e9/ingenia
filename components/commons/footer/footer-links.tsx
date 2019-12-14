import Link from 'next/link'

const FooterLinks: React.FunctionComponent = () => {
    return (
      <>
            <nav>
                <Link href="/about">
                    <a>About Us</a>
                </Link>{' '}
                |{' '}
                <Link href="/users">
                    <a>Our Work</a>
                </Link>
                |{' '}
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                |{' '}
                <Link href="/jobs">
                    <a>Jobs</a>
                </Link>
                |{' '}
                <Link href="/contact">
                    <a>Contact</a>
                </Link>                
            </nav>
      </>
    );
  }
  
  export default FooterLinks