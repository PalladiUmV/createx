import './Certificate.scss'

import certificate from '../../images/certificate.svg'
import delmar from '../../images/delmar.svg'
import sentinal from '../../images/sentinal.svg'
import national from '../../images/national.svg'


export const Certificate = () => {
	return (
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
	)
}
