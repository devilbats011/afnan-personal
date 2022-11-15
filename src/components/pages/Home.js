import React from "react";
import Adventure from "./../group-components/Adventure";
import "./../../css/Main.scss";
import Avatar from "./../../resources/avatar.svg";
import "./../../css/Utility.scss";
import Seagull from "./../small-components/Seagull";
import { WhiteSpace } from "components/pages";

function Home() {
  return (
    <>
      <main className="home -check">
        <section className="col-6-md col-12-sm relative ">
          <article className="main__home_avatar ">
            <img src={Avatar} alt={"wazzasupppp"} className="home__avatar" />
          </article>
        </section>

        <section className="col-6-md col-12-sm relative">
          <article className="main__home_intro_text b-check-x">
            <Seagull className="seagull--home" />
            <h1 className=" h4--name lh-2rem ">Oh Hi, I’am Afnan :) work as</h1>
            <h1 className=" h1--frontend">
               {/* A Software Engineer / */}
               A Software Developer /
            </h1>
            <h1 className=" h2--web">
              <WhiteSpace spacing={"3rem"} hide={["xs", "sm"]} />
               A Web Developer /
            </h1>
            <h1 className=" h3--ui">
              <WhiteSpace spacing={"7rem"} hide={["xs", "sm"]} />
              {/* A little bit Ui Designer */}
              A Mobile Developer
            </h1>
          </article>
        </section>
      </main>
      
        <Adventure />
        <br></br><br></br>
    </>
  );
}

export default Home;

