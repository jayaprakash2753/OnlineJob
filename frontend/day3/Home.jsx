import "../Pages/Home.css";
import Navbar from "./Navbar";
import Downbar from "./Downbar";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h">
          <div className="h1">Make your dream carrer reality</div>
          <div className="down1">
            <div className="h2">
              <img src="https://www.glassdoor.co.in/explore/static/images/hero-reviews.png" />
            </div>
          <div className="h4">
           <h3> Find a workplace that suits for you</h3>
            Discover what an employer is really like before you make your next
             move. Search reviews and ratings, and filter companies
            based on the qualities that matter most to your job search.
            </div>
         
          
          
          </div>
          <div className="h5">Jobs For You</div>
          <div className='down2'>
          <div className="h6">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/it_software.svg" />
          </div>
          <div className="h7">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/work_from_home.svg" />
          </div>
          <div className="h8">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/gov_jobs.svg" />
          </div>
          <div className="h9">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/part_time.svg" />
          </div>
          </div>
          <div className="down3">
          <div className="h10">Software</div>
          <div className="h11">Work from home</div>
          <div className="h12">Govt Jobs</div>
          <div className="h13">Part Time job</div>
          </div>
          <div className="h14">Feature Companies</div>
          
          <div className="h15">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/top_company_img_2.png" />
          </div>
        </div>
      </div>
      
      <Downbar />
    </>
  );
};

export default Home;
