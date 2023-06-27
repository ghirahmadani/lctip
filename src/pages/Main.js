import React from "react";

import Hero from "../components/Hero"
import Content from "../components/Content"
/* import Announcement from "../components/Announcement"; */

const Main = () => {
    return (
      <>
        {/* <Announcement /> */}
        <div className="items-center">
          <Hero />
          <Content />
        </div>
      </>
    );
}

export default Main;