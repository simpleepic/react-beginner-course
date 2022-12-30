import StandardLayout from "../components/layout/StandardLayout";

import MainBanner from "../components/banners/MainBanner";
import StandardContainerGroup from "../components/containers/StandardContainerGroup";
import StandardCarousel from "../components/carousel/StandardCarousel";
import LinkGroup from "../components/links/LinkGroup";

// Images
import img1 from "../images/iphone-se.jpg";
import img2 from "../images/ipad.jpg";
import img3 from "../images/airpods.jpeg";
import img4 from "../images/iwatch.jpg";

// Movie Images
import mov1 from "../images/movies/spirited.png";
import mov2 from "../images/movies/slow-horses.jpg";
import mov3 from "../images/movies/emancipation.jpg";

const DATA = [
  {
    title: "iPhone SE",
    description: "Amazing experience",
    image: img1,
    style: "bg-gray-100",
  },
  {
    title: "iPad",
    description: "Lovable, Drawable, Magical",
    image: img2,
  },
  {
    title: "AirPods",
    description: "Rebuilt from the sound up",
    image: img3,
  },
  {
    title: "iWatch",
    description: "A healthy leap ahead",
    image: img4,
    style: "bg-gray-100",
  },
];

const CAROUSEL_DATA = [
  {
    image: mov1,
    imageAlt: "spirited",
  },
  {
    image: mov2,
    imageAlt: "slow-horses",
  },
  {
    image: mov3,
    imageAlt: "emancipation",
  },
];

function Home() {
  return (
    <StandardLayout>
      {/* 1) Main banner */}
      <MainBanner />

      {/* 2) Box Components */}
      <StandardContainerGroup data={DATA} />

      {/* 3) Carousel */}
      <StandardCarousel data={CAROUSEL_DATA} />

      {/* 4) Page Content */}
      <div className="px-[200px] bg-gray-200">
        {/* 4.1) Main content */}
        <p className=" py-5 text-sm text-gray-700">
          Est duis consequat sit elit et nulla voluptate. Sunt tempor aliquip
          dolor deserunt elit veniam laborum non et officia fugiat. Ut anim
          commodo mollit et consequat voluptate excepteur velit ad. Nostrud enim
          cillum quis aute adipisicing sint voluptate sint cupidatat mollit qui
          est. Occaecat ad in sint Lorem irure esse ex do occaecat eiusmod
          cupidatat fugiat. Ad elit fugiat incididunt esse esse minim Lorem
          proident. Nulla ea Lorem ut mollit nostrud laborum ipsum do est dolor.
          Eu nisi ea ullamco est cillum. Aliqua enim nostrud consectetur
          exercitation veniam sit minim adipisicing consectetur ullamco do.
          Pariatur in consectetur eu consequat non. Quis Lorem minim consectetur
          in aliquip eu quis nostrud irure tempor. Aliqua mollit incididunt
          deserunt aliquip velit consectetur elit deserunt esse. Cupidatat
          fugiat dolore deserunt est ullamco aliqua deserunt non id. Ex enim non
          ut sit incididunt irure sint et. Enim nostrud commodo labore ex mollit
          nisi irure. Proident aute est duis ullamco fugiat officia magna culpa
          voluptate sint aliquip quis. Labore sunt mollit sunt commodo. Qui id
          eiusmod nostrud officia nisi dolore commodo. Mollit excepteur duis
          deserunt mollit commodo proident in in officia veniam sit. Laboris
          magna sit sunt exercitation culpa enim laboris enim quis. Ad ut eu
          cillum consequat ullamco irure elit cupidatat aute adipisicing. Et
          incididunt ipsum ad id ullamco. Mollit minim occaecat in pariatur
          cillum et reprehenderit dolore magna nulla. Sit cillum ipsum ex duis
          elit mollit labore consequat. In quis velit aute aliqua non occaecat
          quis commodo fugiat enim deserunt mollit eiusmod. Laborum eiusmod
          fugiat do Lorem non aute officia aliquip elit ad anim fugiat ad. Est
          est eiusmod adipisicing dolore anim. Qui laborum eu amet dolor officia
          dolore anim nulla excepteur veniam. Sunt exercitation magna
          consectetur proident qui consectetur do labore nisi. Mollit ut laborum
          in irure aliquip. Velit occaecat consectetur reprehenderit elit
          dolore. Aliquip amet aliqua ullamco sunt pariatur elit.
        </p>

        {/* 4.2) Sub links */}
        <LinkGroup />
      </div>

    </StandardLayout>
  );
}

export default Home;
