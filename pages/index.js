import Head from 'next/head'
import Image from 'next/image'
import illustration from 'assets/images/illustration-hero.svg'
import music from 'assets/images/icon-music.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Order Summary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.customShapeDividerTop1657075072}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>

      <main className={styles.orderCard}>
        <Image src={illustration} alt="illustration" />
        <div className={styles.summaryWrapper}>
          <h3 className={styles.heading}>Order Summary</h3>
          <p className={styles.description}>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </p>

          <div className={styles.itemWrapper}>
            <div className={styles.planInfoWrapper}>
              <Image src={music} alt="music" />
              <div className={styles.planInfo}>
                <div className={styles.name}>Annual Plan</div>
                <div className={styles.price}>$59.99/year</div>
              </div>
            </div>

            <a href="#" className={styles.action}>
              Change
            </a>
          </div>

          <button className={styles.paymentBtn}>Proceed to Payment</button>

          <div className={styles.cancel}>
            <div className={styles.cancelText}>Cancel Order</div>
          </div>
        </div>
      </main>
    </div>
  )
}
