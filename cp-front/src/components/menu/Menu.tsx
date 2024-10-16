import { BiHeart, BiHome, BiSearch, BiUserCircle } from "react-icons/bi";
import styles from './Menu.module.css';

import Link from "next/link";

export const Menu = () => {
    return (
        <nav className={styles.menu_nav}>
            <ul className={styles.menu_ul}>
                <li className={styles.menu_li}>
                    <BiHome size="1.5rem" color="#38aede" />
                    <Link href="/" >
                        Home
                    </Link>
                </li>
                <li className={styles.menu_li}>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link href="/search" >
                        Busca
                    </Link>
                </li>
                <li className={styles.menu_li}>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link href="/favorites" >
                        Favoritos
                    </Link>
                </li>
                <li className={styles.menu_li}>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link href="/profile" >
                        Perfil
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
