import { fetchProfileData, fetchSocialData, fetchSkills, fetchEdu, fetchExp, fetchProject } from './data/apiHandler';
import React, { useEffect, useState } from 'react';
import loader from './anim/loader.json';
import Lottie from 'lottie-react';
import Nav from './component/Nav';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';
import Education from './component/Education';
import Experience from './component/Experience';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Design from './tentcal/Design';
import './sass/Loader.scss';
import './sass/main.scss';

function App() {
  const [profileImg, setProImg] = useState(''); // ✅ useState, not useEffect
  const [socialMe, setSocialMe] = useState([]); // ✅ useState, not useEffect
  const [skills, setSkills] = useState([]); // ✅ useState, not useEffect
  const [education, setEdu] = useState([]); // ✅ useState, not useEffect
  const [experience, setExp] = useState([]); // ✅ useState, not useEffect
  const [project, setProject] = useState([]); // ✅ useState, not useEffect
  const [profileName, setProfileName] = useState(''); // ✅ useState, not useEffect
  const [aboutMe, setAboutMe] = useState({}); // ✅ useState, not useEffect
  // const [aboutMeText, setAboutMeText] = useState(''); // ✅ useState, not useEffect
  
    useEffect(() => {
      const load = async () => {
        const result = await fetchProfileData();
        if (result.length > 0) {
          setProImg(result[0].profile_picture);
          setProfileName(result[0].name);
          setAboutMe(result[0]);
          // setAboutMeText(result[0].about_me);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const load = async () => {
        const result = await fetchSocialData();
        if (result.length > 0) {
          setSocialMe(result);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const load = async () => {
        const result = await fetchSkills();
        if (result.length > 0) {
          setSkills(result);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const load = async () => {
        const result = await fetchEdu();
        if (result.length > 0) {
          setEdu(result);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const load = async () => {
        const result = await fetchExp();
        if (result.length > 0) {
          setExp(result);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const load = async () => {
        const result = await fetchProject();
        if (result.length > 0) {
          setProject(result);
        }
      };
      load();
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        {profileImg ? (
          <>
            <Nav profileName={profileName} />
            <Design />
            <Header profileImg={profileImg} socialMe={socialMe} profileName={profileName} />
            <main>
              <AboutMe aboutme={aboutMe}/>
              <Education education={education}/>
              <Experience experience={experience}/>
              <Skills skills={skills}/>
              <Project project={project}/>
              <Contact />
            </main>
            <Footer socialMe={socialMe}/>
          </>
        ) : (
          <div className="loader">
            <Lottie loop={true} animationData={loader} className="loaderAnimation" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
