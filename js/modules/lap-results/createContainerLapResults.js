/*  Criação da seção de resultados das voltas  */

/* ESTRUTURA */

/* 
<section class="result-laps-container">
    <div class="lap-container">
        <div class="lap-header">Volta nº</div>
        <div class="lap-content">1</div>
    </div>
    <div class="part-container">
        <div class="part-header">Tempo parcial</div>
        <div class="part-content">00:00:00.000</div>
    </div>
    <div class="total-container">
        <div class="total-header">Tempo total</div>
        <div class="total-content">00:00:00.000</div>
    </div>
</section>
*/

export function createContainerLapResults() {
  const mainContainer = document.querySelector(".main-container");

  const sectionResultLapsContainer = document.createElement("section");
  sectionResultLapsContainer.classList.add("result-laps-container");
  mainContainer.appendChild(sectionResultLapsContainer);

  const divLapContainer = document.createElement("div");
  divLapContainer.classList.add("lap-container");
  sectionResultLapsContainer.appendChild(divLapContainer);

  const divLapHeader = document.createElement("div");
  divLapHeader.classList.add("lap-header");
  divLapHeader.innerHTML = "Volta nº";
  const divLapContent = document.createElement("div");
  divLapContent.classList.add("lap-content");
  divLapContainer.appendChild(divLapHeader);
  divLapContainer.appendChild(divLapContent);

  const divPartContainer = document.createElement("div");
  divPartContainer.classList.add("part-container");
  sectionResultLapsContainer.appendChild(divPartContainer);

  const divPartHeader = document.createElement("div");
  divPartHeader.classList.add("part-header");
  divPartHeader.innerHTML = "Tempo parcial";
  const divPartContent = document.createElement("div");
  divPartContent.classList.add("part-content");
  divPartContainer.appendChild(divPartHeader);
  divPartContainer.appendChild(divPartContent);

  const divTotalContainer = document.createElement("div");
  divTotalContainer.classList.add("total-container");
  sectionResultLapsContainer.appendChild(divTotalContainer);

  const divTotalHeader = document.createElement("div");
  divTotalHeader.classList.add("total-header");
  divTotalHeader.innerHTML = "Tempo total";
  const divTotalContent = document.createElement("div");
  divTotalContent.classList.add("total-content");
  divTotalContainer.appendChild(divTotalHeader);
  divTotalContainer.appendChild(divTotalContent);
}