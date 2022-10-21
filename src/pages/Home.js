import Header from "../components/Header"
import Profiles from "../components/SocialProfile"
import CTA from "../components/CallToAction"
import '../App.css';
import Nav from "../components/Navigation";




// call the get accounts api here



function HomePage() {
  return (

    <>  
    <Nav/>
    <div className="">
         
                <Profiles
                id="passidherre"
                image_url="https://www.tailwind-kit.com/images/person/1.jpg"
                account_name="account Name"
                cover_photo_url="https://www.tailwind-kit.com/images/landscape/1.jpg"
                linkUrl={`accounts/:${id}`}
                />
                
                <CTA/>
    </div>
    </>

  );
}

export default HomePage;