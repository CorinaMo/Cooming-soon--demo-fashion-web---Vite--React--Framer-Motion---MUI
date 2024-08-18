import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./wild_theme";
import getSections from "./utils/getSections";

import { MenuAppBar } from "./components/appbar";
import Slide from "./components/slides";

function App() {
  const { sections } = getSections();
  const [visibleSection, setVisibleSection] = useState(sections[0].name);

  useEffect(() => {
    const handleScroll = () => {
      let largestVisibleHeight = 0;
      let largestVisibleSection = null;

      sections.forEach((section) => {
        const rect = section?.ref?.current?.getBoundingClientRect() || 0;
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > largestVisibleHeight) {
          largestVisibleHeight = visibleHeight;
          largestVisibleSection = section.name;
        }
      });

      if (largestVisibleSection && largestVisibleSection !== visibleSection) {
        setVisibleSection(largestVisibleSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, visibleSection]);

  const scrollToNextSection = () => {
    const currentIndex = sections.findIndex((section) => section.name === visibleSection);
    const nextIndex = currentIndex + 1;

    if (nextIndex < sections.length) {
      sections[nextIndex].ref?.current?.scrollIntoView({ behavior: "auto" });
    }
  };

  const scrollToSection = (sectionName) => {
    const section = sections.find((section) => section.name === sectionName);
    if (section) {
      section?.ref?.current?.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar sections={sections} scrollToSection={scrollToSection} />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {sections.map((section, i) => (
          <Slide
            key={'slide' + i}
            section={section}
            isVisible={visibleSection === section.name}
          />
        ))}
      </div>
      <Fab
        color="#ffffff"
        aria-label="scroll-down"
        sx={{
          display: visibleSection === 'contact' ? 'none' : 'flex',
          position: "fixed",
          bottom: 10, right: 10 
        }}
        onClick={scrollToNextSection}
      >
        <KeyboardDoubleArrowDownIcon color="primary" fontSize="large" />
      </Fab>
    </ThemeProvider>
  );
}

export default App;
