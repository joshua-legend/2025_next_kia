type HexColor = `#${string}`;
export type PrimaryColor = "Black" | "White";

type SecondaryTone = "Green" | "Red";
type SecondaryIntensity = "Default" | "Dark" | "Ligth" | "Variant";
type SecondaryOptional = "Bg" | "Keybox" | "Tag" | "Normal";
export type SecondaryColor = `${SecondaryTone}${SecondaryIntensity}${SecondaryOptional}`;

type CoolGreyTone = "CoolGrey";
type CoolGreyIntensity = "5" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
export type CoolGreyColor = `${CoolGreyTone}${CoolGreyIntensity}`;

export type FullColor = PrimaryColor | SecondaryColor | CoolGreyColor;

export const COLOR: Partial<Record<FullColor, HexColor>> = {
  Black: "#05141F",
  White: "#ffffff",
  GreenDefaultNormal: "#5D7D2B",
  GreenDarkNormal: "#4C5B35",
  GreenVariantNormal: "#589000",
  GreenLigthKeybox: "#DAEDBD",
  GreenLigthBg: "#F5FDEB",
  RedDefaultNormal: "#EA0029",
  RedDarkNormal: "#7D4C55",
  RedLigthBg: "#FFF5F6",
  RedLigthTag: "#FEE9EC",
  CoolGrey5: "#F2F4F6",
  CoolGrey10: "#E6E7E9",
  CoolGrey20: "#697279",
  CoolGrey30: "#BFB9BC",
  CoolGrey40: "#9BA1A5",
  CoolGrey50: "#82898F",
  CoolGrey60: "#697279",
  CoolGrey70: "#505B62",
  CoolGrey80: "#37434C",
  CoolGrey90: "#1E2C35",
};
