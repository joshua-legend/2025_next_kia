type HexColor = `#${string}`;
type PrimaryColor = "Black" | "White";
const primaryColor: Record<PrimaryColor, HexColor> = {
  Black: "#05141F",
  White: "#ffffff",
};

type SecondaryTone = "Green" | "Red";
type SecondaryIntensity = "Default" | "Dark" | "Ligth" | "Variant";
type SecondaryOptional = "bg" | "keybox" | "tag";
type SecondaryColor = `${SecondaryTone}${SecondaryIntensity}${SecondaryOptional}`;

const secondaryColor: Partial<Record<SecondaryColor, HexColor>> = {};
