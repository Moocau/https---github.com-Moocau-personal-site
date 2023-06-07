import Image from 'next/image';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-background background'></div>
      <div className='about-content-container'>
        <div className='target-image-container'>
          <Image
            src='/robyn_scanlines.png'
            alt='photo of Robyn Snook in kyoto'
            fill={true}
          ></Image>
        </div>
        <div className='about-me-text'>
          <div className='mobile-target-image-container'>
            <Image
              src='/robyn_scanlines.png'
              alt='photo of Robyn Snook in kyoto'
              fill={true}
            ></Image>
          </div>
          <h1>MISSION REPORT</h1>
          <h2>
            TARGET: <i>Robyn Snook</i>{' '}
          </h2>
          <h2>TARGET SUMMARY:</h2>
          <div>
            <p>
              <b>NATIONALITY:</b> Canadian expat living in Tokyo, Japan.
            </p>
            <p>
              <b>BACKGROUND:</b>
            </p>
            <div className='background-container'>
              <p>
                A Financial Accounting expert who dropped everything to switch
                to Software Development.
              </p>
              <p>
                As a full-stack developer with an extensive background in
                finance with experience building applications from the ground
                up, she is well-equipped to develop innovative software
                solutions that optimize processes and enhance data analysis. Her
                experience in finance complements my technical expertise, making
                her a valuable asset to any software development team.
              </p>
              <p>
                She is currently looking for a role at an organisation where she
                can apply her skills. <b>Primary contact location:</b>{' '}
                <a href='https://www.linkedin.com/in/robynsnook/'>linkedin.</a>
              </p>
            </div>
          </div>
          <h2>SKILLS:</h2>
          <div className='skills-container'>
            <ul>
              <li>
                <h3>Languages:</h3>
              </li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>VBA</li>
            </ul>
            <ul>
              <li>
                <h3>Tech Stack:</h3>
              </li>
              <li>Next.js</li>
              <li>React</li>
              <li>Node.js</li>
              <li>CSS/SASS</li>
              <li>SQL / PostgreSQL</li>
              <li>Django</li>
              <li>Azure</li>
              <li>Docker</li>
            </ul>
            <ul>
              <li>
                <h3>Other:</h3>
              </li>
              <li>Test Case Development</li>
              <li>Business Analysis</li>
              <li>Data Analysis</li>
              <li>Financial Analysis</li>
            </ul>
          </div>
          <h2>COMMON ACTIVITIES:</h2>
          <ul>
            <li>Hiking, camping, tripping and falling, you name it!</li>
            <li>Building and painting gunpla models.</li>
            <li>Cooking and eating delicious food.</li>
            <li>Going to cafes.</li>
            <li>Watching horrible movies (on purpose).</li>
            <li>Thrifting. Check out projects for more info.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
