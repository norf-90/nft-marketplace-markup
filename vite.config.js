import { defineConfig } from "vite";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from "imagemin-webp";

export default defineConfig({
  plugins: [
    ViteSvgSpriteWrapper({
      icons: "./src/assets/images/svg/*.svg",
      outputDir: "./public/images/svg",
    }),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
  ],
});
