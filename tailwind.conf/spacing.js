const spaceSetting = {
  half: '50%',
  full: '100%',
  fit: 'fit-content',
  min: 'min-content',
  max: 'max-content',
  auto: 'auto',
  inherit: 'inherit',
  '100vw': '100vw',
  '100vh': '100vh',
  0: 0,
};
for (let i = 1; i < 1000; i++) {
  spaceSetting[i] = `${i / 10}rem`;
}
for (let i = 1000; i <= 1440; i += 10) {
  spaceSetting[i] = `${i / 10}rem`;
}

module.exports = spaceSetting;
