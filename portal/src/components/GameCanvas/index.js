
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "runoftruth/Build/runoftruth.loader.js",
  dataUrl: "runoftruth/Build/runoftruth.data",
  frameworkUrl: "runoftruth/Build/runoftruth.framework.js",
  codeUrl: "runoftruth/Build/runoftruth.wasm",
});