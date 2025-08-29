import Header from "./components/Header";
import CourseSection from "./components/CoursesSection";
import NewsSection from "./components/NewsSection";
import ContactForm from "./components/ContatctForm"

function App() {
  return (
    <>
    <Header/>
    <main>
      <CourseSection/>
      <NewsSection/>
      <ContactForm/>
    </main>
    
    </>
  );
}

export default App;
