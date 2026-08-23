"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pages = [
  "intro",
  "birthday",
  "love",
  "answer",
  "why",
  "prayer",
  "question",
  "message",
  "forever",
];

export default function Home() {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const next = () => {
    setPage((current) => Math.min(current + 1, pages.length - 1));
  };

  const previous = () => {
    setPage((current) => Math.max(current - 1, 0));
  };

  const whatsapp = () => {
    if (!questionAnswer.trim()) return;

    const message = `Aya mhi ❤️ I have answered your question on the website:

${questionAnswer}`;

    window.open(
      `https://wa.me/2349164971382?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="birthday-site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="progress">
        <span>{String(page + 1).padStart(2, "0")}</span>
        <div className="progress-line">
          <motion.div
            animate={{ width: `${((page + 1) / pages.length) * 100}%` }}
          />
        </div>
        <span>09</span>
      </div>

      <AnimatePresence mode="wait">
        {page === 0 && (
          <motion.section
            key="intro"
            className="screen intro-screen"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, filter: "blur(20px)" }}
          >
            <div className="eyebrow">A little something for</div>

            <h1>
              My
              <span>Queen</span>
            </h1>

            <p className="name">Oyedeji Queen Omoloye ❤️</p>

            <motion.button
              className="main-button"
              onClick={next}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              Open this for me
              <span>→</span>
            </motion.button>
          </motion.section>
        )}

        {page === 1 && (
          <motion.section
            key="birthday"
            className="screen photo-screen"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="photo-frame photo-one">
              <motion.img
                src="/queen-1.jpg"
                alt="Queen"
                initial={{ scale: 1.3, filter: "blur(15px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2 }}
              />
            </div>

            <div className="photo-copy">
              <span className="eyebrow">August 24 ❤️</span>
              <h2>Happy birthday, my special part.</h2>
              <p>
                Ololufe mhi ❤️ Ayo mhi ❤️ ife mhi ❤️
              </p>
            </div>

            <button className="text-button" onClick={next}>
              Keep going →
            </button>
          </motion.section>
        )}

        {page === 2 && (
          <motion.section
            key="love"
            className="screen question-screen"
            initial={{ opacity: 0, rotateX: 70, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -70, y: -100 }}
          >
            <div className="question-number">01</div>

            <h2>Do you still love me?</h2>

            <div className="choice-row">
              <button
                className="secondary-button"
                onClick={() => setAnswer("no")}
              >
                No
              </button>

              <button
                className="main-button"
                onClick={() => {
                  setAnswer("yes");
                  setTimeout(next, 500);
                }}
              >
                Yes ❤️
              </button>
            </div>

            <AnimatePresence>
              {answer === "no" && (
                <motion.div
                  className="dey-play"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                >
                  dey play 😭
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}

        {page === 3 && (
          <motion.section
            key="answer"
            className="screen answer-screen"
            initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.5, rotate: 8 }}
          >
            <div className="giant-heart">❤️</div>

            <h2>
              I knew you
              <span>would say yes.</span>
            </h2>

            <p>Now come, let me tell you something.</p>

            <button className="main-button" onClick={next}>
              Continue ❤️
            </button>
          </motion.section>
        )}

        {page === 4 && (
          <motion.section
            key="why"
            className="screen why-screen"
            initial={{ opacity: 0, y: 120, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -120, filter: "blur(12px)" }}
          >
            <div className="split-layout">
              <motion.div
                className="photo-frame photo-two"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1 }}
              >
                <img src="/queen-2.jpg" alt="Queen" />
              </motion.div>

              <div>
                <span className="eyebrow">Why you</span>

                <h2>There is so much I appreciate about you.</h2>

                <div className="reasons">
                  <span>Beautiful.</span>
                  <span>Intelligent.</span>
                  <span>Supportive.</span>
                  <span>And sometimes, you treat me like your baby. 🥺</span>
                </div>

                <p>
                  You have a way of making me feel supported, and I don't take
                  that for granted.
                </p>
              </div>
            </div>

            <button className="text-button" onClick={next}>
              Next →
            </button>
          </motion.section>
        )}

        {page === 5 && (
          <motion.section
            key="prayer"
            className="screen prayer-screen"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
          >
            <span className="eyebrow">My prayer for us 🙏</span>

            <h2>
              May we get the
              <span>future we pray for.</span>
            </h2>

            <div className="prayer-list">
              <motion.div whileHover={{ x: 12 }}>Our education 📚</motion.div>
              <motion.div whileHover={{ x: 12 }}>Our future ❤️</motion.div>
              <motion.div whileHover={{ x: 12 }}>Our faith 🙏</motion.div>
              <motion.div whileHover={{ x: 12 }}>Our family ❤️</motion.div>
              <motion.div whileHover={{ x: 12 }}>Our success 🚀</motion.div>
            </div>

            <p className="prayer-text">
              I wish us the admission we want, that both of us gain admission
              to our desired courses. Long life and prosperity. May God be with
              us and guide us through everything ahead.
            </p>

            <button className="main-button" onClick={next}>
              Amen 🙏
            </button>
          </motion.section>
        )}

        {page === 6 && (
          <motion.section
            key="question"
            className="screen final-question"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="eyebrow">One last question 🥺</span>

            <h2>Did you really consider me in our talking stage? 🥺</h2>

            <p>Come explain in my DM.</p>

            <textarea
              value={questionAnswer}
              onChange={(event) => setQuestionAnswer(event.target.value)}
              placeholder="Write your answer here..."
              rows={6}
            />

            <button
              className="main-button whatsapp-button"
              onClick={whatsapp}
              disabled={!questionAnswer.trim()}
            >
              Send it to me on WhatsApp ❤️
            </button>

            <p className="tiny-note">I&apos;m waiting for your answer 😭</p>
          </motion.section>
        )}

        {page === 7 && (
          <motion.section
            key="message"
            className="screen letter-screen"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
          >
            <span className="eyebrow">From Taiwo ❤️</span>

            <h2>For my Queen.</h2>

            <div className="letter">
              <p>Ololufe mhi ❤️❤️</p>
              <p>Eni bi okan mi ❤️</p>
              <p>
                Ayo mhi ❤️, ife mhi ❤️,my love 😍😍...
                <br />
                My Queen, My strength 💪
                <br />
                Mama ❤️
              </p>

              <p>
                Honey pie 😘, sweetie, darling 😘, sweetheart.........
                All the beautiful romantic names in the whole world is for you
                Aya mhi 😍
              </p>

              <p>
                Happy birthday to my special part, my solace 💫✨
                <br />
                I love you ❤️🥰😘🥰🥰🥰
                <br />
                More of it in earth, with joy, peace, happiness, money,
                success.... every good things
                <br />
                Amen 🙏🙏
              </p>

              <p>
                🥺🥺😢😢Emi o ni owo, that I fit give you to celebrate it
                <br />
                But here&apos;s what I have babyyy mhi 😍
                <br />
                I hope you like it and it makes you happy
              </p>

              <p>
                You know I always tell you that you are a rare gem, yeah
                <br />
                Ya very rare, everything about you is different
              </p>

              <p>
                But don&apos;t be a pikin again o 😅
                <br />
                No ooo, na pikin you still be
                <br />
                My baby 🍼
              </p>

              <p>
                Well, don&apos;t ever think I&apos;ll break my promise or cheat
                on you or any other thing
              </p>

              <p>
                Forget.... The boundary you set, is good seriously and ........
                I like it like that
                <br />
                But ..... Let&apos;s finish the remaining in my DM 😅😅
              </p>

              <p>
                Well, I stay with it and I&apos;ll continue to respect it...
                Till the time comes
              </p>

              <p>
                I pray God be with us
                <br />
                I pray we don&apos;t fail in this journey
                <br />
                🙏🙏🙏🙏
              </p>

              <p className="forever">
                Don&apos;t forget o
                <br />
                FOREVER IS THE DEAL 🤝🔐🔐I don lock am 😅😅
              </p>

              <p>May God help us</p>

              <p>
                One thing, if it&apos;s possible for us to take blood oath,
                swrs I&apos;m ready
              </p>

              <p>
                I fully trust you
                <br />
                Yeah
                <br />
                I trust you
                <br />
                E too much
              </p>

              <p>
                Don&apos;t break my heart
                <br />
                Ayo mhi
              </p>

              <p>
                Enjoy your dayyyy❤️❤️❤️❤️🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
              </p>
            </div>

            <button className="main-button" onClick={next}>
              One more thing ❤️
            </button>
          </motion.section>
        )}

        {page === 8 && (
          <motion.section
            key="forever"
            className="screen forever-screen"
            initial={{ opacity: 0, scale: 0.2, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
          >
            <div className="final-photo">
              <img src="/queen-3.jpg" alt="Queen" />
            </div>

            <span className="eyebrow">Forever.</span>

            <h2>FOREVER IS THE DEAL 🤝🔐</h2>

            <p>Aya mhi 💋❤️</p>
            <p>Mo ni fe re gaann 💋❤️</p>

            <div className="signature">— Taiwo ❤️</div>
          </motion.section>
        )}
      </AnimatePresence>

      {page > 0 && (
        <button className="back-button" onClick={previous} aria-label="Go back">
          ←
        </button>
      )}
    </main>
  );
    }
