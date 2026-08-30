// ===== Seed Packs Registry =====
// 모든 데이터 팩은 이 배열에 push() 한다.
// index.html 에서 이 파일을 가장 먼저 로드한 뒤, 각 팩 .js 파일을 순서대로 로드한다.
//
// 사용 예 (팩 파일 안에서):
//   window.SEED_PACKS.push({
//     id: 'daily',
//     name: '일상 회화',
//     cards: [ ... ]
//   });
window.SEED_PACKS = window.SEED_PACKS || [];
