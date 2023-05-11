import { Link } from "react-router-dom";
import styles from "./Index.module.css"

export default function Index() {
    return (
        <div className={styles.container}>
            <Link to="/dm-ig" className={styles.link}>DM IG</Link>

            <Link to="/dm-wa" className={styles.link}>DM WA</Link>
        </div>
    )
}