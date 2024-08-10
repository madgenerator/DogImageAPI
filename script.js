const getDogButton = document.getElementById('get-dog-button');
const dogImageContainer = document.getElementById('dog-image-container');

getDogButton.addEventListener('click', async () => {
  const url = 'https://random.dog/woof.json';

  try {
    const response = await fetch(url);
    const data = await response.json();

    // 가져온 강아지 이미지를 화면에 표시
    if (data.url.includes('.mp4')) {
      // 만약 동영상일 경우 다시 요청
      getDogButton.click();
      return;
    }

    const imageElement = document.createElement('img');
    imageElement.src = data.url;
    imageElement.style.width = '500px'; // 이미지 크기를 500px로 설정

    // 이미지를 화면에 추가
    dogImageContainer.innerHTML = '';
    dogImageContainer.appendChild(imageElement);
  } catch (error) {
    console.error('강아지 이미지 가져오기 중 문제 발생:', error);
  }
});