import liff from '@line/liff';

// LIFF アプリの初期化
liff.init({ liffId: '2007062380-kJ4LXXnz' })
  .then(() => {
    console.log('LIFF initialized successfully.');
    // 初期化後の処理（UI 表示の切り替えなど）を実装
  })
  .catch((error) => {
    console.error('Error initializing LIFF:', error);
    // エラーハンドリング: ユーザーへエラー表示や再試行の誘導を実装
  });

liff.getProfile()
.then(profile => {
  console.log('User Profile:', profile);
  // 必要な情報:
  const userId = profile.userId;
  const displayName = profile.displayName;
  const pictureUrl = profile.pictureUrl;
  const statusMessage = profile.statusMessage;
  
  // 例: 取得した情報を DOM に表示する
  document.getElementById('user-info').innerText = 
    `UserId: ${userId}\nDisplayName: ${displayName}\nStatus: ${statusMessage}`;
})
.catch(error => {
  console.error('Error getting user profile:', error);
  // エラーハンドリング: ユーザーには「情報の取得に失敗しました」等のメッセージを表示
});
