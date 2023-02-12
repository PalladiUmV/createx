import './HomePage.scss'
import { useState } from 'react'

//components
import { Header } from '../Header/Header'
import { Certificate } from '../CertificateComponent/Certificate'
import { Subscribe } from '../Subscribe/Subscribe'
import { Footer } from '../Footer/Footer'

// import persons image 
import jerome from '../../images/persons/Jerome.svg'
import dianne from '../../images/persons/Dianne.svg'
import guy from '../../images/persons/Guy.svg'
import kristin from '../../images/persons/Kristin.svg'
import leslie from '../../images/persons/Leslie.svg'
import marvin from '../../images/persons/Marvin.svg'

// person images for slider 
import dianneSlider from '../../images/persons/slider/dianne-slider.svg'
import jeromeSlider from '../../images/persons/slider/jerome-slider.svg'
import kristinSlider from '../../images/persons/slider/kristin-slider.svg'
import marvinSlider from '../../images/persons/slider/marvin-slider.svg'

// import other images
import girl from '../../images/girl.svg'
import hover from '../../images/hover.svg'

import illustrationBenefints from '../../images/benefits-illustration.svg'
import mainIllustration from '../../images/main-page-illustration.svg'


// our posts latest posts
import divider from '../../images/our-blog-latest-posts/divider.svg'
import calendar from '../../images/our-blog-latest-posts/Calendar.svg'
import clock from '../../images/our-blog-latest-posts/Clock.svg'
import arrowRight from '../../images/our-blog-latest-posts/arrowRight.svg'
import podcast from '../../images/our-blog-latest-posts/podcast.svg'
import video from '../../images/our-blog-latest-posts/video.svg'
import article from '../../images/our-blog-latest-posts/article.svg'

// footer


export const HomePage = () => {

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
					<Header />
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

					<div className="featured__courses main-courses">
						<div className="featured__course course">
							<img
								className="featured__img img"
								src={jerome}
								alt="jerome"
							/>
							<div className="course-content">
								<span className="featured__spec spec spec_green">Marketing</span>
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
								<span className="featured__spec spec spec_blue">Management</span>
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
								<span className="featured__spec spec spec_orange">HR & Recruting</span>
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
								<span className="featured__spec spec spec_green">Marketing</span>
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
								<span className="featured__spec spec spec_blue">Management</span>
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
								<span className="featured__spec spec spec_red">Design</span>
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
					<div className="homepage-events">
						<h6 className="homepage-events__subtitle subtitle">
							Our Events
						</h6>
						<h2 className="homepage-events__title title">
							Lectures & workshops
						</h2>
						<div className="homepage__event event-horizontal">
							<div className="event-horizontal__date">
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
							<div className="event-horizontal__name">
								<p>Formation of the organizational structure of the company in the face of uncertainty.</p>
								<p>Onine master-class</p>
							</div>
							<button className="event-horizontal__button event-horizontal__button_active button">
								View more
							</button>
						</div>
						<div className="homepage__event event-horizontal">
							<div className="event-horizontal__date">
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
							<div className="event-horizontal__name">
								<p>Building a customer service department. Best Practices.</p>
								<p>Onine lecture</p>
							</div>
							<button className="event-horizontal__button event-horizontal__button_active button">
								View more
							</button>
						</div>
						<div className="homepage__event event-horizontal">
							<div className="event-horizontal__date">
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
							<div className="event-horizontal__name">
								<p>How to apply methods of speculative design in practice. Worldbuilding prototyping.</p>
								<p>Onine workshop</p>
							</div>
							<button className="event-horizontal__button event-horizontal__button_active button">
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

			<Certificate />

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
										<img src={dianneSlider} alt="leslieSlider" width={245} height={320} />
									</div>
									<div className="slide__info">
										<p className="slide__name">Marvin McKinney</p>
										<p className="slide__job-title">PM, Curator of Management Course</p>
									</div>
								</div>
								<div className="slide">
									<div className="slide__img">
										<img src={jeromeSlider} alt="guySlider" width={245} height={320} />
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

			<Subscribe />

			<Footer />
		</>
	)
}
