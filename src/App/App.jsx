import './App.scss'

// import persons image 
import jerome from '../images/persons/Jerome.svg'
import dianne from '../images/persons/Dianne.svg'
import guy from '../images/persons/Guy.svg'
import kristin from '../images/persons/Kristin.svg'
import leslie from '../images/persons/Leslie.svg'
import marvin from '../images/persons/Marvin.svg'

// persons for slider 
import dianneSlider from '../images/persons/slider/dianne-slider.svg'
import jeromeSlider from '../images/persons/slider/jerome-slider.svg'
import kristinSlider from '../images/persons/slider/kristin-slider.svg'
import marvinSlider from '../images/persons/slider/marvin-slider.svg'

// import other images
import girl from '../images/girl.svg'
import hover from '../images/hover.svg'
import logo from '../images/logo.svg'
import login from '../images/login.svg'
import illustrationBenefints from '../images/benefits-illustration.svg'
import mainIllustration from '../images/main-page-illustration.svg'
import certificate from '../images/certificate.svg'
import delmar from '../images/delmar.svg'
import sentinal from '../images/sentinal.svg'
import national from '../images/national.svg'

// our posts latest posts
import divider from '../images/our-blog-latest-posts/divider.svg'
import calendar from '../images/our-blog-latest-posts/Calendar.svg'
import clock from '../images/our-blog-latest-posts/Clock.svg'
import arrowRight from '../images/our-blog-latest-posts/arrowRight.svg'
import podcast from '../images/our-blog-latest-posts/podcast.svg'
import video from '../images/our-blog-latest-posts/video.svg'
import article from '../images/our-blog-latest-posts/article.svg'

// links
import facebook from '../images/links/Facebook.svg'
import instagram from '../images/links/Instagram.svg'
import linkedIn from '../images/links/Linked-In.svg'
import twitter from '../images/links/Twitter.svg'
import telegram from '../images/links/telegram.svg'
import youTube from '../images/links/YouTube.svg'
import footerLogo from '../images/links/footerLogo.svg'


import { useState } from 'react'

function App() {


  const [translate, setTranslate] = useState(0);

  const offset = 315;

  const translateSliderToLeft = () => {
    setTranslate((currentOffset) => {
      const newOffset = currentOffset - offset;
      return Math.max(newOffset, 0);
    })
  }
  const translateSliderToRight = () => {
    setTranslate((currentOffset) => {
      const newOffset = currentOffset + offset;
      return (Math.min(newOffset, 630));
    })
  }

  return (
    <>
      <div className="main-bg">
        <div className="wrapper">
          <header className="header">
            <div className="header__logo">
              <img src={logo} alt="logo" width="130" height="22" />
            </div>
            <div className="header__navigation">
              <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>
            </div>
            <button className="header__get-consult-button button_orange">
              Get consultation
            </button>
            <div className="header__login">
              <img
                src={login}
                alt="logo"
                width="16.67"
                height="17.92"
              />
              <span>Log in / Register</span>
            </div>
          </header>
          <div className="main-info">
            <div className="main-info__left-part">
              <div className="main-info__play-image">
                <img src={hover} alt="play" />
                <span>Play showreel</span>
              </div>
              <h1 className="main-info__main-title">
                Enjoy studying with Createx Online Courses
              </h1>
              <div className="main-info__main-buttons">
                <button className="button">About us</button>
                <button className="button_orange">Explore courses</button>
              </div>
            </div>
            <div className="main-info__right-part">
              <img src={mainIllustration} alt="mainIllustration" />
            </div>
            <div className="main-info__statistic">
              <div className="main-info__item"><span>1200</span>Students graduated</div>
              <div className="main-info__item"><span>84</span>Completed courses</div>
              <div className="main-info__item"><span>16</span>Qualified tutors</div>
              <div className="main-info__item"><span>5</span>Years of experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="about">
          <div className="about__image">
            <img
              src={girl}
              alt="about"
              width="705"
              height="560"
            />
          </div>
          <div className="about__about-us">
            <h6 className="about__subtitle subtitle">
              who we are
            </h6>
            <h2 className="about__title title">
              Why Createx?
            </h2>
            <ul className="about__list">
              <li>
                <a
                >A fermentum in morbi pretium aliquam adipiscing donec
                  tempus.</a
                >
              </li>
              <li>
                <a>Vulputate placerat amet pulvinar lorem nisl.</a>
              </li>
              <li>
                <a
                >Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.</a
                >
              </li>
              <li>
                <a >Etiam duis lobortis in fames ultrices commodo nibh.</a>
              </li>
              <li>
                <a >Tincidunt sagittis neque sem ac eget.</a>
              </li>
              <li>
                <a
                >Ultricies amet justo et eget quisque purus vulputate dapibus
                  tortor.</a
                >
              </li>
            </ul>
            <button className="about__button button_orange">More about us</button>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="featured">
          <h6 className="featured__subtitle subtitle">
            Ready to learn?
          </h6>
          <div className="flex sb aic">
            <h2 className="featured__title title">
              Featured Courses
            </h2>
            <button className="featured__button button asfe">
              View all courses
            </button>
          </div>

          <div className="featured__courses courses">
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={jerome}
                alt="jerome"
              />
              <div className="course-content">
                <span className="featured__spec spec green">Marketing</span>
                <h4 className="featured__course-title">
                  The Ultimate Google Ads Training Course
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$100</span> | by Jerome Bell
                </div>
              </div>
            </div>
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={marvin}
                alt="marvin"
              />
              <div className="course-content">
                <span className="featured__spec spec blue">Management</span>
                <h4 className="featured__course-title">
                  Product Management Fundamentals
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$480</span> | by Marvin McKinney
                </div>
              </div>
            </div>
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={leslie}
                alt="Leslie"
              />
              <div className="course-content">
                <span className="featured__spec spec orange">HR & Recruting</span>
                <h4 className="featured__course-title">
                  HR Management and Analytics
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$200</span> | by Leslie Alexander Li
                </div>
              </div>
            </div>
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={kristin}
                alt="Kristin"
              />
              <div className="course-content">
                <span className="featured__spec spec green">Marketing</span>
                <h4 className="featured__course-title">
                  Brand Management & PR Communications
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$530</span> | by Kristin Watson
                </div>
              </div>
            </div>
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={dianne}
                alt="Dianne"
              />
              <div className="course-content">
                <span className="featured__spec spec blue">Management</span>
                <h4 className="featured__course-title">
                  Business Development Management
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$400</span> | by Dianne Russell
                </div>
              </div>
            </div>
            <div className="featured__course course">
              <img
                className="featured__img img"
                src={guy}
                alt="Guy"
              />
              <div className="course-content">
                <span className="featured__spec spec red">Design</span>
                <h4 className="featured__course-title">
                  Graphic Design Basic
                </h4>
                <div className="featured__price-and-teacher price-and-teacher">
                  <span>$500</span> | by Guy Hawkins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="benefits">
          <h6 className="benefits__subtitle subtitle">
            Our benefits
          </h6>
          <h2 className="benefits__title title">
            That’s how we do it
          </h2>
          <div className="benefits__list">
            <button className="benefits__button benefits__button_active">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77932 1.46709C7.24248 0.398992 8.75719 0.39899 9.22036 1.46709L10.6214 4.69809L14.1273 5.03216C15.2862 5.14259 15.7543 6.58317 14.8816 7.35373L12.2417 9.68466L13.0073 13.1221C13.2604 14.2585 12.035 15.1488 11.0325 14.5569L7.99984 12.7665L4.96721 14.5569C3.96469 15.1488 2.73926 14.2585 2.99236 13.1221L3.75801 9.68466L1.11809 7.35373C0.245398 6.58317 0.71347 5.14259 1.87242 5.03216L5.37824 4.69809L6.77932 1.46709ZM9.40091 5.22735L7.99984 1.99635L6.59876 5.22735C6.406 5.67189 5.98678 5.97647 5.50444 6.02243L1.99861 6.35649L4.63852 8.68743C5.00174 9.00813 5.16186 9.50095 5.05652 9.97389L4.29088 13.4114L7.32351 11.621C7.74075 11.3746 8.25893 11.3746 8.67617 11.621L11.7088 13.4114L10.9432 9.97389C10.8378 9.50095 10.9979 9.00813 11.3612 8.68743L14.0011 6.35649L10.4952 6.02243C10.0129 5.97647 9.59368 5.67189 9.40091 5.22735Z" fill="#FF3F3A" />
              </svg>
              Experienced Tutors
            </button>
            <button className="benefits__button benefits__button_active">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.9547 2.16732C8.86168 2.16732 8.77547 2.21676 8.72843 2.29736L8.72433 2.30438L5.66683 7.26115V13.834H11.3907C11.5135 13.834 11.6198 13.7487 11.6464 13.629L11.6487 13.6186L13.3487 6.97883C13.3798 6.8179 13.2565 6.66732 13.0915 6.66732H10.5002C10.066 6.66732 9.62677 6.52228 9.30696 6.21014C8.97075 5.88199 8.81488 5.41203 8.91491 4.90572L9.39414 2.48001C9.42614 2.31806 9.30219 2.16732 9.13725 2.16732H8.9547ZM4.3335 13.834V7.73875H1.97118C1.82739 7.73875 1.7104 7.85476 1.70929 7.99872C1.70929 7.99872 1.70929 7.99872 1.70929 7.99872L1.66684 13.5701C1.66572 13.7154 1.78327 13.834 1.92868 13.834H4.3335ZM4.62809 6.40541L7.58155 1.61731C7.86843 1.13222 8.39032 0.833984 8.9547 0.833984H9.13725C10.1424 0.833984 10.897 1.75237 10.7022 2.73844L10.223 5.16415C10.2144 5.20732 10.22 5.22693 10.2213 5.23124C10.2228 5.23604 10.226 5.24402 10.2383 5.25596C10.2661 5.28317 10.3492 5.33398 10.5002 5.33398H13.0915C14.1121 5.33398 14.8701 6.27923 14.6487 7.27539L14.6464 7.28579L12.9453 13.93C12.7788 14.6537 12.1343 15.1673 11.3907 15.1673H1.92868C1.04298 15.1673 0.326756 14.4457 0.333544 13.56C0.333544 13.56 0.333544 13.56 0.333544 13.56L0.375993 7.98854C0.38271 7.11235 1.09485 6.40541 1.97118 6.40541H4.62809Z" fill="#9A9CA5" />
              </svg>
              Feedback & support
            </button>
            <button className="benefits__button benefits__button_active">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.20184 0.736397C7.38953 0.642555 7.61044 0.642555 7.79813 0.736397L14.4648 4.06973C14.6906 4.18266 14.8333 4.4135 14.8333 4.66602C14.8333 4.91853 14.6906 5.14937 14.4648 5.2623L7.79813 8.59563C7.61044 8.68948 7.38953 8.68948 7.20184 8.59563L0.535174 5.2623C0.309318 5.14937 0.16665 4.91853 0.16665 4.66602C0.16665 4.4135 0.309318 4.18266 0.535174 4.06973L7.20184 0.736397ZM2.32403 4.66602L7.49998 7.25399L12.6759 4.66602L7.49998 2.07804L2.32403 4.66602Z" fill="#9A9CA5" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.237032 7.70121C0.401691 7.37189 0.80214 7.2384 1.13146 7.40306L7.49998 10.5873L13.8685 7.40306C14.1978 7.2384 14.5983 7.37189 14.7629 7.70121C14.9276 8.03052 14.7941 8.43097 14.4648 8.59563L7.79813 11.929C7.61044 12.0228 7.38953 12.0228 7.20184 11.929L0.535174 8.59563C0.205855 8.43097 0.0723723 8.03052 0.237032 7.70121Z" fill="#9A9CA5" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.237032 11.0345C0.401691 10.7052 0.80214 10.5717 1.13146 10.7364L7.49998 13.9207L13.8685 10.7364C14.1978 10.5717 14.5983 10.7052 14.7629 11.0345C14.9276 11.3639 14.7941 11.7643 14.4648 11.929L7.79813 15.2623C7.61044 15.3561 7.38953 15.3561 7.20184 15.2623L0.535174 11.929C0.205855 11.7643 0.0723723 11.3639 0.237032 11.0345Z" fill="#9A9CA5" />
              </svg>

              24/7 Online Library
            </button>
            <button className="benefits__button benefits__button_active">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.6153 6.04557C14.5204 6.70339 14.2954 7.32861 13.9619 7.90355C13.9869 8.0459 13.9997 8.18979 13.9997 8.33429C13.9997 8.83617 13.8543 9.3165 13.5849 9.7529C13.4504 9.97073 13.4158 10.226 13.4025 10.3946C13.3873 10.5879 13.3924 10.7994 13.4062 11.0025C13.4217 11.2304 13.4497 11.4697 13.4818 11.6954C13.2216 11.6196 12.9395 11.5434 12.6704 11.4826C12.4465 11.4321 12.2174 11.3891 12.0099 11.3676C11.8289 11.349 11.5674 11.3345 11.3335 11.4101C10.8221 11.5754 10.2594 11.6676 9.66636 11.6676C8.96109 11.6676 8.31335 11.5424 7.74559 11.325C7.60903 11.3312 7.47147 11.3343 7.33301 11.3343C6.52993 11.3343 5.75701 11.2287 5.03385 11.0335C6.08516 12.2494 7.81828 13.001 9.66636 13.001C10.3883 13.001 11.0812 12.8901 11.7198 12.6864C11.7209 12.6865 11.723 12.6864 11.726 12.6864C11.7424 12.686 11.7879 12.6851 11.8729 12.6939C12.0067 12.7077 12.1786 12.7385 12.377 12.7833C12.7719 12.8724 13.2157 13.0038 13.5615 13.1136C14.2949 13.3464 15.0056 12.7064 14.8745 11.9621C14.8181 11.6418 14.7595 11.2508 14.7365 10.9122C14.7249 10.7419 14.7236 10.6021 14.7317 10.4995C14.7351 10.457 14.7394 10.4304 14.7421 10.4162C15.1172 9.79487 15.333 9.08744 15.333 8.33429C15.333 7.48526 15.0693 6.70995 14.6153 6.04557Z" fill="#9A9CA5" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.73109 2.79943C2.83245 3.48662 2.33306 4.38871 2.33306 5.33398C2.33306 5.80534 2.45577 6.25932 2.68599 6.68147C2.77367 6.84226 2.79854 7.00812 2.80744 7.1204C2.81714 7.24283 2.8123 7.36867 2.80166 7.48633C2.78034 7.72191 2.72949 7.98884 2.66849 8.25174C2.59715 8.55927 2.50572 8.88724 2.41296 9.19518C2.76512 9.06719 3.15003 8.93601 3.51493 8.82956C3.80985 8.74352 4.10767 8.66886 4.37274 8.62695C4.60108 8.59084 4.93243 8.55536 5.2177 8.65405C5.85792 8.87555 6.57411 9.00065 7.33306 9.00065C8.76451 9.00065 10.0358 8.55621 10.935 7.86854C11.8337 7.18135 12.3331 6.27926 12.3331 5.33398C12.3331 4.38871 11.8337 3.48662 10.935 2.79943C10.0358 2.11176 8.76451 1.66732 7.33306 1.66732C5.90162 1.66732 4.63034 2.11176 3.73109 2.79943ZM2.92116 1.74028C4.07283 0.859589 5.63489 0.333984 7.33306 0.333984C9.03123 0.333984 10.5933 0.859589 11.745 1.74028C12.8973 2.62145 13.6664 3.88602 13.6664 5.33398C13.6664 6.78194 12.8973 8.04652 11.745 8.92769C10.5933 9.80838 9.03123 10.334 7.33306 10.334C6.43769 10.334 5.58244 10.188 4.80591 9.92241C4.80513 9.92459 4.74215 9.91843 4.58098 9.94392C4.39521 9.97329 4.15809 10.0308 3.88836 10.1095C3.35138 10.2662 2.74835 10.4878 2.28902 10.6666C1.49327 10.9763 0.682633 10.212 0.95074 9.39795C1.09284 8.96647 1.26043 8.42121 1.36966 7.95041C1.42468 7.71324 1.46039 7.51384 1.47375 7.36618C1.47839 7.31492 1.47958 7.27756 1.47932 7.2523C1.17246 6.66592 0.99973 6.01748 0.99973 5.33398C0.99973 3.88602 1.76887 2.62145 2.92116 1.74028Z" fill="#9A9CA5" />
              </svg>
              Community
            </button>
          </div>

          <div className="benefits__info">
            <div className="benefits__description">
              <h3>Only practicing tutors</h3>
              <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <div className="benefits__illustration">
              <img src={illustrationBenefints} alt="benefitsIllustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="events-bg">
        <div className="wrapper">
          <div className="events">
            <h6 className="events__subtitle subtitle">
              Our Events
            </h6>
            <h2 className="events__title title">
              Lectures & workshops
            </h2>
            <div className="event">
              <div className="event__date">
                <span className='date-number'>
                  05
                </span>
                <div className="date-month">
                  <span>
                    August
                  </span>
                  <span>11:00 – 14:00</span>
                </div>
              </div>
              <div className="event__name">
                <p>Formation of the organizational structure of the company in the face of uncertainty.</p>
                <p>Onine master-class</p>
              </div>
              <button className="event__button event__button_active button">
                View more
              </button>
            </div>
            <div className="event">
              <div className="event__date">
                <span className='date-number'>
                  24
                </span>
                <div className="date-month">
                  <span>
                    July
                  </span>
                  <span>11:00 – 12:30</span>
                </div>
              </div>
              <div className="event__name">
                <p>Building a customer service department. Best Practices.</p>
                <p>Onine lecture</p>
              </div>
              <button className="event__button event__button_active button">
                View more
              </button>
            </div>
            <div className="event">
              <div className="event__date">
                <span className='date-number'>
                  16
                </span>
                <div className="date-month">
                  <span>
                    July
                  </span>
                  <span>10:00 – 13:00</span>
                </div>
              </div>
              <div className="event__name">
                <p>How to apply methods of speculative design in practice. Worldbuilding prototyping.</p>
                <p>Onine workshop</p>
              </div>
              <button className="event__button event__button_active button">
                View more
              </button>
            </div>
            <div className="show-all-events">
              <button className='show-all-events__more'>Do you want more?</button>
              <button className='show-all-events__explore show-all-events__explore button '>Explore all events</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="certificate">
          <div className="certificate__content">
            <h6 className="certificate__subtitle subtitle">
              Createx Certificate
            </h6>
            <h2 className="certificate__title title">
              Your expertise will be confirmed
            </h2>
            <p>
              We are accredited by international professional organizations and institutes:
            </p>

            <div className="certificate__logos">
              <img src={delmar} alt="delmar" />
              <img src={sentinal} alt="sentinal" />
              <img src={national} alt="national" />

            </div>
          </div>
          <img className="certificate__image" src={certificate} alt="certificate" width={705} height={500} />
        </div>
      </div>

      <div className="meet-our-team-bg">
        <div className="wrapper">
          <div className="meet-our-team">
            <h6 className='meet-our-team__subtitle subtitle'>
              Best tutors are all here
            </h6>
            <div className="flex sb aic">
              <h2 className='meet-our-team__title title'>
                Meet our team
              </h2>
              <div className="asfe">

                <svg className='meet-our-team__toLeftArrow' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={translateSliderToLeft}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z" fill="#424551" />
                </svg>

                <svg className='meet-our-team__toRightArrow' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={translateSliderToRight}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z" fill="#424551" />
                </svg>
              </div>
            </div>

            <div className="slider">
              <div className="slider-line" style={{ right: `${translate}px` }}>
                <div className="slide">
                  <div className="slide__img">
                    <img src={dianneSlider} alt="dianneslide" />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Dianne Russell</p>
                    <p className="slide__job-title">Founder and CEO</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__img">
                    <img src={jeromeSlider} alt="jeromeSlider" />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Jerome Bell</p>
                    <p className="slide__job-title">Founder and Program Director</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__img">
                    <img src={kristinSlider} alt="kristinslide" />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Kristin Watson</p>
                    <p className="slide__job-title">Marketer, Curator of Marketing Course</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__img">
                    <img src={marvinSlider} alt="marvinSlider" />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Marvin McKinney</p>
                    <p className="slide__job-title">PM, Curator of Management Course</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__img">
                    <img src={leslie} alt="leslieSlider" width={245} height={320} />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Marvin McKinney</p>
                    <p className="slide__job-title">PM, Curator of Management Course</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__img">
                    <img src={guy} alt="guySlider" width={245} height={320} />
                  </div>
                  <div className="slide__info">
                    <p className="slide__name">Marvin McKinney</p>
                    <p className="slide__job-title">PM, Curator of Management Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="our-blog">
          <h6 className='our-blog__subtitle subtitle'>
            Our blog
          </h6>
          <div className="flex sb aic">
            <h2 className='our-blog__title title'>
              Latest posts
            </h2>
            <button className="our-blog__button button asfe">
              Go to blog
            </button>
          </div>

          <div className="our-blog__posts">

            <div className="our-blog__post">
              <img src={podcast} alt="podcast" />
              <aside>
                <span>Marketing</span> <span><img src={divider} alt="divider" /></span>
                <span> <img src={calendar} alt="calendar" /></span> <span>September 4, 2020</span> <span><img src={divider} alt="divider" /></span>
                <span><img src={clock} alt="clock" /></span> <span> 36 min</span>
              </aside>
              <div className="our-blog__post-title">
                <p>What is traffic arbitrage and does it really make money?</p>
              </div>
              <div className="our-blog__post-description">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...
              </div>
              <a className="our-blog__post-more" href="">Listen</a> <img src={arrowRight} alt="arrowRight" />
            </div>

            <div className="our-blog__post">
              <img src={video} alt="podcast" />
              <aside>
                <span>Management</span> <span><img src={divider} alt="divider" /></span>
                <span> <img src={calendar} alt="calendar" /></span> <span>August 25, 2020</span> <span><img src={divider} alt="divider" /></span>
                <span><img src={clock} alt="clock" /></span> <span> 45 min</span>
              </aside>
              <div className="our-blog__post-title">
                <p>What to do and who to talk to if you want to get feedback on the product</p>
              </div>
              <div className="our-blog__post-description">
                Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...
              </div>
              <a className="our-blog__post-more" href="">Watch</a> <img src={arrowRight} alt="arrowRight" />
            </div>

            <div className="our-blog__post">
              <img src={article} alt="podcast" />
              <aside>
                <span>Marketing</span> <span><img src={divider} alt="divider" /></span>
                <span> <img src={calendar} alt="calendar" /></span> <span>September 4, 2020</span> <span><img src={divider} alt="divider" /></span>
                <span><img src={clock} alt="clock" /></span> <span> 36 min</span>
              </aside>
              <div className="our-blog__post-title">
                <p>What is traffic arbitrage and does it really make money?</p>
              </div>
              <div className="our-blog__post-description">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...
              </div>
              <a className="our-blog__post-more" href="">Listen</a> <img src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="subscribe">
          <h6 className="subscribe__subtitle subtitle">
            Don’t miss anything
          </h6>
          <h2 className="subscribe__title title">
            Subscribe to the Createx School announcements
          </h2>
          <div className="subscribe__subscribe-us">
            <input type="text" placeholder='Your working email' />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bg">
        <div className="wrapper">
          <footer className="footer">
            <div className="footer__link-us">
              <img src={footerLogo} alt="footerLogo" width={130} height={22} />
              <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>

              <div className="footer__links">

                <span className='facebook'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z" fill="white" />
                    </g>
                  </svg>
                </span>

                <span className='twitter'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z" fill="white" />
                    </g>
                  </svg>
                </span>


                <span className='youTube'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z" fill="white" />
                  </svg>
                </span>

                <span className='telegram'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M9.63262 15.1813L9.2687 20.7653C9.78938 20.7653 10.0149 20.5213 10.2853 20.2283L12.7264 17.6833L17.7847 21.7243C18.7124 22.2883 19.366 21.9913 19.6163 20.7933L22.9365 3.8214L22.9374 3.8204C23.2317 2.3244 22.4415 1.73941 21.5377 2.1064L2.02135 10.2574C0.689406 10.8214 0.709573 11.6314 1.79493 11.9984L6.78447 13.6913L18.3742 5.78039C18.9196 5.38639 19.4155 5.60439 19.0076 5.99839L9.63262 15.1813Z" fill="white" />
                    </g>
                  </svg>
                </span>

                <span className='instagram'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M21.9804 7.88005C21.9336 6.81738 21.7617 6.0868 21.5156 5.45374C21.2616 4.78176 20.8709 4.18014 20.359 3.68002C19.8589 3.1721 19.2533 2.77743 18.5891 2.52745C17.9524 2.28127 17.2256 2.10943 16.163 2.06257C15.0923 2.01175 14.7525 2 12.0371 2C9.32172 2 8.98185 2.01175 7.9152 2.05861C6.85253 2.10546 6.12195 2.27746 5.48904 2.52348C4.81692 2.77743 4.2153 3.16814 3.71517 3.68002C3.20726 4.18014 2.81274 4.78573 2.5626 5.44992C2.31643 6.0868 2.14458 6.81341 2.09773 7.87609C2.04691 8.9467 2.03516 9.28658 2.03516 12.002C2.03516 14.7173 2.04691 15.0572 2.09376 16.1239C2.14061 17.1865 2.31261 17.9171 2.55879 18.5502C2.81274 19.2221 3.20726 19.8238 3.71517 20.3239C4.2153 20.8318 4.82088 21.2265 5.48507 21.4765C6.12195 21.7226 6.84856 21.8945 7.91139 21.9413C8.97788 21.9883 9.31791 21.9999 12.0333 21.9999C14.7486 21.9999 15.0885 21.9883 16.1552 21.9413C17.2178 21.8945 17.9484 21.7226 18.5813 21.4765C19.9254 20.9568 20.9881 19.8941 21.5078 18.5502C21.7538 17.9133 21.9258 17.1865 21.9726 16.1239C22.0195 15.0572 22.0312 14.7173 22.0312 12.002C22.0312 9.28658 22.0273 8.9467 21.9804 7.88005ZM20.1794 16.0457C20.1364 17.0225 19.9723 17.5499 19.8355 17.9015C19.4995 18.7728 18.808 19.4643 17.9367 19.8004C17.585 19.9372 17.0538 20.1012 16.0808 20.1441C15.026 20.1911 14.7096 20.2027 12.0411 20.2027C9.37255 20.2027 9.0522 20.1911 8.00113 20.1441C7.02437 20.1012 6.49693 19.9372 6.1453 19.8004C5.71171 19.6402 5.31704 19.3862 4.9967 19.0541C4.6646 18.7298 4.41065 18.3391 4.2504 17.9055C4.11365 17.5539 3.94959 17.0225 3.9067 16.0497C3.8597 14.9948 3.8481 14.6783 3.8481 12.0097C3.8481 9.34122 3.8597 9.02087 3.9067 7.96995C3.94959 6.99319 4.11365 6.46575 4.2504 6.11412C4.41065 5.68038 4.6646 5.28586 5.00067 4.96536C5.32483 4.63327 5.71553 4.37931 6.14927 4.21921C6.5009 4.08247 7.03231 3.9184 8.00509 3.87537C9.05999 3.82851 9.37652 3.81676 12.0449 3.81676C14.7174 3.81676 15.0337 3.82851 16.0848 3.87537C17.0616 3.9184 17.589 4.08247 17.9406 4.21921C18.3742 4.37931 18.7689 4.63327 19.0892 4.96536C19.4213 5.28967 19.6753 5.68038 19.8355 6.11412C19.9723 6.46575 20.1364 6.99701 20.1794 7.96995C20.2262 9.02484 20.238 9.34122 20.238 12.0097C20.238 14.6783 20.2262 14.9908 20.1794 16.0457Z" fill="white" />
                      <path d="M12.0371 6.86423C9.20069 6.86423 6.89937 9.1654 6.89937 12.002C6.89937 14.8385 9.20069 17.1397 12.0371 17.1397C14.8736 17.1397 17.1748 14.8385 17.1748 12.002C17.1748 9.1654 14.8736 6.86423 12.0371 6.86423ZM12.0371 15.3347C10.197 15.3347 8.70438 13.8422 8.70438 12.002C8.70438 10.1617 10.197 8.66924 12.0371 8.66924C13.8774 8.66924 15.3698 10.1617 15.3698 12.002C15.3698 13.8422 13.8774 15.3347 12.0371 15.3347Z" fill="white" />
                      <path d="M18.5776 6.6611C18.5776 7.32346 18.0405 7.86053 17.378 7.86053C16.7156 7.86053 16.1785 7.32346 16.1785 6.6611C16.1785 5.99858 16.7156 5.46167 17.378 5.46167C18.0405 5.46167 18.5776 5.99858 18.5776 6.6611Z" fill="white" />
                    </g>
                  </svg>
                </span>

                <span className='linkedIn'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z" fill="white" />
                      <path d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z" fill="white" />
                      <path d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z" fill="white" />
                    </g>
                  </svg>

                </span>
              </div>
            </div>
            <div className="footer__site-map footer-column">
              <span> site map </span>
              <a href="">About Us</a>
              <a href="">Courses</a>
              <a href="">Events</a>
              <a href="">Blog</a>
              <a href="">Contacts</a>
            </div>
            <div className="footer__courses footer-column">
              <span> courses </span>
              <a href="">Marketing</a>
              <a href="">Management</a>
              <a href="">HR & Recruting</a>
              <a href="">Design</a>
              <a href="">Development</a>
            </div>
            <div className="footer__contact-us footer-column">
              <span> contact us </span>
              <a className="phone" href="">(405) 555-0128</a>
              <a className="email" href="">hello@createx.com</a>
            </div>

            <div className="footer__sign-up footer-column">
              <span> sign up to our newsletter </span>
              <input type="text" placeholder='Email address' />
              <p><sup>*</sup>Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
            </div>
          </footer>
        </div>
      </div>


      <div className="all-rights-bg">
        <div className="wrapper">
          <div className="all-rights">
            <p>© All rights reserved. Made with
              <span style={{ marginRight: '4.41px', marginLeft: '4.41px', }}>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99974 12.2715C4.9337 10.5252 3.22366 8.78955 2.39675 7.28361C1.55041 5.74228 1.62425 4.4441 2.09389 3.52273C3.05921 1.62892 5.80427 1.02333 7.47678 3.13865L7.9997 3.80001L8.52266 3.13868C10.1955 1.02327 12.9407 1.62896 13.906 3.52273C14.3756 4.44409 14.4494 5.74226 13.603 7.28359C12.776 8.78954 11.0659 10.5252 7.99974 12.2715ZM7.99977 1.73726C5.64696 -0.498482 2.17604 0.425546 0.905976 2.91723C0.208948 4.2847 0.199427 6.05212 1.22802 7.92536C2.24749 9.78198 4.28009 11.7417 7.67724 13.6194L7.99973 13.7976L8.32222 13.6194C11.7195 11.7417 13.7522 9.78199 14.7717 7.92537C15.8004 6.05214 15.7909 4.28472 15.0939 2.91723C13.8238 0.425498 10.3528 -0.498448 7.99977 1.73726Z" fill="#FF3F3A" />
                </svg>
              </span>
              by Createx Studio
            </p>

            <span>GO TO TOP</span>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
