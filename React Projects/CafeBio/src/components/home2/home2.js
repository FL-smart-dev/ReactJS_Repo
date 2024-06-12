import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import styles from './home2.module.css';
import HeroImage from '../../images/Hero2.png';
import { home } from '../../utils/AppStrings';


const Home2 = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const words = home.words;
    const container = document.getElementById('typing-text');

    const typeWord = (word) => {
      let charIndex = 0;

      const typeLetter = () => {
        if (charIndex < word.length) {
          container.innerHTML += word[charIndex];
          charIndex++;
          setTimeout(typeLetter, 75);
        } else {
          if (currentWordIndex < words.length - 1) {
            setTimeout(() => {
              container.innerHTML = ''; // Clear text before the next word
              setIsTyping(false); // Reset typing state
              setCurrentWordIndex(currentWordIndex + 1); // Move to the next word
            }, 1000);
          } else {
            setTimeout(() => {
              container.innerHTML = ''; // Clear for the first word again
              setIsTyping(false); // Reset typing state
              setCurrentWordIndex(0); // Reset to the first word
            }, 1000);
          }
        }
      };

      typeLetter();
    };

    if (!isTyping) {
      setIsTyping(true);
      typeWord(words[currentWordIndex]);
    }
  }, [currentWordIndex, isTyping]); // Depend on these to re-trigger effect
  return (
    <div className={styles.Home2}>
      <div className={styles.herocontainer}>
        <div className={styles.herocopycontainer}>
          <div className={styles.title}>
            {home.title}<span id="typing-text"></span><span className={styles.blinkCursor}>_</span>
          </div>
          <div className={styles.subtitle}>
            {home.subtitle}
          </div>
{/*           
          <div className={styles.mainbutton}>
          <a href={home.scheduleLink}> {home.scheduleButton}</a> 
          </div> */}

          <a 
          className={styles.mainbutton} 
          href={home.scheduleLink}>
          {home.scheduleButton}
          </a>
         
          <a href={home.learnLink}>
            <div>
              <div style={{ display: 'block' }}>{home.learnButton}</div>
            </div>
          </a>
        </div>
        <div className={styles.heroimagediv}>
          <img className={styles.heroimage} src={HeroImage} alt="Step 1" />
        </div>
      </div>
    </div>
  );
};

Home2.propTypes = {};

Home2.defaultProps = {};

export default Home2;
