import appleBanner from "../../images/apple-banner.jpg";

import StandardLink from "../links/StandardLink";

function MainBanner() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <p className="text-[50px] font-semibold">iPhone 14</p>
      <p className="font-thin text-lg">With awesome quality and performance</p>
      <div className="flex flex-row gap-3 py-3">
        <StandardLink path="/iphone/iphone-14" name="Learn more >" />
        <StandardLink path="/iphone/buy/iphone-14" name="Buy >" />
      </div>
      <img src={appleBanner} alt="Main banner" className="w-[800px]" />
    </div>
  );
}

export default MainBanner;
