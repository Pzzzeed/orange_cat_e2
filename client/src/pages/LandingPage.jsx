import Layout from "../components/Layout";
import '../assets/styles/Landingpage.css';

const LandingPage = () => {
    return(
        <>
<Layout/>
       <section className="about">
       <div className="leftAbout">
       
        <h1>Make your exercise fun!</h1>
        <p>Are you tired of boring workout routines? Do you want to add some excitement to your fitness journey? Look no further than our activity tracker app! We believe that exercise should be enjoyable and something you look forward to every day. With our app, you can track your progress, challenge your friends, and earn achievements all while having fun add staying motivated. </p>
        <button>Get Started!</button>
       </div>
       <div className="rightAbout">
<img src="/public/mascot.png"/>
       </div>
       

       </section>
       <section className="feature">
        <h1>Feature!</h1>
<div className="allCard">

<div className="top">
<div className="itemCard">

    <img src="/public/tracker.jpeg"/>
    <a href="#"><span>Activity Tracking</span></a>
    <p>Easily track your workouts with our user-friendly interface. Set goals and monitor your progress toward them.</p>

</div>
<div className="itemCard">
    <img src="/public/rank.jpeg"/>
    <a href="#"><span>Rank System</span></a>
    <p>Climb the ranks by completing workouts and earning badges and rewards along the way. Compete against other users and see where you stand on our leaderboard. </p>
</div>
<div className="itemCard">
    <img src="/public/challengefriendsmall.jpeg"/>
    <a href="#"><span>Challenge friends</span></a>
    <p>Invite your friends to workout challenges and see who can achieve their goals first. Stay motivated and accountable with friendly competition.</p>
</div>

</div>
<div className="bottom">
<div className="itemCard">
    <img src="/public/achievement.jpeg"/>
   <a href="#"><span>Achievements</span></a> 
    <p>Earn achievements by completing challenges and hitting milestones. Celebrate your progress and stay motivated to reach new heights.</p>
</div>
<div className="itemCard">
    <img src="/public/statistic.jpeg"/>
    <a href="#"><span>Statistics</span></a>
    <p>View detailed charts and graphs of your progress over time. Identify areas for improvement and track your growth.</p>
</div>
<div className="itemCard">
    <img src="/public/leaderboard.jpeg"/>
    <a href="#"><span>Leaderboard</span></a>
    <p>See where you stand compared to other users on our leaderboard. Climb the ranks and compete for the top spot.</p>
</div>
</div>
</div>
       </section>



    
        </>
    )
}

export default LandingPage