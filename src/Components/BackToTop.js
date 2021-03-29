import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scroll = () => window.scrollTo({ top: 0, behaviour: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <div className="scroll-to-top" onClick={scroll}>
      
      <i className="icon fas fa-chevron-up"></i>
      {/* <i className="icon fas fa-chevron-up"></i> */}
    </div>
  );
};

export default BackToTop;
