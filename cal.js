function reqem(x) {
 
    inp.value += x.textContent
  }
  var say=0
  function operator(x) {
    if(!inp.value.includes("+") && !inp.value.includes("-")&& !inp.value.includes("*") && !inp.value.includes("/") || inp.value.includes(".") ){
      inp.value += x.textContent
    }
  }



  function beraber() {
    document.querySelectorAll(".b1").forEach(k=>{
      k.classList.remove("po")
     })
    if (inp.value.includes("+")) {
      inp.value = Number(inp.value.split("+")[0]) + Number(inp.value.split("+")[1])
      if (inp.value.includes(".")) {
        inp.value = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
      }
    }
    else if (inp.value.includes("-")) {
      inp.value = Number(inp.value.split("-")[0]) - Number(inp.value.split("-")[1])
      if (inp.value.includes(".")) {
        inp.value.split("-")[0] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
        inp.value.split("-")[1] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
      }
  
    }
    else if (inp.value.includes("*")) {
      inp.value = Number(inp.value.split("*")[0]) * Number(inp.value.split("*")[1])
      if (inp.value.includes(".")) {
        inp.value.split("*")[0] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
        inp.value.split("*")[1] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
      }
    }
    else if (inp.value.includes("/")) {
      inp.value = Number(inp.value.split("/")[0]) / Number(inp.value.split("/")[1])
      if (inp.value.includes(".")) {
        inp.value.split("/")[0] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
        inp.value.split("/")[1] = Number(inp.value.split(".")[0]) + (Number(inp.value.split(".")[1]) / 10)
      }
    }
  }
  function cleary() {
    inp.value = ""
  }
 