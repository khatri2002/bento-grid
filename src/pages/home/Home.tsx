import styles from "./Home.module.css";
import FiveStars from "../../assets/images/illustration-five-stars.webp";
import MultiplePlatforms from "../../assets/images/illustration-multiple-platforms.png";
import ConsistentSchedule from "../../assets/images/illustration-consistent-schedule.webp";
import SchedulePosts from "../../assets/images/illustration-schedule-posts.webp";
import GrowFollowers from "../../assets/images/illustration-grow-followers.webp";
import AudienceGrowth from "../../assets/images/illustration-audience-growth.webp";
import CreatePost from "../../assets/images/illustration-create-post.webp";
import AiContent from "../../assets/images/illustration-ai-content.webp";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.card1}`}>
          <h1>
            Social Media <span className={styles.active}>10x</span>{" "}
            <span className={styles.italic_}>Faster</span> with AI
          </h1>
          <img src={FiveStars} alt="five stars" />
          <span className={styles.desc}>Over 4,000 5-star reviews</span>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <img src={MultiplePlatforms} alt="multiple platforms" />
          <h2 className={`${styles.subHeading} ${styles.small}`}>
            Manage multiple accounts and platforms.
          </h2>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <h2 className={`${styles.subHeading} ${styles.small}`}>
            Maintain a consistent posting schedule.
          </h2>
          <img src={ConsistentSchedule} alt="consistent schedule" />
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <h2 className={`${styles.subHeading} ${styles.small}`}>
            Schedule to social media.
          </h2>
          <img src={SchedulePosts} alt="schedule posts" />
          <span>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </span>
        </div>
        <div className={`${styles.card} ${styles.card5}`}>
          <img src={GrowFollowers} alt="grow followers" />
          <h2 className={`${styles.subHeading} ${styles.big}`}>
            Grow followers with non-stop content.
          </h2>
        </div>
        <div className={`${styles.card} ${styles.card6}`}>
          <h2>
            <span className={styles.big}>&gt;56%</span> faster audience growth
          </h2>
          <img src={AudienceGrowth} alt="audience growth" />
        </div>
        <div className={styles.card78Container}>
          <div className={`${styles.card} ${styles.card7}`}>
            <h2 className={`${styles.subHeading} ${styles.small}`}>
              Create and schedule content{" "}
              <span className={styles.active}>quicker.</span>
            </h2>
            <img src={CreatePost} alt="create post" />
          </div>
          <div className={`${styles.card} ${styles.card8}`}>
            <h2 className={`${styles.subHeading} ${styles.small}`}>
              Write your content using AI.
            </h2>
            <img src={AiContent} alt="ai content" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
