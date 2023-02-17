import './OurBlog.scss'


import divider from '../../images/our-blog-latest-posts/divider.svg'
import calendar from '../../images/our-blog-latest-posts/Calendar.svg'
import clock from '../../images/our-blog-latest-posts/Clock.svg'
import arrowRight from '../../images/our-blog-latest-posts/arrowRight.svg'
import podcast from '../../images/our-blog-latest-posts/podcast.svg'
import video from '../../images/our-blog-latest-posts/video.svg'
import article from '../../images/our-blog-latest-posts/article.svg'

export const OurBlog = () => {
	return (
		<div className="wrapper">
			<div className="our-blog">
				<h6 className='our-blog__subtitle subtitle'>
					Our blog
				</h6>
				<div className="flex sb aic">
					<h2 className='our-blog__title title'>
						Latest posts
					</h2>
					<button className="our-blog__button button_orange asfe">
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
	)
}
