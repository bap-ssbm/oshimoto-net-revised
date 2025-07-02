const fontSizeSetting = {};
for (let i = 1; i <= 100; i++) {
  fontSizeSetting[i] = `${i / 10}rem`;
}
fontSizeSetting.base = [
  "1.6rem",
  {
    letterSpacing: "0",
    lineHeight: "1",
  },
];

const lineHeightSetting = {};
for (let i = 1; i <= 30; i++) {
  lineHeightSetting[i] = (0.1 * i).toFixed(1);
}

function leadingTrim(theme) {
  const fontSizes = { ...fontSizeSetting, ...theme("fontSize") };
  const lineHeights = { ...lineHeightSetting, ...theme("lineHeight") };

  // フォントごとの調整値
  const fontAdjustments = {
    "sans-jp": { topAdjust: 0.03, bottomAdjust: 0.03 },
    "serif-jp": { topAdjust: -0.17, bottomAdjust: 0.03 },
    en: { topAdjust: 0.02, bottomAdjust: 0.02 },
    "en-serif": { topAdjust: 0.02, bottomAdjust: 0.02 },
    default: { topAdjust: 0, bottomAdjust: 0 },
  };

  // 計算結果のキャッシュ
  const trimCache = new Map();

  // トリム値の計算（メモ化）
  const calculateTrim = (fontSize, lineHeight, adjust) => {
    const cacheKey = `${fontSize}-${lineHeight}-${adjust}`;
    if (trimCache.has(cacheKey)) {
      return trimCache.get(cacheKey);
    }
    const fontSizeNum = parseFloat(fontSize);
    const lineHeightNum = parseFloat(lineHeight);
    const trim =
      (((lineHeightNum - 1) * fontSizeNum) / 2 / fontSizeNum + adjust).toFixed(
        4
      ) + "em";
    trimCache.set(cacheKey, trim);
    return trim;
  };

  const trimStyles = Object.entries(fontSizes).flatMap(([fsKey, fsValue]) => {
    const fontSize = typeof fsValue === "string" ? fsValue : fsValue[0];

    return Object.entries(lineHeights).map(([lhKey, lhValue]) => {
      const baseTrims = Object.entries(fontAdjustments).reduce(
        (acc, [fontFamily, { topAdjust, bottomAdjust }]) => {
          acc[`--leading-trim-top-${fontFamily}`] = calculateTrim(
            fontSize,
            lhValue,
            topAdjust
          );
          acc[`--leading-trim-bottom-${fontFamily}`] = calculateTrim(
            fontSize,
            lhValue,
            bottomAdjust
          );
          return acc;
        },
        {}
      );

      return {
        [`.text-${fsKey}.leading-${lhKey}`]: baseTrims,
        [`.text-${fsKey}.leading-${lhKey} .leading-trim, .text-${fsKey}.leading-${lhKey}.leading-trim`]: {
          "&::before, &::after": {
            content: "''",
            display: "block",
            height: "0",
          },
          "&::before": {
            marginBottom:
              "calc((var(--leading-trim-top, 0em) + var(--leading-trim-bottom, 0em)) * -1)",
          },
          "&::after": {
            marginTop: "calc(var(--leading-trim-bottom, 0em) * -1)",
          },
        },
      };
    });
  });

  const fontFamilyStyles = Object.keys(fontAdjustments).map((fontFamily) => ({
    [`.font-${fontFamily}`]: {
      "--leading-trim-top": `var(--leading-trim-top-${fontFamily}, 0em)`,
      "--leading-trim-bottom": `var(--leading-trim-bottom-${fontFamily}, 0em)`,
    },
  }));

  return [...trimStyles, ...fontFamilyStyles];
}

module.exports = leadingTrim;
