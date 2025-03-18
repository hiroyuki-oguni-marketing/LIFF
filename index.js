window.addEventListener('load', async function() {
  const liffId = '2007062380-kJ4LXXnz'
  const initRes = await liffInit(liffId)
  console.log(initRes);
});
liff.ready.then(() => {
  const profileData = liffGetProfile()
  console.log(profileData);
  setProfileData(profileData)
});

const liffInit = async (liffId)=>{
  // LIFF アプリの初期化
  liff.init({liffId})
    .then((response) => {
      // 初期化後の処理（UI 表示の切り替えなど）を実装
      return response
    })
    .catch((error) => {
      // エラーハンドリング
      return error
    });
    alert('init処理が流れてる');
}
const liffGetProfile = ()=>{
  // ユーザー情報取得
  liff.getProfile()
    .then(profile => {
      return profile
    })
    .catch(error => {
      return error
    });
}

const setProfileData = (profileData) => {
  console.log(profileData);
  alert(profileData)
}
// const liffGetProfile = ()=>{
//   // ユーザー情報取得
//   liff.getProfile()
//     .then(profile => {
//       console.log('User Profile:', profile);
//       alert('User Profile:', profile);
//       const userId = profile.userId;
//       const displayName = profile.displayName;
//       const pictureUrl = profile.pictureUrl;
//       const statusMessage = profile.statusMessage;
      
//       document.getElementById('user-info').innerText = 
//         `UserId: ${userId}\nDisplayName: ${displayName}\nStatus: ${statusMessage}`;
//     })
//     .catch(error => {
//       console.error('Error getting user profile:', error);
//     });
// }