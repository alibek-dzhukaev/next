import A from "./A";
import Head from "next/head";
import styles from '../styles/A.module.css'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"alibek " + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className={styles.navbar}>
                <A className={styles.link} href='/' text="Main"/>
                <A className={styles.link} href='/users' text="Users"/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;