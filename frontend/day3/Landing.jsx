
import Company from '../components/company/Company'
import './Landing.css'
import Navbar from './Navbar';
const Landing = () => {
  const array = [
    {
    title:"Accenture",
    rating:4.3,
    location:"Banglore"
  },
    {
    title:"IBM",
    rating:4.2,
    location:"Banglore"
  },
    {
    title:"HCL",
    rating:4.0,
    location:"Chennai"
  },
  {
    title:"Tata Consultancy Service",
    rating:4.3,
    location:"Chennai"
  },
  {
    title:"Amazon",
    rating:5.0,
    location:"Hyderabad"
  },
];
  return (
    <div className='landing'>
      <Navbar/>
      <div className="right">
        {array.map((a,i)=>{
          return(
            <>
            <Company title={a.title} rating={a.rating} locaion={a.location} />
            </>
          )
        })}
      </div>
      
    </div>
  )
}
export default Landing
