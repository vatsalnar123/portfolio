import { Trophy, Users, TrendingUp } from 'lucide-react'
import styles from './Achievements.module.css'

const Achievements = () => {
  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2 className="section-title">Achievements & Leadership</h2>
        
        <div className={styles.achievementsGrid}>
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <Trophy size={28} />
            </div>
            <div className={styles.achievementContent}>
              <h3 className={styles.achievementTitle}>Winner of SQC Quant Challenge</h3>
              <p className={styles.achievementOrganization}>Rutgers University</p>
              <div className={styles.achievementDetails}>
                <div className={styles.detail}>
                  <span className={styles.bullet}>•</span>
                  <p>Developed a pair trading strategy for cointegrated stocks using Kalman Filters and LSTM networks</p>
                </div>
                <div className={styles.detail}>
                  <span className={styles.bullet}>•</span>
                  <p>Achieved a Sharpe Ratio of 1.5 and a Beta value of 0.02, indicating strong risk-adjusted returns and minimal market-related risk</p>
                </div>
              </div>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <TrendingUp size={16} />
                  <span>Sharpe Ratio: 1.5</span>
                </div>
                <div className={styles.metric}>
                  <TrendingUp size={16} />
                  <span>Beta: 0.02</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <Users size={28} />
            </div>
            <div className={styles.achievementContent}>
              <h3 className={styles.achievementTitle}>UHAACS Hackathon Mentor</h3>
              <p className={styles.achievementOrganization}>Leadership Role</p>
              <div className={styles.achievementDetails}>
                <div className={styles.detail}>
                  <span className={styles.bullet}>•</span>
                  <p>Served as a mentor at the UHAACS Hackathon, managing 11 teams and assisting students with programming challenges</p>
                </div>
                <div className={styles.detail}>
                  <span className={styles.bullet}>•</span>
                  <p>Provided technical guidance and mentorship to help teams develop innovative solutions during the competition</p>
                </div>
              </div>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <Users size={16} />
                  <span>11 Teams Managed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements