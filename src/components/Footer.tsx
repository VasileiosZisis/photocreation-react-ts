import { Link } from 'react-router-dom'
import './Footer.css'

function Footer () {
  return (
    <footer className='footer-section'>
      <div className='footer-icons'>
        <a href='https://www.facebook.com/DomouchtsisDimitris' target='_blank'>
          <svg
            className='footer-icon'
            xmlns='http://www.w3.org/2000/svg'
            height='1.5em'
            viewBox='0 0 512 512'
            fill='#000000'
          >
            <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
          </svg>
        </a>
        <a
          href='https://www.instagram.com/studiophotocreation/'
          target='_blank'
        >
          <svg
            className='footer-icon'
            xmlns='http://www.w3.org/2000/svg'
            height='1.5em'
            viewBox='0 0 448 512'
            fill='#000000'
          >
            <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
          </svg>
        </a>
        <a
          href='mailto:photocreation@cytanet.com.cy'
          target='self'
          title='photocreation@cytanet.com.cy'
        >
          <svg
            className='footer-icon'
            xmlns='http://www.w3.org/2000/svg'
            height='1.5em'
            viewBox='0 0 512 512'
            fill='#000000'
          >
            <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
          </svg>
        </a>
        <a href='tel:+357 99 54 1649' target='_self' title='+357 99 54 1649'>
          <svg
            className='footer-icon'
            xmlns='http://www.w3.org/2000/svg'
            height='1.5em'
            viewBox='0 0 512 512'
            fill='#000000'
          >
            <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
          </svg>
        </a>
      </div>
      <div className='footer-text-div'>
        <p>
          Copyright © 2024 Photography Dimitris Domouchtsis/Studio Photo
          Creation
        </p>
        <p>
          <Link to='/privacy-policy' className='footer-a'>
            Privacy Policy
          </Link>
        </p>
        <p>
          Created by{' '}
          <a
            className='footer-a'
            href='https://www.vasiliszisis.me/'
            target='_blank'
          >
            Vasilis Zisis
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
