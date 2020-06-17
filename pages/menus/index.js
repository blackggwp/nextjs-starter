import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Layout, { siteTitle } from '../../components/layout'
import Link from 'next/link'
import { pic_normal_nm, pic_normal_ovl, pic_normal_promotion, pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from '../../public/Menu_Data'

export default function Menu({ children, home }) {
  return (
    <Layout home>
      <h1>Menu Page</h1>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {pic_pk_ovl && pic_pk_ovl.map(({ original }) => (
            <img src={original} alt="Ovl Pic" className="ovl" key={original} />
          ))}
      
    </Layout>
  )
}
