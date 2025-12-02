/*UI components and Icons*/
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FaBrain, FaPlaneDeparture } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

/*Components*/
import { WorldGlobe } from "./(cardComponents)/Globe";
import { IconCloudTechnologies } from "./(cardComponents)/Icons";
import { FileTree } from "./(cardComponents)/FileTree";

const features = [
  {
    Icon: FaBrain,
    name: "Eager to Learn",
    description:
      "Always open-minded and eager to learn about emerging technologies. Above are some of the tools I've used in the past/currently.",
    href: "/",
    cta: "Learn more",
    background: <IconCloudTechnologies />,
    className: "flex-1",
  },
  {
    Icon: IoMdCheckmarkCircle,
    name: "Well-Rounded",
    description:
      "Not just interested in web development, but the entire SDLC - from design to deployment",
    href: "/",
    cta: "Learn more",
    background: <FileTree />,
    className: "flex-1",
  },
  {
    Icon: FaPlaneDeparture,
    name: "Avid Traveller",
    description:
      "Been to several countries, made memories with so many more. Above is a map of the various nationalities of people I've met while abroad.",
    href: "/",
    cta: "Learn more",
    background: <WorldGlobe />,
    className: "flex-1",
  },
];

const BentoBoxCards = () => {
  return (
    <BentoGrid className="flex flex-wrap p-8">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoBoxCards;
