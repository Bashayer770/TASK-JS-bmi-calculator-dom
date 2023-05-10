function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces. 👇🏻
  let BMI = weight / (height * height * 0.0001);

  if (BMI < 18.5) {
    alert(`underweight ${BMI} ${height} ${weight}`);
  } else if (BMI > 18.5 && BMI < 24.9) {
    alert("Healthy weight");
  } else if (BMI > 25.0 && BMI < 29.9) {
    alert("overweight");
  } else if (BMI > 30 && BMI > 30.0) {
    alert(`Obesity ${BMI} ${height} ${weight}`);
  }

  if (age >= 19 && age >= 24) {
    if (BMI > 19 && BMI < 24) {
      console.log("normal weihth");
    } else if (BMI < 19) {
      console.log("underweight");
    } else if (BMI > 24) {
      console.log("Overwieght");
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI > 18.5 && BMI < 24.9) {
      console.log("normal weihth");
    } else if (BMI < 18.5) {
      console.log("underweight");
    } else if (BMI > 24.9) {
      console.log("Overwieght");
    }
  } else if (age >= 35 && age <= 44) {
    let BMI_START = 21;
    let BMI_END = 26;
    if (BMI >= BMI_START && BMI <= BMI_END) {
      alert("normal weihth");
    } else if (BMI < BMI_START) {
      console.log("underweight");
    } else if (BMI > BMI_END) {
      console.log("Overwieght");
    }
  }
}
