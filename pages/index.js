import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getUserData } from '../lib/users'
import useSWR from 'swr'
import { pic_normal_nm, pic_normal_ovl, pic_normal_promotion, pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from '../public/Menu_Data'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        <Link href="/menus">
              <a>
                <button>Go 2 menus</button>
              </a>
            </Link>
          {pic_normal_ovl && pic_normal_ovl.map(({ original }) => (
            <img src={original} alt="Ovl Pic" className="ovl" key={original} />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = await getUserData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getServerSideProps(context) {
  // console.log(context)
  return {
    props: {
      // props for your component
    }
  }
}

function Profile() {
  const url = 'http://dummy.restapiexample.com/api/v1/employees';
  const fetcher = key => fetch(key).then(res => res.json())
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // console.log(data.data)

  return <div>hello {data.data[0].employee_name}!</div>
}
