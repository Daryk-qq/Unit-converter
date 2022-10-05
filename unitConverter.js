const data = {"distance": {"unit": "cm", "value": 300}, "convert_to": "m"};

const config = {
  "m": 1,
  "mm": 0.001,
  "yd": 0.9144,
  "cm": 0.01,
  "in": 0.0254,
  "ft": 0.3048,
  "km": 1000,
}

function calculate (data) {
  let value = data.distance.value
  
  let convertFrom = config[data.distance.unit]
  let convertTo = config[data.convert_to]
  
  result = (convertFrom / convertTo) * value
  return {"unit": data.convert_to, "value": result.toFixed(2)}
}

console.log(
  calculate(data)
)






  
  