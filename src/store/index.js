import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#d5d5d5',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;