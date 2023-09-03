import Link from 'next/link';
import { useRouter } from 'next/router';
import {FC} from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
const {pathname} = useRouter();
    return <header className={styles.header}>
        <Link href='/' className={pathname === '/' ? styles.active : ''}>
            Home
        </Link>
        <Link className={pathname === '/register' ? styles.active : ''} href='/register'>
            Register
        </Link>
    </header>
}


export default Header;