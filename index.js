window.addEventListener('load', function() {
  alert('読み込み時');
  // LIFF アプリの初期化
  liff.init({ liffId: '2007062380-kJ4LXXnz' })
    .then(() => {
      console.log('LIFF initialized successfully.');
      alert('init成功');
      // 初期化後の処理（UI 表示の切り替えなど）を実装
    })
    .catch((error) => {
      console.error('Error initializing LIFF:', error);
      alert('init失敗');
      // エラーハンドリング
    });

  // ユーザー情報取得
  liff.getProfile()
    .then(profile => {
      console.log('User Profile:', profile);
      alert('User Profile:', profile);
      const userId = profile.userId;
      const displayName = profile.displayName;
      const pictureUrl = profile.pictureUrl;
      const statusMessage = profile.statusMessage;
      
      document.getElementById('user-info').innerText = 
        `UserId: ${userId}\nDisplayName: ${displayName}\nStatus: ${statusMessage}`;
    })
    .catch(error => {
      console.error('Error getting user profile:', error);
    });
});
