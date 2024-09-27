import './App.css'
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Lobo, Main} from "./pages";
import toast, {Toaster, useToasterStore} from "react-hot-toast";
import {useEffect} from "react";
import {SkillRoutes,Roadmaps, Roadmap,} from "./pages/SkillRoutes";
const ChangeTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath)
        if(currentPath.includes('skillroutes')) {
            document.title = 'SkillRoutes';
            const link = (document.querySelector("link[rel='icon']") as HTMLLinkElement) || document.createElement('link');
            link.rel = 'icon';
            link.href = '/skillroutes.svg';
            document.head.appendChild(link);
        }
        else  if(currentPath.includes('lobo')) {
            document.title = 'Lobo';
            const link = (document.querySelector("link[rel='icon']") as HTMLLinkElement) || document.createElement('link');
            link.rel = 'icon';
            link.href = '/lobo.svg';
            document.head.appendChild(link);
        }
        else{
            document.title = 'Bozhovskiy Roman';
            const link = (document.querySelector("link[rel='icon']") as HTMLLinkElement) || document.createElement('link');
            link.rel = 'icon';
            link.href = '/Logo.jpg';
            document.head.appendChild(link);
        }
    }, [location]);

    return null;
};

function App() {
    const { toasts } = useToasterStore();
    // Enforce Limit
    useEffect(() => {
        toasts
            .filter((t) => t.visible) // Only consider visible toasts
            .filter((_, i) => i >= 3) // Is toast index over limit
            .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
    }, [toasts]);
  return (
      <>
          <BrowserRouter>
              <ChangeTitle/>
              <Toaster/>
              <Routes>
                  <Route path="/lobo" element={<Lobo />} />
                  <Route path="/skillroutes" element={<SkillRoutes />} />
                  <Route path="/skillroutes/roadmaps" element={<Roadmaps />} />
                  <Route path="/skillroutes/roadmap/:id" element={<Roadmap />} />
                  <Route path="/" element={<Main />} />
                  <Route path="*" element={<Main />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
