// Logo data is loaded from separate text files at build time
// For now, we'll use a dynamic import approach
// The original HTML had 3 identical logo images (nav, hero, footer)
// We export a single logo source

// We'll read the base64 from the extracted file
import logo1Text from './logo_1.txt?raw';

export const LOGO_SRC = logo1Text;
