import './Subscribe.scss'
import subscribe from '../../images/subscribe.svg'

export const Subscribe = () => {
	return (
		<div className="subscribe-bg">
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
			<img className='subscribe__illustration-left' src={subscribe} alt="subscribe" />
			<img className='subscribe__illustration-right' src={subscribe} alt="subscribe" />
		</div>
	)
}
