type TypoGraphyLevel = 1 | 2 | 3 | 4 | 5;
export type HeaderLevel = `H${Extract<TypoGraphyLevel, 1 | 2 | 3>}`;
export type BodyLevel = `B${TypoGraphyLevel}`;

type TypoGraphyScale = 11 | 12 | 13 | 14 | 16 | 18 | 20 | 28;
type HeaderFontSize = Extract<TypoGraphyScale, 18 | 20 | 28>;
type BodyFontSize = Exclude<TypoGraphyScale, HeaderFontSize>;

type TypoGraphLineHeight = 144 | 150 | 156 | 164 | 168;
type HeaderLineHeight = Extract<TypoGraphLineHeight, 144 | 150 | 156>;
type BodyLineHeight = Exclude<TypoGraphLineHeight, HeaderLineHeight>;

type LetterSpacing = -3;

type TypoGraphyHeading = {
  fontSize: `${HeaderFontSize}px`;
  letterSpacing: LetterSpacing;
  lineHeight: `${HeaderLineHeight}%`;
};
export const TYPOGRAPHY_HEADER: Record<HeaderLevel, TypoGraphyHeading> = {
  H1: {
    fontSize: "28px",
    letterSpacing: -3,
    lineHeight: "144%",
  },
  H2: {
    fontSize: "20px",
    letterSpacing: -3,
    lineHeight: "150%",
  },
  H3: {
    fontSize: "18px",
    letterSpacing: -3,
    lineHeight: "156%",
  },
};

type TypoGraphyBody = {
  fontSize: `${BodyFontSize}px`;
  letterSpacing: LetterSpacing;
  lineHeight: `${BodyLineHeight}%`;
};
export const TYPOGRAPHY_BODY: Record<BodyLevel, TypoGraphyBody> = {
  B1: {
    fontSize: "16px",
    letterSpacing: -3,
    lineHeight: "164%",
  },
  B2: {
    fontSize: "14px",
    letterSpacing: -3,
    lineHeight: "168%",
  },
  B3: {
    fontSize: "13px",
    letterSpacing: -3,
    lineHeight: "168%",
  },
  B4: {
    fontSize: "12px",
    letterSpacing: -3,
    lineHeight: "168%",
  },
  B5: {
    fontSize: "11px",
    letterSpacing: -3,
    lineHeight: "168%",
  },
};
