let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // 調整畫布大小
  canvas.parent('p5-canvas'); // 將畫布附加到 #p5-canvas 容器中
  background("#a9d6e5");

  // 初始化海草屬性
  let spacing = windowWidth / 50; // 計算每個海草之間的間距
  for (let i = 0; i < 50; i++) {
    let seaweed = {
      x: i * spacing + spacing / 2, // 均勻分佈海草的位置
      height: random(50, 200),
      width: random(30, 60),
      color: color(random(100, 255), random(50, 200), random(0, 150), 150), // 設定不同色系的半透明顏色
      sway: random(5, 15) // 隨機設定搖晃幅度
    };
    seaweeds.push(seaweed);
  }
}

function draw() {
  background("#a9d6e5"); // 每次重繪背景，避免殘影
  noFill();
  blendMode(BLEND); // 設定混合模式為 BLEND

  strokeWeight(30); // 統一設定線條粗細為 30

  for (let seaweed of seaweeds) {
    stroke(seaweed.color);
    beginShape();
    for (let i = 0; i <= seaweed.height; i += 20) {
      let offset = sin(frameCount * 0.05 + i * 0.03) * seaweed.sway; // 使用隨機設定的搖晃幅度
      vertex(seaweed.x + offset, windowHeight - i);
    }
    endShape();
  }
}
