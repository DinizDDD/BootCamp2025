import Header from "./components/Header";
import CourseSection from "./components/CoursesSection";
import NewsSection from "./components/NewsSection";
import ContactForm from "./components/ContatctForm"
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <main>
      <CourseSection/>
      <NewsSection/>
      <ContactForm/>
      <Footer/>
    </main>
    
    </>
  );
}

export default App;
