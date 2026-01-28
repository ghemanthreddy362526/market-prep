import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";

import Today from "./pages/Today";
import Journal from "./pages/Journal";
import Archive from "./pages/Archive";

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        classNames="page"
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Today />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
