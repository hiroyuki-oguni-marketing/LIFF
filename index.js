window.addEventListener('load', async () => {
  const liffId = '2007062380-kJ4LXXnz';

  try {
    // LIFF の初期化を待つ
    await liff.init({ liffId });
    alert("LIFF initialized successfully.");
  } catch (err) {
    console.error("Error initializing LIFF:", err);
    alert("Error initializing LIFF.");
    // 初期化失敗ならここで処理を中断
    return;
  }

  // 初期化完了後、ログイン状態を確認
  const loggedIn = liff.isLoggedIn(); // これは同期関数です
  alert("ログイン状態: " + loggedIn);
  if(!loggedIn) {
    liff.closeWindow();
  }

  try {
    // ユーザー情報取得
    const profile = await liff.getProfile();
    console.log("User Profile:", profile);
    setProfileData(profile);
  } catch (err) {
    console.error("Error getting user profile:", err);
    alert("Error getting user profile.");
  }
});

// 取得したプロファイル情報を画面に表示する関数
function setProfileData(profile) {
  const userInfoEl = document.getElementById('user-info');
  if (userInfoEl) {
    userInfoEl.innerText =
      `showAllData: ${profile}`;
  }
}
