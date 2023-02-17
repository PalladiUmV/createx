import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'
import './AboutPage.scss'

import mainIllustration from './images/about-page-main-illustr.svg'
import studyingIllustration from './images/studyingIllustration.svg'
import video from './images/video.svg'
import playBtn from './images/play-btn.svg'
import structure from './images/structure.svg'
import chat from './images/chat.svg'
import target from './images/target.svg'
import calendar from './images/calendar.svg'


//directions img
import screpki from './images/screpki.svg'
import mosaic from './images/mosaic.svg'
import cubiks from './images/cubiks.svg'
import designCards from './images/designCards.svg'
import code from './images/code.svg'
import arrowRight from '../../images/our-blog-latest-posts/arrowRight.svg'

//team images 
import dianneSlider from '../../images/persons/slider/dianne-slider.svg'
import jeromeSlider from '../../images/persons/slider/jerome-slider.svg'
import kristinSlider from '../../images/persons/slider/kristin-slider.svg'
import marvinSlider from '../../images/persons/slider/marvin-slider.svg'
import leslieSlider from '../../images/persons/slider/leslie-slider.svg'
import kathrynSlider from '../../images/persons/slider/kathryn-slider.svg'
import brooklynSlider from '../../images/persons/slider/brooklyn-slider.svg'
import codySlider from '../../images/persons/slider/cody-slider.svg'



export const About = () => {

	const directions = [
		{ src: screpki, alt: 'screpki', spec: 'Marketing', specColor: 'spec_green', text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.' },
		{ src: mosaic, alt: 'mosaic', spec: 'Management', specColor: 'spec_blue', text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.' },
		{ src: cubiks, alt: 'cubiks', spec: 'HR & Recruting', specColor: 'spec_orange', text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.' },
		{ src: designCards, alt: 'designCards', spec: 'Design', specColor: 'spec_red', text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.' },
		{ src: code, alt: 'code', spec: 'Development', specColor: 'spec_purple', text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.' },
	];

	return (
		<>
			<Header />
			<div className="about-bg">
				<div className="wrapper">
					<div className="about-page">
						<div className='about-page__intro'>
							<div className='about-page__intro-left-container'>
								<h6 className="about-page__subtitle subtitle">About us</h6>
								<h1 className="about-page__title title">Createx Online School</h1>
								<p className='about-page__intro-text-bold'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
								<p className='about-page__intro-text-light'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
								<div className='about-page__intro-buttons'>
									<button className='about-page__intro-button-explore button'>Explore events</button>
									<button className='about-page__intro-button-browse button_orange'>Browse courses</button>
								</div>
							</div>
							<div className="about-page__intro-right-container">
								<img src={mainIllustration} alt="coding" />
							</div>
						</div>
					</div>

					<div className="video-statistic">
						<div className="video-statistic__play-button">
							<img src={playBtn} alt="playBtn" /> Watch Video
						</div>
						<div className="video-statistic__contaier">
							<div className="video-statistic__video">
								<img src={video} alt="video" />
							</div>

							<div className="video-statistic__statistic">
								<ul>
									<li><span>1200</span>students graduated</li>
									<li><span>84</span>completed courses</li>
									<li><span>16</span>qualified tutors</li>
									<li><span>5</span>years of experience</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="our-values">
						<h6 className="our-values__subtitle subtitle">we always stand for</h6>
						<h1 className="our-values__title title">Our core values</h1>
						<div className="our-values__items">
							<div className="our-values__item">
								<div className="our-values__item-icon">
									<img src={structure} alt="structure" />
								</div>
								<div className="our-values__item-title">Structured Approach</div>
								<p className="our-values__item-text">Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
							</div>
							<div className="our-values__item">
								<div className="our-values__item-icon">
									<img src={chat} alt="chat" />
								</div>
								<div className="our-values__item-title">Professional Feedbacks</div>
								<p className="our-values__item-text">Culpa nostrud commodo ea consequat reprehenderit aliquip.</p>
							</div>
							<div className="our-values__item">
								<div className="our-values__item-icon">
									<img src={target} alt="target" />
								</div>
								<div className="our-values__item-title">Efficiency</div>
								<div className="our-values__item-text"><p>Viverra scelerisque consequat net. Adipisicing esse consequat.</p> </div>
							</div>
							<div className="our-values__item">
								<div className="our-values__item-icon">
									<img src={calendar} alt="calendar" />
								</div>
								<div className="our-values__item-title">Flexible Shedule</div>
								<div className="our-values__item-text"><p>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p> </div>
							</div>
						</div>
					</div>

					<div className="our-directions">
						<h6 className="our-directions__subtitle subtitle">our main directions</h6>
						<h1 className="our-directions__title title">What do we teach</h1>
						<div className="our-directions__cards">
							{
								directions.map((item, idx) => {
									const { src, alt, spec, specColor, text } = item;
									return (
										<div key={idx + alt} className="our-directions__card course">
											<img
												className="our-directions__img img"
												src={src}
												alt={alt}
											/>
											<div className="our-directions__card-content">
												<span className={`our-directions__spec spec ${specColor}`}>{spec}</span>
												<p className="our-directions__card-text">
													{text}
												</p>
												<Link to='/courses' className="our-directions__card-link-more">Check courses <img src={arrowRight} alt="arrowRight" /></Link>
											</div>
										</div>
									)
								})
							}
							<div className="our-directions__card-soon">
								<span>New studying program coming soon...</span>
							</div>
						</div>

					</div>

					<div className="studying-process">
						<div className="studying-process__left-container">
							<h6 className="our-directions__subtitle subtitle">Studying process</h6>
							<h1 className="our-directions__title title">That’s how we do it</h1>

							<ul className="studying-process__list">
								<li>
									<span className="studying-process__list-step">step 1</span>
									<div className="studying-process__list-title">Watching online video lectures</div>
									<div className="studying-process__list-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</div>
								</li>
								<li>
									<span className="studying-process__list-step">step 2</span>
									<div className="studying-process__list-title">Passing test</div>
									<div className="studying-process__list-text">Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. </div>
								</li>
								<li>
									<span className="studying-process__list-step">step 3</span>
									<div className="studying-process__list-title">Curator’s feedback</div>
									<div className="studying-process__list-text">Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </div>
								</li>
								<li>
									<span className="studying-process__list-step">step 4</span>
									<div className="studying-process__list-title">Corrections if needed</div>
									<div className="studying-process__list-text">Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</div>
								</li>
							</ul>
						</div>

						<div className="studying-process__right-container">
							<img src={studyingIllustration} alt="studyingIllustration" />
						</div>
					</div>

					<div className="all-team">
						<h6 className="all-team__subtitle subtitle">Best tutors are all here</h6>
						<h2 className="all-team__title title">Meet our team</h2>
						<div className="all-team__cards">
							<div className="slide all-team__card">
								<div className="slide__img">
									<img src={dianneSlider} alt="dianneslide" />
								</div>
								<div className="slide__info">
									<p className="slide__name">Dianne Russell</p>
									<p className="slide__job-title">Founder and CEO</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={jeromeSlider} alt="jeromeSlider" />
								</div>
								<div className="slide__info">
									<p className="slide__name">Jerome Bell</p>
									<p className="slide__job-title">Founder and Program Director</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={kristinSlider} alt="kristinslide" />
								</div>
								<div className="slide__info">
									<p className="slide__name">Kristin Watson</p>
									<p className="slide__job-title">Marketer, Curator of Marketing Course</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={marvinSlider} alt="marvinSlider" />
								</div>
								<div className="slide__info">
									<p className="slide__name">Marvin McKinney</p>
									<p className="slide__job-title">PM, Curator of Management Course</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={leslieSlider} alt="leslieSlide" width={245} height={320} />
								</div>
								<div className="slide__info">
									<p className="slide__name">Leslie Alexander Li</p>
									<p className="slide__job-title">Curator of HR & Recruting Course</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={kathrynSlider} alt="brooklynSlide" width={245} height={320} />
								</div>
								<div className="slide__info">
									<p className="slide__name">Kathryn Murphy</p>
									<p className="slide__job-title">Analyst and Marketing specialist</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={brooklynSlider} alt="brooklynSlide" width={245} height={320} />
								</div>
								<div className="slide__info">
									<p className="slide__name">Brooklyn Simmons</p>
									<p className="slide__job-title">Curator of Development Course</p>
								</div>
							</div>
							<div className="all-team__card slide">
								<div className="slide__img">
									<img src={codySlider} alt="codySlide" width={245} height={320} />
								</div>
								<div className="slide__info">
									<p className="slide__name">Cody Fisher</p>
									<p className="slide__job-title">UX Designer, Curator of Design Course</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div >
		</>
	)
}
