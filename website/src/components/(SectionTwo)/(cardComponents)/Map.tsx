import { DottedMap } from "@/components/ui/dotted-map";

const markers = [
  {
    // Ottawa, Ontario, Canada
    lat: 45.4215,
    lng: -75.6972,
    size: 0.4,
  },
];

const Map = () => {
  return (
    <div className="flex items-center flex-1 overflow-hidden ">
      <DottedMap markers={markers} />
    </div>
  );
};

export default Map;
