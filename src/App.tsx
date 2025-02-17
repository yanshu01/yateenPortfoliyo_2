import React , {useEffect , useState , CSSProperties} from "react";
import "./Styles/main.scss";
import video from "./Assets/Fire Burning Hot Sparks Rising Background Free Video.mp4";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Profile from "./Pages/Profile";
import AnimatedCursor from "react-animated-cursor"
import {InfinitySpin} from "react-loader-spinner"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  const [menuLi, setMenuLi] = useState<NodeListOf<HTMLAnchorElement> | null>(null);
  const [menuLiHam, setMenuLiHam] = useState<NodeListOf<HTMLAnchorElement> | null>(null);
  const [sections, setSections] = useState<NodeListOf<HTMLElement> | null>(null);
  const [flag,setFlag] = useState<boolean>(false);

  useEffect(() => {
    setMenuLi(document.querySelectorAll('.sidebar li a'));
    setMenuLiHam(document.querySelectorAll('.scroll-nav-respoonsive li a'));
    setSections(document.querySelectorAll('section')); 
  }, []);

  function activeMenu() {
    if (menuLi === null || menuLiHam === null || sections === null) return;

    let len = sections.length - 1; // Adjust the length since arrays are 0-indexed

    // Find the section index whose offset is less than or equal to the current scroll position
    while (len >= 0 && window.scrollY + 97 < sections[len].offsetTop) {
      len--;
    }

    // Reset all menu items to remove the 'active' class
    menuLi.forEach((sec: HTMLAnchorElement) => {
      sec.classList.remove('active');
    });
    menuLiHam.forEach((sec: HTMLAnchorElement) => {
      sec.classList.remove('active');
    });

    // Add the 'active' class to the corresponding menu item
    if (len >= 0) {
      menuLi[len].classList.add('active');
      menuLiHam[len].classList.add('active');
    }
  }

  useEffect(() => {
    activeMenu();
    window.addEventListener('scroll', activeMenu);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', activeMenu);
    };
  }, [menuLi, sections , menuLiHam]);
  // Rest of your component code...

  useEffect(() => {
    setTimeout(()=>{
      setFlag(true);
    },5000);
  },[]);
  
  return (
    <>
      {flag ? (
        <div className="App">
          <video className="body-overlay" muted autoPlay loop>
            <source src={video} />
          </video>
          <AnimatedCursor
            innerSize={15}
            outerSize={20}
            color="248, 25, 19"
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={6}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              'i',
            ]}
          />
          <Home />
          <About />
          <Experience />
          <Project />
          <Skills />
          <Profile />
          <section className="footer-area page-section scroll-to-page" id="project">
            <div className="custom-container">
              <div className="prject-content content-width">
                <div className="footer">
                  <h3>Designed And Developed By Yateen sharma 🔥</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div style={{display:"flex" , alignItems: "center" , justifyContent : "center" , width:"100%" , height:"100vh" , background:"black" , flexWrap:"wrap"}}>
          <InfinitySpin width='200' color="#28E98C" />
        </div>
      )}
    </>
  );
}

export default App;
