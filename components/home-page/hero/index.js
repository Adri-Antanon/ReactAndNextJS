import Image from "next/image";
import classes from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/img-adri.JPG"
          alt="An image showing Adri"
          width={350}
          height={350}
        />
      </div>
      <h1>Hi, I'm Adri</h1>
      <p>
        I blog about web development - especially frontend libraries like React
        or frameworks like NextJS.
      </p>
    </section>
  );
};
