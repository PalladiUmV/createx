import './Courses.scss'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//components
import { Header } from '../Header/Header'
import { Certificate } from '../CertificateComponent/Certificate'
import { Subscribe } from '../Subscribe/Subscribe'
import { Footer } from '../Footer/Footer'


// import persons image 
import jerome from './persons/Jerome.svg'
import dianne from './persons/Dianne.svg'
import guy from './persons/Guy.svg'
import kristin from './persons/Kristin.svg'
import leslie from './persons/Leslie.svg'
import marvin from './persons/Marvin.svg'

import kathryn from './persons/Kathryn.svg'
import cody from './persons/Cody.svg'
import brooklyn from './persons/Brooklyn.svg'


export const Courses = () => {

	const [filtered, setFiltered] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');
	const keys = ["spec", "title", "price", "teacher"];


	useEffect(() => {
		setFiltered(courses)
	}, [])


	const courseFilter = (status) => {
		if (status === 'All') setFiltered(courses)
		else {
			let newArray = [...courses].filter(item => item.spec === status)
			setFiltered(newArray)
		}
	}

	const inputSearch = (data) => {
		return data.filter((item) =>
			keys.some((key) => {
				console.log('itemKey >> ', item[key])
				return item[key].toString().toLowerCase().includes(searchCourse.toString().toLowerCase())
			}))
	}
	const coursesCount = [
		{ title: 'All', sup: 17 },
		{ title: 'Marketing', sup: 4 },
		{ title: 'Management', sup: 3 },
		{ title: 'HR & Recruting', sup: 5 },
		{ title: 'Design', sup: 2 },
		{ title: 'Development', sup: 3 },
	];

	const courses = [
		{ src: jerome, alt: 'jerome', spec: 'Marketing', specColor: 'spec_green', title: 'The Ultimate Google Ads Training Course', price: 100, teacher: 'Jerome Bell' },
		{ src: marvin, alt: 'marvin', spec: 'Management', specColor: 'spec_blue', title: 'Product Management Fundamentals', price: 480, teacher: 'Marvin McKinney' },
		{ src: leslie, alt: 'leslie', spec: 'HR & Recruting', specColor: 'spec_orange', title: 'HR  Management and Analytics', price: 200, teacher: 'Leslie Alexander Li' },
		{ src: kristin, alt: 'kristin', spec: 'Marketing', specColor: 'spec_green', title: 'Brand Management & PR Communications', price: 530, teacher: 'Kristin Watson' },
		{ src: guy, alt: 'guy', spec: 'Design', specColor: 'spec_red', title: 'Graphic Design Basic', price: 500, teacher: 'Guy Hawkins' },
		{ src: dianne, alt: 'dianne', spec: 'Management', specColor: 'spec_blue', title: 'Business Development Management', price: 400, teacher: 'Dianne Russell' },
		{ src: brooklyn, alt: 'brooklyn', spec: 'Development', specColor: 'spec_purple', title: 'Highload Software Architecture', price: 600, teacher: 'Brooklyn Simmons' },
		{ src: kathryn, alt: 'kathryn', spec: 'HR & Recruting', specColor: 'spec_orange', title: 'Human Resources – Selection and Recruitment', price: 150, teacher: 'Kathryn Murphy' },
		{ src: cody, alt: 'cody', spec: 'Design', specColor: 'spec_red', title: 'User Experience. Human-centered Design', price: 240, teacher: 'Cody Fisher' },
	];

	return (
		<>
			<Header />
			<div className="wrapper">
				<div className="courses">
					<h6 className="courses__subtitle subtitle">Enjoy your studying!</h6>
					<h1 className='courses__title title'>Our online courses</h1>

					<div className="courses__filter">
						{coursesCount.map(({ sup, title }, idx) => {
							return (
								<span key={idx + title} onClick={() => courseFilter(title, courses)}>{title} <sup>{sup}</sup> </span>
							)
						})
						}
						<input onChange={(e) => setSearchCourse(e.target.value)} type="text" placeholder='Search course...' />
					</div>

					<div className="courses__cards main-courses">
						{
							inputSearch(filtered).map((item, idx) => {
								const { src, alt, spec, specColor, title, price, teacher } = item;
								return (
									<div key={idx + alt} className="courses__card course">
										<Link to={`/courses/${idx + 1}`}>
											<img
												className="courses__img img"
												src={src}
												alt={alt}
											/>
											<div className="courses__card-content">
												<span className={`courses__spec spec ${specColor}`}>{spec}</span>
												<h4 className="courses__card-title">
													{title}
												</h4>
												<div className="courses__price-and-teacher price-and-teacher">
													<span>${price}</span> | by {teacher}
												</div>
											</div>
										</Link>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<Certificate />
			<Subscribe />
			<Footer />
		</>
	)
}


//// all cards 
{/* <>

	<div className="courses__card course">
		<img
			className="courses__img img"
			src={jerome}
			alt="jerome"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_green">Marketing</span>
			<h4 className="courses__card-title">
				The Ultimate Google Ads Training Course
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$100</span> | by Jerome Bell
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={marvin}
			alt="marvin"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_blue">Management</span>
			<h4 className="courses__card-title">
				Product Management Fundamentals
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$480</span> | by Marvin McKinney
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={leslie}
			alt="Leslie"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_orange">HR & Recruting</span>
			<h4 className="courses__card-title">
				HR Management and Analytics
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$200</span> | by Leslie Alexander Li
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={kristin}
			alt="Kristin"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_green">Marketing</span>
			<h4 className="courses__card-title">
				Brand Management & PR Communications
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$530</span> | by Kristin Watson
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={guy}
			alt="Guy"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_red">Design</span>
			<h4 className="courses__card-title">
				Graphic Design Basic
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$500</span> | by Guy Hawkins
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={dianne}
			alt="Dianne"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_blue">Management</span>
			<h4 className="courses__card-title">
				Business Development Management
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$400</span> | by Dianne Russell
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={brooklyn}
			alt="brooklyn"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_purple">Development</span>
			<h4 className="courses__card-title">
				Highload Software Architecture
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$600</span> | by Brooklyn Simmons
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={kathryn}
			alt="kathryn"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_orange">HR & Recruting</span>
			<h4 className="courses__card-title">
				Human Resources – Selection and Recruitment
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$150</span> | by Kathryn Murphy
			</div>
		</div>
	</div>
	<div className="courses__card course">
		<img
			className="courses__img img"
			src={cody}
			alt="cody"
		/>
		<div className="courses__card-content">
			<span className="courses__spec spec spec_red">Design</span>
			<h4 className="courses__card-title">
				User Experience. Human-centered Design
			</h4>
			<div className="courses__price-and-teacher price-and-teacher">
				<span>$240</span> | by Cody Fisher
			</div>
		</div>
	</div>
</> */}