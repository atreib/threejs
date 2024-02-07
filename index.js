import WebGL from "three/addons/capabilities/WebGL.js";
import { animate } from "./main";

if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementsByTagName("body").appendChild(warning);
}
