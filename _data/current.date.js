module.exports = () => {

  const now = new Date();
  const timeZone = 'UTC';
  const buildTime = new Intl.DateTimeFormat('tr-TR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone,
  }).format(now);

  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime} ${timeZone}`,
    },
  };
};