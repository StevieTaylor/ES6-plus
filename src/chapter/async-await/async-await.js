const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (ev) => {
      reject(ev);
    };
    img.src = src;
  });
};
const load = async () => {
  let img1 = await loadImage('https://www.tslang.cn/assets/images/examples/angular.png');
  console.log(img1);
  // document.body.appendChild(img1);
  let img2 = await loadImage('https://www.tslang.cn/assets/images/examples/react.png');
  console.log(img2);
  //   document.body.appendChild(img2);
};
load();
