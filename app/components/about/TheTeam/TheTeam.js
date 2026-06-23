import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import styles from "./TheTeam.module.css";
import Image from "next/image";

export default function TheTeam({ content }) {
  const translatedContent = useTranslatedContent(content);

  if (!translatedContent?.members?.length) return null;
  return (
    <section className={styles.section} aria-labelledby="the-team-heading" data-aos="fade-up">
      <div className={styles.inner} data-aos="fade-up">
        {/* <h2 id="the-team-heading" className={styles.heading} data-aos="fade-up">
          {translatedContent.heading}
        </h2> */}

        <div className={styles.grid} data-aos="fade-up">
          {translatedContent.members.map((member) => (
            <article key={member.name} className={styles.card} data-aos="flip-left">
              <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
              <Image src="/assets/profile.png" alt={`${member.name} profile`} className={styles.profileImage} width={400} height={400}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
