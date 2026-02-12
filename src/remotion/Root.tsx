import { Composition } from "remotion";
import { BlogToShortsVideo } from "./BlogToShortsVideo";
import type { VideoScript } from "@/lib/types";

const defaultScript: VideoScript = {
  title: "Sample Video",
  hook: "This one habit changes everything.",
  hookKeywords: ["sunrise", "morning"],
  scenes: [
    { id: 1, text: "Most people wake up without a plan.", keywords: ["alarm clock", "bed"] },
    { id: 2, text: "They scroll, react, and lose hours.", keywords: ["phone scrolling", "social media"] },
    { id: 3, text: "Top performers do the opposite.", keywords: ["success", "business"] },
    { id: 4, text: "They start with one clear priority.", keywords: ["notebook", "writing"] },
    { id: 5, text: "That single focus drives massive results.", keywords: ["focus", "target"] },
    { id: 6, text: "It compounds day after day.", keywords: ["growth", "chart"] },
  ],
  cta: "Start your morning ritual today.",
  ctaKeywords: ["motivation", "action"],
};

export const RemotionRoot: React.FC = () => {
  const FPS = 30;
  const totalDuration =
    5 * FPS + defaultScript.scenes.length * 4 * FPS + 5 * FPS;

  return (
    <>
      <Composition
        id="BlogToShorts"
        component={BlogToShortsVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{
          script: defaultScript,
        }}
      />
    </>
  );
};
