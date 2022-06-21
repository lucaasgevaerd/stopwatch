/* ESTRUTURA */

/* 
<section class="result-laps-container">
    <div class="lap-container">
        <div class="lap-header">Volta nº</div>
        <div class="lap-content">
          <p>3</p>
          <p>2</p>  
          <p>1</p>
        </div>
    </div>
    <div class="part-container">
        <div class="part-header">Tempo parcial</div>
        <div class="part-content">
          <p>00:00:06.900</p>
          <p>00:00:04.600</p>
          <p>00:00:02.300</p>
        </div>
    </div>
    <div class="total-container">
        <div class="total-header">Tempo total</div>
        <div class="total-content">
          <p>00:00:13.800</p>
          <p>00:00:06.900</p>
          <p>00:00:02.300</p>
        </div>
    </div>
</section>
*/

export function insertResultByLap(lapContent, partContent, totalContent) {
  const lap = document.querySelector(".lap-content");
  const paragraphLap = document.createElement("p");
  paragraphLap.innerHTML = lapContent;
  lap.prepend(paragraphLap);

  const part = document.querySelector(".part-content");
  const paragraphPart = document.createElement("p");
  paragraphPart.innerHTML = partContent;
  part.prepend(paragraphPart);

  const total = document.querySelector(".total-content");
  const paragraphTotal = document.createElement("p");
  paragraphTotal.innerHTML = totalContent;
  total.prepend(paragraphTotal);
}