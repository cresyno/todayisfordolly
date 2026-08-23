"use client";

import { useState } from "react";

const WA_NUMBER = "2349164971382";

const openWhatsApp = (text) => {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [page3Step, setPage3Step] = useState(0);
  const [page5Choice, setPage5Choice] = useState("");
  const [page7Answer, setPage7Answer] = useState("");
  const [page9Answer, setPage9Answer] = useState(false);

  const next = () => setPage((p) => Math.min(10, p + 1));

  const previous = () => setPage((p) => Math.max(1, p - 1));

  const answerPage7 = () => {
    if (!page7Answer.trim()) return;

    openWhatsApp(
      `Aya mhi ❤️

You asked me:
"What do you think I love most about you? 🥺"

My answer:
${page7Answer}`
    );
  };

  const answerPage9 = () => {
    setPage9Answer(true);

    setTimeout(() => {
      next();
    }, 1700);
  };

  return (
    <main className={`experience page-${page}`}>
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      {page > 1 && page < 10 && (
        <button className="back" onClick={previous}>
          ←
        </button>
      )}

      <div className="page-counter">
        {String(page).padStart(2, "0")} / 10
      </div>

      {/* PAGE 01 */}
      {page === 1 && (
        <section className="scene entrance">
          <div className="date reveal-delay">24 · 08 · 2026</div>

          <p className="tiny-title">A VERY IMPORTANT PERSON&apos;S BIRTHDAY</p>

          <h1 className="entrance-title">
            The day
            <span>is here.</span>
          </h1>

          <div className="queen-name">
            <span>Oyedeji</span>
            <strong>Queen Omoloye ❤️</strong>
          </div>

          <div className="entrance-photo">
            <img src="/queen-1.jpg" alt="Queen" />
          </div>

          <h2 className="birthday-line">Happy Birthday, Aya mhi 😍</h2>

          <div className="question-box">
            <p>Are you ready to see what I made for you? 🥺</p>

            <div className="button-row">
              <button onClick={next}>YES 😭❤️</button>
              <button onClick={next}>I&apos;m curious 👀</button>
            </div>
          </div>
        </section>
      )}

      {/* PAGE 02 */}
      {page === 2 && (
        <section className="scene you-page">
          <div className="section-label">02 — THIS IS YOU 👑</div>

          <div className="living-photo">
            <img src="/queen-2.jpg" alt="Queen" />
          </div>

          <div className="floating-word word-one">Beautiful.</div>
          <div className="floating-word word-two">Intelligent.</div>
          <div className="floating-word word-three">Supportive.</div>
          <div className="floating-word word-four">My Queen.</div>

          <div className="content-bottom">
            <h2>Do you know how beautiful you are? 🥺</h2>

            <div className="button-row">
              <button onClick={next}>Yes 😌</button>
              <button onClick={next}>Maybe you should convince me 😂</button>
            </div>
          </div>
        </section>
      )}

      {/* PAGE 03 */}
      {page === 3 && (
        <section className="scene favorite-page">
          <div className="section-label">03 — MY FAVORITE THING ❤️</div>

          <h2 className="favorite-heading">
            There&apos;s something I really appreciate about you...
          </h2>

          <div className="favorite-stack">
            <button
              className={page3Step >= 1 ? "active" : ""}
              onClick={() => setPage3Step(1)}
            >
              <span>01</span>
              <strong>Her support.</strong>
            </button>

            <button
              className={page3Step >= 2 ? "active" : ""}
              onClick={() => setPage3Step(2)}
            >
              <span>02</span>
              <strong>Your intelligence.</strong>
            </button>

            <button
              className={page3Step >= 3 ? "active" : ""}
              onClick={() => setPage3Step(3)}
            >
              <span>03</span>
              <strong>The way you treat me like baby sometimes 😂</strong>
            </button>

            <button
              className={page3Step >= 4 ? "active" : ""}
              onClick={() => setPage3Step(4)}
            >
              <span>04</span>
              <strong>And yes... you&apos;re very beautiful.</strong>
            </button>
          </div>

          {page3Step >= 4 && (
            <div className="favorite-question">
              <p>Which one do you think I notice the most? 👀</p>
              <button onClick={next}>I have an answer 😌 →</button>
            </div>
          )}
        </section>
      )}

      {/* PAGE 04 */}
      {page === 4 && (
        <section className="scene us-page">
          <div className="section-label">04 — US 🥹❤️</div>

          <h2>And then there was us.</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span>FEBRUARY 13, 2026</span>
              <h3>The day I collected your number.</h3>
            </div>

            <div className="timeline-line" />

            <div className="timeline-item">
              <span>MARCH 9, 2026</span>
              <h3>The day we officially started dating.</h3>
              <p>AFTER JAMB 😂</p>
            </div>
          </div>

          <div className="timeline-joke">I no use juju o 😅</div>

          <div className="us-question">
            <p>
              So be honest...
              <br />
              <strong>
                Did you really consider me before you finally accepted me? 👀
              </strong>
            </p>

            <button onClick={next}>Tell me the truth 😂</button>
          </div>

          <div className="callback">
            &quot;I considered, unconsidered and reconsidered you.&quot; 😂😭
          </div>
        </section>
      )}

      {/* PAGE 05 */}
      {page === 5 && (
        <section className="scene wishes-page">
          <div className="section-label">05 — THE THINGS I WISH FOR YOU 🙏</div>

          <h2>
            Your birthday should be about more than just a celebration.
          </h2>

          <p className="lead">
            It&apos;s also about the things I genuinely pray life gives you.
          </p>

          <div className="wish-grid">
            <button
              className={page5Choice === "Admission" ? "chosen" : ""}
              onClick={() => setPage5Choice("Admission")}
            >
              <span>🎓</span>
              Admission
            </button>

            <button
              className={page5Choice === "Success" ? "chosen" : ""}
              onClick={() => setPage5Choice("Success")}
            >
              <span>🚀</span>
              Success
            </button>

            <button
              className={page5Choice === "Long life" ? "chosen" : ""}
              onClick={() => setPage5Choice("Long life")}
            >
              <span>❤️</span>
              Long life
            </button>

            <button
              className={page5Choice === "Everything" ? "chosen" : ""}
              onClick={() => setPage5Choice("Everything")}
            >
              <span>😂</span>
              Everything
            </button>
          </div>

          <div className="wish-details">
            <p>🎓 I wish you the admission you want.</p>
            <p>📚 I pray you gain admission to the course you truly desire.</p>
            <p>❤️ Long life.</p>
            <p>🚀 Prosperity.</p>
            <p>
              And I want us to get the admission we are praying for.
            </p>
          </div>

          {page5Choice && (
            <div className="choice-reveal">
              You chose <strong>{page5Choice}</strong>.
              <br />
              I pray you get all of them. ❤️
              <button onClick={next}>Amen 🙏</button>
            </div>
          )}
        </section>
      )}

      {/* PAGE 06 */}
      {page === 6 && (
        <section className="scene about-me">
          <div className="section-label">06 — A LITTLE ABOUT ME 🫵🏽</div>

          <div className="abraham-photo">
            <img src="/abraham.jpg" alt="Taiwo Abraham Feranmi" />
          </div>

          <p className="behind-text">And there&apos;s one person behind all this...</p>

          <h2>Taiwo Abraham Feranmi</h2>

          <div className="ambition">
            <p>I&apos;m still building myself.</p>
            <p>I&apos;m still learning.</p>
            <p>I&apos;m still trying.</p>

            <strong>WHEN I BOOM 🚀</strong>

            <p className="future-line">I want you to be there.</p>
          </div>

          <div className="question-box dark-box">
            <p>Will you still be there when I finally boom? 🥺</p>
            <button onClick={next}>Of course ❤️</button>
            <small>I hope so 😭😂</small>
          </div>
        </section>
      )}

      {/* PAGE 07 */}
{page === 7 && (
  <section className="scene answer-page">
    <div className="section-label">
      07 — ONE QUESTION FOR MY QUEEN 👀
    </div>

    <div className="minimal-question">
      <span>Queen...</span>

      <h2>
        What do you think I love most about you? 🥺
      </h2>
    </div>

    <textarea
      value={page7Answer}
      onChange={(e) => setPage7Answer(e.target.value)}
      placeholder="Tell me what you think..."
    />

    <button
      className="whatsapp-button"
      onClick={answerPage7}
      disabled={!page7Answer.trim()}
    >
      Tell Taiwo ❤️
    </button>

    {page7Answer.trim() && (
      <button
        className="continue-button"
        onClick={next}
      >
        Continue → 💌
      </button>
    )}
  </section>
)}

      {/* PAGE 08 */}
      {page === 8 && (
        <section className="scene letter-page">
          <div className="letter-photo">
            <img src="/queen-3.jpg" alt="Queen" />
          </div>

          <div className="section-label">08 — THE MESSAGE 💌</div>

          <article className="real-letter">
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
              Honey pie 😘, sweetie, darling 😘, sweetheart......... All the
              beautiful romantic names in the whole world is for you Aya mhi
              😍
            </p>

            <p>
              Happy birthday to my special part, my solace 💫✨
              <br />
              I love you ❤️🥰😘🥰🥰🥰
              <br />
              More of it in earth, with joy, peace, happiness, money, success....
              every good things
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
              Forget.... The boundary you set, is good seriously and ........ I
              like it like that
              <br />
              But ..... Let&apos;s finish the remaining in my DM 😅😅
            </p>

            <p>
              Well, I stay with it and I&apos;ll continue to respect it... Till
              the time comes
            </p>

            <p>
              I pray God be with us
              <br />
              I pray we don&apos;t fail in this journey
              <br />
              🙏🙏🙏🙏
            </p>

            <p className="forever-line">
              Don&apos;t forget o
              <br />
              <strong>FOREVER IS THE DEAL 🤝🔐🔐</strong>
              <br />
              I don lock am 😅😅
            </p>

            <p>May God help us</p>

            <p>
              One thing, if it&apos;s possible for us to take blood oath, swrs
              I&apos;m ready
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
              Enjoy your dayyyy❤️❤️❤️❤️🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
            </p>
          </article>

          <button onClick={next}>Continue ❤️</button>
        </section>
      )}

      {/* PAGE 09 */}
      {page === 9 && (
        <section className={`scene last-question ${page9Answer ? "answered" : ""}`}>
          {!page9Answer ? (
            <>
              <div className="suspense-number">09</div>

              <div className="last-question-text">
                <span>After everything you&apos;ve seen...</span>

                <h2>Are you happy that I&apos;m your person? 🥺❤️</h2>
              </div>

              <button onClick={answerPage9}>YES ❤️</button>
            </>
          ) : (
            <div className="explosion">
              <div className="burst">❤️</div>
              <h2>Then I&apos;m happy too. 🥹</h2>
            </div>
          )}
        </section>
      )}

      {/* PAGE 10 */}
      {page === 10 && (
        <section className="scene finale">
          <div className="final-photo">
            <img src="/queen-4.jpg" alt="My Queen" />
          </div>

          <div className="confetti">✦　❤️　✦　✨　❤️　✦</div>

          <p className="final-small">24 · 08 · 2026</p>

          <h1>
            HAPPY
            <span>BIRTHDAY</span>
          </h1>

          <h2>MY QUEEN ❤️</h2>

          <p className="final-name">Oyedeji Queen Omoloye</p>

          <div className="final-words">
            <p>
              Aya mhi 💋❤️
              <br />
              Mo ni fe re gaann 💋❤️
            </p>

            <strong>FOREVER IS THE DEAL 🤝😎</strong>

            <p className="signature">
              — Taiwo Abraham Feranmi ❤️
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
