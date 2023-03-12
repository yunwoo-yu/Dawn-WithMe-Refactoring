const getCommentCreateTime = (date: string): string => {
  const createDay = new Date(date).getTime();
  const today = new Date().getTime();
  const diff = (today - createDay) / 1000;
  const times = [
    { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
    { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
    { name: '일', milliSeconds: 60 * 60 * 24 },
    { name: '시간', milliSeconds: 60 * 60 },
    { name: '분', milliSeconds: 60 },
  ];

  for (let i = 0; i < times.length; i++) {
    const betweenTime = Math.floor(diff / times[i].milliSeconds);
    if (betweenTime > 0) return `${betweenTime}${times[i].name} 전`;
  }

  return '방금 전';
};

export default getCommentCreateTime;
