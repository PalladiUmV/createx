import { useState } from 'react'

import './Events.scss'
import { Header } from "../Header/Header"
import { Subscribe } from '../Subscribe/Subscribe'
import { Footer } from '../Footer/Footer'

export const Events = () => {


	const eventsList = [
		{
			eventDateNumber: '05',
			eventMonthName: 'August',
			eventTime: '11:00 – 14:00',
			eventText: 'Formation of the organizational structure of the company in the face of uncertainty.',
			eventDescr: 'Online master-class',
		},
		{
			eventDateNumber: '24',
			eventMonthName: 'July',
			eventTime: '11:00 – 12:30',
			eventText: 'Building a customer service department. Best Practices.',
			eventDescr: 'Onine lecture',
		},
		{
			eventDateNumber: '16',
			eventMonthName: 'July',
			eventTime: '10:00 – 13:00',
			eventText: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
			eventDescr: 'Onine workshop',
		},
	]

	const [colorSwtichButtonList, setColorSwtichButtonList] = useState({ color: 'FF3F3A', flag: true })
	const [colorSwtichButtonGrid, setColorSwtichButtonGrid] = useState({ color: '424551', flag: false })
	const [switchEventStyle, setSwitchEventStyle] = useState('event-horizontal')

	const switchDisplayEvents = (display = 'list') => {
		if (display === 'grid') {
			setColorSwtichButtonList({ color: '424551', flag: false })
			setColorSwtichButtonGrid({ color: 'FF3F3A', flag: true })
			setSwitchEventStyle('event-box-style')
		}
		else {
			setColorSwtichButtonList({ color: 'FF3F3A', flag: true })
			setColorSwtichButtonGrid({ color: '424551', flag: false })
			setSwitchEventStyle('event-horizontal')
		}
	}

	return (
		<>
			<Header />

			<div className="wrapper">
				<div className="events-page">
					<h6 className="events-page__subtitle subtitle">Our events</h6>
					<h1 className='events-page__title title'>Lectures, workshops & master-classes</h1>

					<div className="events-page__toolbar toolbar">

						<div className='toolbar__category'>
							<span>Event category</span>
							<select name="select-theme" id="select-theme">
								<option value="all-themes">all themes</option>
							</select>
						</div>

						<div className="toolbar__sort-by">
							<span>Sort by</span>
							<select name="sortby" id="sortby">
								<option value="newest">newest</option>
							</select>
						</div>

						<div className="toolbar__show-per-page">
							<span>Show</span>
							<input type="number" min="9" max="20" step="1" defaultValue={9} />
							<span>events per page</span>
						</div>

						<input className="toolbar__search-event" type="text" placeholder='Search event...' />
						<div className="toolbar__change-view">
							<svg onClick={() => switchDisplayEvents('list')}
								width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_2313_4736)">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.833334 2.91634C0.833334 1.76575 1.76607 0.833008 2.91667 0.833008H17.0833C18.2339 0.833008 19.1667 1.76575 19.1667 2.91634V7.08301C19.1667 8.2336 18.2339 9.16634 17.0833 9.16634H2.91667C1.76607 9.16634 0.833334 8.2336 0.833334 7.08301V2.91634ZM2.91667 2.49967C2.68655 2.49967 2.5 2.68622 2.5 2.91634V7.08301C2.5 7.31313 2.68655 7.49967 2.91667 7.49967H17.0833C17.3135 7.49967 17.5 7.31313 17.5 7.08301V2.91634C17.5 2.68622 17.3135 2.49967 17.0833 2.49967H2.91667Z" fill={`#${colorSwtichButtonList.color}`} />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.833334 12.9163C0.833334 11.7657 1.76607 10.833 2.91667 10.833H17.0833C18.2339 10.833 19.1667 11.7657 19.1667 12.9163V17.083C19.1667 18.2336 18.2339 19.1663 17.0833 19.1663H2.91667C1.76607 19.1663 0.833334 18.2336 0.833334 17.083V12.9163ZM2.91667 12.4997C2.68655 12.4997 2.5 12.6862 2.5 12.9163V17.083C2.5 17.3131 2.68655 17.4997 2.91667 17.4997H17.0833C17.3135 17.4997 17.5 17.3131 17.5 17.083V12.9163C17.5 12.6862 17.3135 12.4997 17.0833 12.4997H2.91667Z" fill={`#${colorSwtichButtonList.color}`} />
								</g>
								<defs>
									<clipPath id="clip0_2313_4736">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>

							<svg onClick={() => switchDisplayEvents('grid')}
								width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_2313_4737)">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.833333 2.91634C0.833333 1.76575 1.76607 0.833008 2.91667 0.833008H7.08333C8.23393 0.833008 9.16667 1.76575 9.16667 2.91634V7.08301C9.16667 8.2336 8.23393 9.16634 7.08333 9.16634H2.91667C1.76607 9.16634 0.833333 8.2336 0.833333 7.08301V2.91634ZM2.91667 2.49967C2.68655 2.49967 2.5 2.68622 2.5 2.91634V7.08301C2.5 7.31313 2.68655 7.49967 2.91667 7.49967H7.08333C7.31345 7.49967 7.5 7.31313 7.5 7.08301V2.91634C7.5 2.68622 7.31345 2.49967 7.08333 2.49967H2.91667Z" fill={`#${colorSwtichButtonGrid.color}`} />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.833333 12.9163C0.833333 11.7657 1.76607 10.833 2.91667 10.833H7.08333C8.23393 10.833 9.16667 11.7657 9.16667 12.9163V17.083C9.16667 18.2336 8.23393 19.1663 7.08333 19.1663H2.91667C1.76607 19.1663 0.833333 18.2336 0.833333 17.083V12.9163ZM2.91667 12.4997C2.68655 12.4997 2.5 12.6862 2.5 12.9163V17.083C2.5 17.3131 2.68655 17.4997 2.91667 17.4997H7.08333C7.31345 17.4997 7.5 17.3131 7.5 17.083V12.9163C7.5 12.6862 7.31345 12.4997 7.08333 12.4997H2.91667Z" fill={`#${colorSwtichButtonGrid.color}`} />
									<path fillRule="evenodd" clipRule="evenodd" d="M10.8333 2.91634C10.8333 1.76575 11.7661 0.833008 12.9167 0.833008H17.0833C18.2339 0.833008 19.1667 1.76575 19.1667 2.91634V7.08301C19.1667 8.2336 18.2339 9.16634 17.0833 9.16634H12.9167C11.7661 9.16634 10.8333 8.2336 10.8333 7.08301V2.91634ZM12.9167 2.49967C12.6865 2.49967 12.5 2.68622 12.5 2.91634V7.08301C12.5 7.31313 12.6865 7.49967 12.9167 7.49967H17.0833C17.3135 7.49967 17.5 7.31313 17.5 7.08301V2.91634C17.5 2.68622 17.3135 2.49967 17.0833 2.49967H12.9167Z" fill={`#${colorSwtichButtonGrid.color}`} />
									<path fillRule="evenodd" clipRule="evenodd" d="M10.8333 12.9163C10.8333 11.7657 11.7661 10.833 12.9167 10.833H17.0833C18.2339 10.833 19.1667 11.7657 19.1667 12.9163V17.083C19.1667 18.2336 18.2339 19.1663 17.0833 19.1663H12.9167C11.7661 19.1663 10.8333 18.2336 10.8333 17.083V12.9163ZM12.9167 12.4997C12.6865 12.4997 12.5 12.6862 12.5 12.9163V17.083C12.5 17.3131 12.6865 17.4997 12.9167 17.4997H17.0833C17.3135 17.4997 17.5 17.3131 17.5 17.083V12.9163C17.5 12.6862 17.3135 12.4997 17.0833 12.4997H12.9167Z" fill={`#${colorSwtichButtonGrid.color}`} />
								</g>
								<defs>
									<clipPath id="clip0_2313_4737">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>

						</div>
					</div>

					<div className={`events-page__events ${colorSwtichButtonGrid.flag ? 'dflex' : ''}`}>
						{eventsList.map((item, index) => {
							const { eventDateNumber, eventTime, eventMonthName, eventText, eventDescr } = item;
							return (

								<div className={`events-page__event ${switchEventStyle}`}>
									<div className={`${switchEventStyle}__date`}>
										<span className='date-number'>
											{eventDateNumber}
										</span>
										<div className="date-month">
											<span>
												{eventMonthName}
											</span>
											<span className="date-time">{eventTime}</span>
										</div>
									</div>
									<div className={`${switchEventStyle}__name`}>
										<p>{eventText}</p>
										<p>{eventDescr}</p>
									</div>
									<button className={`${switchEventStyle}__button ${switchEventStyle}__button_active button`}>
										View more
									</button>
								</div>
							)
						})}
					</div>

				</div>
			</div>
			<Subscribe />
			<Footer />
		</>
	)
}