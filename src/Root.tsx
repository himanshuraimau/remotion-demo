import "./index.css";
import { Composition } from "remotion";
import { ProductLaunch } from "./TaskFlow/ProductLaunch";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TaskFlow"
        component={ProductLaunch}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
