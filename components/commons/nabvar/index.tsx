import Link from 'next/link'

const NavBar: React.FunctionComponent = () => {
    return (
      <>    
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About us</a>
                </Link>{' '}
                |{' '}
                <Link href="/users">
                    <a>Our Work</a>
                </Link>
                |{' '}
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                |{' '}
                <Link href="/users">
                    <a>Manifest</a>
                </Link>
            </nav>
        </header>
      </>
    );
  }
  
  export default NavBar