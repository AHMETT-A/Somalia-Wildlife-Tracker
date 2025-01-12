/*====================== taggle icon navbar =========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====================== scroll sections active link =========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.foreEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



    const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle the mobile menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Toggle the dropdowns on click (mobile support)
dropdowns.forEach((dropdown) => {
  const dropbtn = dropdown.querySelector(".dropbtn");
  dropbtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const submenu = dropdown.querySelector(".submenu");
    submenu.classList.toggle("active");
  });
});

    /*====================== stricky navbar =========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================== remove taggle icon and navbar when click navbar link (scroll) ======================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*====================== scroll reveal =========================*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 
    'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-contect', { origin: 'right'});


/*====================== typed js =========================*/
const typed = new Typed('.multiple-text', {
    strings: ['Marodi', 'Geel', 'Lo','Ari'],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 1000,
    loop: true 
});

/*====================== TOGGLE LIGTH =========================*/

// const toggleThemeButton = document.getElementById('theme-icon');
// const body = document.body;

// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   body.classList.add(savedTheme);
//   toggleThemeButton.className = savedTheme === 'dark-mode' ? 'bx bx-sun toggle-theme' : 'bx bx-moon toggle-theme';
// }

// toggleThemeButton.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');

//   if (body.classList.contains('dark-mode')) {
//     toggleThemeButton.className = 'bx bx-sun toggle-theme';
//     localStorage.setItem('theme', 'dark-mode');
//   } else {
//     toggleThemeButton.className = 'bx bx-moon toggle-theme';
//     localStorage.setItem('theme', '');
//   }
// });

/*====================== Form js =========================*/

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve input values
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const maritalStatus = document.getElementById('status').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Regular expression patterns
  const phonePattern = /^[\+]?[0-9]{1,4}[-\s]?[0-9]+([-.\s]?[0-9]+)*$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Validation checks
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
  }

  if (!message) {
      alert("Message cannot be empty.");
      return;
  }

  if (!gender) {
      alert("Please select your gender.");
      return;
  }

  if (!maritalStatus) {
      alert("Please select your marital status.");
      return;
  }

  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
  }

  alert("Your message has been sent successfully! Form submitted.");
  document.getElementById('userForm').reset();
});

/////////////////////////////////// Video /////////////////////////////////////////////////////////
function downloadVideo() {
    const videoUrl = "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_large.mp4";
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = "sample-video.mp4"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

///////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Bogga xoolaha Soomaalida ayaa diyaar ah!");
//   });
// document.addEventListener("DOMContentLoaded", () => {
//     const animals = document.querySelectorAll('.animal');
//     let delay = 0;

//     animals.forEach((animal) => {
//         setTimeout(() => {
//             animal.classList.add('show'); // Add class to animate
//         }, delay);
//         delay += 300; // Delay for next animal
//     });
// });

// // Toggle more info function
// function toggleInfo(id) {
//     const info = document.getElementById(id);
//     if (info) {
//         if (info.style.display === "none" || info.style.display === "") {
//             info.style.display = "block";
//         } else {
//             info.style.display = "none";
//         }
//     } else {
//         console.error(`Element with id '${id}' not found.`);
//     }
// }


// Toggle visibility for more information
function toggleInfo(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// ScrollReveal initialization
document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.animal', {
        interval: 200,
        distance: '20px',
        origin: 'bottom',
        duration: 500,
        reset: false,
    });
});



document.querySelector('.footer-iconTop a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/////////////////////////////////////////////// Video ////////////////////////////////////////////////////////////
 /* Get the video element */
 var elem = document.getElementById("myvideo");
 
 function openFullscreen() {
   if (elem.requestFullscreen) {
     elem.requestFullscreen();
   } else if (elem.webkitRequestFullscreen) { 
     elem.webkitRequestFullscreen();
   } else if (elem.msRequestFullscreen) { 
     elem.msRequestFullscreen();
   }
 }

 /////////////////////////////////////////////// Map ////////////////////////////////////////////////////////////
 
 document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map-container').setView([5.152149, 46.199616], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Wildlife locations in Somalia
    const wildlifeLocations = [
        {
            name: "Somali Wild Ass (Historical)",
            coords: [6.5, 47.5],
            description: "The Somali wild ass was historically found in this region, known for its resilience in arid environments."
        },
        {
            name: "Cheetah (Current)",
            coords: [4.0, 45.0],
            description: "Cheetahs are still found in this area, though they are endangered due to habitat loss and hunting."
        },
        {
            name: "African Elephant (Historical)",
            coords: [2.5, 42.5],
            description: "African elephants were historically found here, but their population has declined due to poaching."
        },
        {
            name: "Lion (Current)",
            coords: [3.0, 44.0],
            description: "Lions are found in small numbers in Somalia, mainly in savanna and forest regions."
        },
        {
            name: "Giraffe (Current)",
            coords: [5.0, 47.0],
            description: "Giraffes can be spotted in Somalia's savanna regions, though their populations are fragmented."
        }
    ];

    // Add markers to map
    wildlifeLocations.forEach(location => {
        L.marker(location.coords).addTo(map)
            .bindPopup(`<strong>${location.name}</strong><br>${location.description}`);
    });
});




 /////////////////////////////////////////////// Xogta Xayawanada ////////////////////////////////////////////////////////////

// Xogta xayawaannada Soomaaliya
const xayawaanada = [
    {
      name: 'Goray',
      dhalasho: 'Maalin kasta sanadka badhtankiisa',
      nolosha: 60
    },
    {
      name: 'Maroodi',
      dhalasho: 'Bishii labaad ee sanadka',
      nolosha: 70
    },
    {
      name: 'Goodir',
      dhalasho: 'Gu\'ga',
      nolosha: 15
    },
    {
      name: 'Shabeel',
      dhalasho: 'Dhammaadka jiilaalka',
      nolosha: 12
    },
    {
      name: 'Dameer-farro',
      dhalasho: 'Xilliga gu\'ga',
      nolosha: 25
    },
    {
      name: 'Cawl',
      dhalasho: 'Bilaha kuleylaha',
      nolosha: 18
    },
    {
      name: 'Libaax',
      dhalasho: 'Jiilaalka',
      nolosha: 14
    },
    {
      name: 'Harti (Geed-maroodi)',
      dhalasho: 'Bisha ugu dambeysa sanadka',
      nolosha: 50
    },
    {
      name: 'Dameer',
      dhalasho: 'Guga',
      nolosha: 30
    },
    {
      name: 'Bacawl',
      dhalasho: 'Jiilaalka',
      nolosha: 5
    },
    {
      name: 'Geri',
      dhalasho: 'Dabayaaqada sanadka',
      nolosha: 25
    },
    {
      name: 'Gundumo',
      dhalasho: 'Bilaha kuleylaha',
      nolosha: 10
    },
    {
      name: 'Sankaraar',
      dhalasho: 'Bilaha roobka',
      nolosha: 12
    },
    {
      name: 'Cayni',
      dhalasho: 'Xagaaga',
      nolosha: 8
    },
    {
      name: 'Lax',
      dhalasho: 'Bishii koowaad',
      nolosha: 12
    },
    {
      name: 'Ri',
      dhalasho: 'Gu\'ga',
      nolosha: 15
    },
    {
      name: 'Sagal',
      dhalasho: 'Jiilaalka',
      nolosha: 7
    },
    {
      name: 'Faras',
      dhalasho: 'Dabayaaqada sanadka',
      nolosha: 35
    },
    // 20 Xayawaan oo Dheeraad ah
    {
      name: 'Qudhac',
      dhalasho: 'Xilliga kuleylaha',
      nolosha: 10
    },
    {
      name: 'Fardaha Badda',
      dhalasho: 'Bilaha qabow',
      nolosha: 7
    },
    {
      name: 'Bahal Faarro',
      dhalasho: 'Jiilaalka',
      nolosha: 9
    },
    {
      name: 'Haldoor',
      dhalasho: 'Dabayaaqada sanadka',
      nolosha: 18
    },
    {
      name: 'Jiir',
      dhalasho: 'Guga',
      nolosha: 3
    },
    {
      name: 'Sagaaro',
      dhalasho: 'Bilaha kuleylaha',
      nolosha: 6
    },
    {
      name: 'Baqar',
      dhalasho: 'Jiilaalka',
      nolosha: 20
    },
    {
      name: 'Orso',
      dhalasho: 'Dabayaaqada sanadka',
      nolosha: 30
    },
    {
      name: 'Dibi',
      dhalasho: 'Bilaha roobka',
      nolosha: 20
    },
    {
      name: 'Bisad',
      dhalasho: 'Xilliga gu\'ga',
      nolosha: 15
    },
    {
      name: 'Goof',
      dhalasho: 'Xagaaga',
      nolosha: 4
    },
    {
      name: 'Deero',
      dhalasho: 'Jiilaalka',
      nolosha: 12
    },
    {
      name: 'Baoqool',
      dhalasho: 'Guga',
      nolosha: 17
    },
    {
      name: 'Baardi',
      dhalasho: 'Bilaha kuleylaha',
      nolosha: 11
    },
    {
      name: 'Shimbir',
      dhalasho: 'Bilaha roobka',
      nolosha: 3
    }
  ];
  
  // Function si loo soo bandhigo xayawaannada
  function sooBandhigXayawaannada() {
    const xayawaannadaList = document.getElementById('xayawaannada-list');
    xayawaannadaList.innerHTML = ''; // Nadiifi si aan u bilowno marka hore
  
    xayawaanada.forEach(xayawaan => {
      const xayawaanDiv = document.createElement('div');
      xayawaanDiv.classList.add('xayawaan');
  
      const h2 = document.createElement('h2');
      h2.textContent = xayawaan.name;
      xayawaanDiv.appendChild(h2);
  
      const dhalashoPara = document.createElement('p');
      dhalashoPara.innerHTML = `Dhalashada: <span class="dhalasho">${xayawaan.dhalasho}</span>`;
      xayawaanDiv.appendChild(dhalashoPara);
  
      const noloshaPara = document.createElement('p');
      noloshaPara.innerHTML = `Inta uu noolaado: <span class="nolosha">${xayawaan.nolosha} sano</span>`;
      xayawaanDiv.appendChild(noloshaPara);
  
      xayawaannadaList.appendChild(xayawaanDiv);
    });
  }
  
  // Function si random xayawaan loogu daro liiska
  function kuDarXayawaanCusub() {
    const randomXayawaan = {
      name: 'Dibi',
      dhalasho: 'Bilaha roobka',
      nolosha: 20
    };
  
    xayawaanada.push(randomXayawaan);
    sooBandhigXayawaannada(); 
  }
  
  // Marka boggu furmo, soo bandhig xayawaannada
  document.addEventListener('DOMContentLoaded', function() {
    sooBandhigXayawaannada();
  });
  
  // Marka la gujiyo batoonka "Ku dar Xayawaan Cusub"
  document.getElementById('add-xayawaan').addEventListener('click', kuDarXayawaanCusub);
  /*
  
  
  // Xogta xayawaannada Soomaaliya
  const xayawaanada = [];
  for (let i = 0; i < 300; i++) {
    xayawaanada.push({
      name: `Xayawaan ${i + 1}`,
      dhalasho: `Dhalasho waqti ${i + 1}`,
      nolosha: Math.floor(Math.random() * 100) + 1,
      info: `Warbixin dheeri ah oo ku saabsan Xayawaan ${i + 1}`
    });
  }
  
  // Function si loo soo bandhigo xayawaannada
  function sooBandhigXayawaannada() {
    const xayawaannadaList = document.getElementById('xayawaannada-list');
    xayawaannadaList.innerHTML = ''; // Nadiifi si aan u bilowno marka hore
  
    xayawaanada.forEach((xayawaan, index) => {
      const xayawaanDiv = document.createElement('div');
      xayawaanDiv.classList.add('xayawaan');
  
      const h2 = document.createElement('h2');
      h2.textContent = xayawaan.name;
      xayawaanDiv.appendChild(h2);
  
      const dhalashoPara = document.createElement('p');
      dhalashoPara.innerHTML = `Dhalashada: <span class="dhalasho">${xayawaan.dhalasho}</span>`;
      xayawaanDiv.appendChild(dhalashoPara);
  
      const noloshaPara = document.createElement('p');
      noloshaPara.innerHTML = `Inta uu noolaado: <span class="nolosha">${xayawaan.nolosha} sano</span>`;
      xayawaanDiv.appendChild(noloshaPara);
  
      const readMoreButton = document.createElement('button');
      readMoreButton.textContent = 'Akhri Waxbadan';
      readMoreButton.addEventListener('click', () => sooBandhigWarbixin(index));
      xayawaanDiv.appendChild(readMoreButton);
  
      xayawaannadaList.appendChild(xayawaanDiv);
    });
  }
  
  // Function si loo soo bandhigo warbixin dheeraad ah
  function sooBandhigWarbixin(index) {
    const detailsDiv = document.getElementById('xayawaan-details');
    const title = document.getElementById('details-title');
    const info = document.getElementById('details-info');
  
    title.textContent = xayawaanada[index].name;
    info.textContent = xayawaanada[index].info;
  
    detailsDiv.classList.remove('hidden');
    detailsDiv.style.display = 'block';
  }
  
  // Function si loo xiro warbixin dheeraad ah
  function xirWarbixin() {
    const detailsDiv = document.getElementById('xayawaan-details');
    detailsDiv.style.display = 'none';
  }
  
  // Xiritaanka warbixinta marka batoonka la gujiyo
  document.getElementById('close-details').addEventListener('click', xirWarbixin);
  
  // Xayawaan cusub ku dar liiska
  function kuDarXayawaanCusub() {
    const randomXayawaan = {
      name: 'Dibi',
      dhalasho: 'Bilaha roobka',
      nolosha: 20,
      info: 'Dibi waa xayawaan weyn oo ka mid ah xayawaannada duurjoogta Soomaaliya.'
    };
  
    xayawaanada.push(randomXayawaan);
    sooBandhigXayawaannada(); // Dib u bandhig liiska si cusub
  }
  
  // Marka boggu furmo, soo bandhig xayawaannada
  document.addEventListener('DOMContentLoaded', function() {
    sooBandhigXayawaannada();
  });
  
  // Marka la gujiyo batoonka "Ku dar Xayawaan Cusub"
  document.getElementById('add-xayawaan').addEventListener('click', kuDarXayawaanCusub);
  
  */  





///Assigment\\\\
function displayOutput(message) {
  document.getElementById("output").innerHTML += message + "<br>";
}

function resetOutput() {
  document.getElementById("output").innerHTML = "";
}

// Main Menu Functionality
function showConditionals() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.conditionalExamples').style.display = "block"; // Change to plural
}

function showLoops() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.loopExamples').style.display = "block"; // Change to plural
}

function backToMenu() {
  resetOutput();
  document.querySelector('.conditionalExamples').style.display = "none"; // Change to plural
  document.querySelector('.loopExamples').style.display = "none"; // Change to plural
  document.getElementById("menu").style.display = "block";
}



//// Conditional Example \\\\
function if_statement() {
  let number = prompt("Enter an integer:");
  if (number >= 0) {
      displayOutput("You entered a positive integer: " + number);
  } else {
      displayOutput("You entered a negative integer: " + number);
  }
}

function if_else() {
  let number = prompt("Enter an integer:");
  if (number % 2 === 0) {
      displayOutput(number + " is an even number.");
  } else {
      displayOutput(number + " is an odd number.");
  }
}

function nsd_If() {
  let marks = parseInt(prompt("Enter the student's marks (0-100):"));

  if (marks >= 0 && marks <= 100) {
      if (marks >= 90) {
          displayOutput("Grade: A");
      } else if (marks >= 80) {
          displayOutput("Grade: B");
      } else if (marks >= 70) {
          displayOutput("Grade: C");
      } else if (marks >= 60) {
          displayOutput("Grade: D");
      } else {
          displayOutput("Grade: F");
      }
  } else {
      displayOutput("Please enter valid marks between 0 and 100.");
  }
}

function s_chProgram() {
  let day = parseInt(prompt("Enter a number for the day of the week (1-7):"));
  switch (day) {
      case 1: displayOutput("It's Sunday."); break;
      case 2: displayOutput("It's Monday."); break;
      case 3: displayOutput("It's Tuesday."); break;
      case 4: displayOutput("It's Wednesday."); break;
      case 5: displayOutput("It's Thursday."); break;
      case 6: displayOutput("It's Friday."); break;
      case 7: displayOutput("It's Saturday."); break;
      default: displayOutput("Please enter a valid day between 1 and 7.");
  }
}

function ty_Operatr() {
  let age = parseInt(prompt("Enter your age:"));
  let message = age > 18 ? "You are an adult." : "You are a junior.";
  displayOutput(message);
}

function complexIf() {
  let score = prompt("Enter your score (0-100):");
  if (score >= 90) {
      displayOutput("You got an A!");
  } else if (score >= 80) {
      displayOutput("You got a B!");
      
  } else if (score >= 70) {
      displayOutput("You got a C!");
  } else if (score >= 60) {
      displayOutput("You got a D!");
  } else {
      displayOutput("You got an F.");
  }
}

function ageCheck() {
  let age = prompt("Enter your age:");
  if (age < 13) {
      displayOutput("You are a child.");
  } else if (age < 20) {
      displayOutput("You are a tenager.");
  } else {
      displayOutput("You are an adult.");
  }
}

//// Loops Example \\\\
function f_Loop() {
  let sum = 0;
  let num = parseInt(prompt("Enter a positive integer:"));
  for (let count = 1; count <= num; ++count) {
      sum += count;
  }
  displayOutput("The sum of integers from 1 to " + num + " is: " + sum);
}

function w_Loop() {
  let i = 1;
  let output = "Counting to 5:<br>";
  while (i <= 5) {
      output += i + " ";
      i++;
  }
  displayOutput(output);
}

function dW_Loop() {
  let i = 1;
  let output = "Counting to 5 (do...while):<br>";
  do {
      output += i + " ";
      i++;
  } while (i <= 5);
  displayOutput(output);
}

function lWB_reak() {
  let output = "Loop with break:<br>";
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          break;
      }
      output += i + " ";
  }
  displayOutput(output);
}

function lW_Continue() {
  let output = "Loop with continue:<br>";
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          continue; //// Skip the number 3 \\\\
      }
      output += i + " ";
  }
  displayOutput(output);
}

function infiniteLoop() {
  let output = "Counting to 5 (infinite loop with break):<br>";
  let i = 1;
  while (true) {
      if (i > 5) {
          break;
      }
      output += i + " ";
      i++;
  }
  displayOutput(output);
}

////////////////////////////////////
function navigateTo(page) {
  const content = document.getElementById('content');
  switch (page) {
      case 'chapters':
          content.innerHTML = `
               
  <div id="menu">
      <h2>Select Example Category:</h2>
      <button onclick="showConditionals()">Conditionals</button>
      <button onclick="showLoops()">Loops</button>
      <button onclick="exitProgram()">Exit Program</button>
  </div>
          `;
          break;
      case 'lab':
          content.innerHTML = '';
          break;
      case 'assign':
          content.innerHTML = '';
          break;
      case 'about':
          content.innerHTML = '';
          break;
      case 'comparison':
          comparisonOperators();
          break;
      case 'logical':
          logicalOperators();
          break;
      case 'assignment':
          assignment();
          break;
      case 'increment':
          increment();
          break;
      case 'decrement':
          decrement();
          break;
      case 'implicit':
          implicitConversion();
          break;
      default:
          content.innerHTML = '';
  }
}


//// Exit Program \\\\
function exitProgram() {
  displayOutput("Exiting the program.bye");
}


////////////////////////////

      function navigateTo(page) {
          const content = document.getElementById('content');
          switch (page) {
              case 'chapters':
                  content.innerHTML = `
                      <div id="menu">
                          <h2>Select a Chapter</h2>
                          <button onclick="Example()">Chapter 1</button>
                          <button onclick="showConditionals()">Chapter 2: Conditionals</button>
                          <button onclick="showLoops()">Chapter 3: Loops</button>
                          <button onclick="f_4()">Chapter 4: Functions</button>
                      </div>
                  `;
                  break;
              case 'lab':
                  content.innerHTML = '<h1>Exam Lab</h1><p>This is the Exam Lab page.</p>';
                  break;
              case 'assign':
                  content.innerHTML = '<h1>Assignment-js</h1><p>Here are the assignments.</p>';
                  break;
              case 'about':
                  content.innerHTML = '<h1>About Me</h1><p>This is the About Me page.</p>';
                  break;
              case 'comparison':
                  comparisonOperators();
                  break;
              case 'logical':
                  logicalOperators();
                  break;
              case 'assignment':
                  assignment();
                  break;
              case 'increment':
                  increment();
                  break;
              case 'decrement':
                  decrement();
                  break;
              case 'implicit':
                  implicitConversion();
                  break;
              default:
                  content.innerHTML = '<h1>404</h1><p>Page not found.</p>';
          }
      }

      function comparisonOperators() {
          let results = '';
          results += `2 == 3: ${2 == 3} (false)<br>`;
          results += `78 === 9: ${78 === 9} (false)<br>`;
          results += `65 != 76: ${65 != 76} (true)<br>`;
          results += `21 !== 32: ${21 !== 32} (true)<br>`;
          results += `25 > 35: ${25 > 35} (false)<br>`;
          document.getElementById('content').innerHTML = `<h2>Comparison Operators</h2><p>${results}</p>`;
      }
   
      
      function logicalOperators() {
          let results = '';
          results += `true && false: ${true && false} (false)<br>`;
          results += `true || false: ${true || false} (true)<br>`;
          results += `!true: ${!true} (false)<br>`;
          document.getElementById('content').innerHTML = `<h2>Logical Operators</h2><p>${results}</p>`;
      }

      function assignment() {
          let num = 5 + 10;
          document.getElementById('content').innerHTML = `<h2>Assignment</h2><p>Count is now: ${num}</p>`;
      }

      function increment() {
          let x = 5;
          let y = x++;
          let results = `x: ${x}, y: ${y} (y will be 5, x will be 6)<br>`;
          let u = 10;
          let z = ++u;
          results += `u: ${u}, z: ${z} (u and z will be 11)<br>`;
          document.getElementById('content').innerHTML = `<h2>Increment</h2><p>${results}</p>`;
      }

      function decrement() {
          let f = 8;
          let k = f--;
          let results = `f: ${f} (f will be 7), k: ${k} (k will be 8)<br>`;
          document.getElementById('content').innerHTML = `<h2>Decrement</h2><p>${results}</p>`;
      }

      function implicitConversion() {
          let age = 25;
          let message = "I am " + age + " years old."; // Implicitly converts age to a string
          let numStr = "42";
          let result = numStr * 2; // Implicitly converts numStr to a number
          document.getElementById('content').innerHTML = `<h2>Implicit Conversion</h2><p>${message}<br>Result of '42' * 2: ${result}</p>`;
      }

      // Load the chapters page by default
      comparisonOperators();
      navigateTo('chapters');
 


///////////////////////////////////////////////





function displayOutput(message) {
  document.getElementById("output").innerHTML += message + "<br>";
}

function resetOutput() {
  document.getElementById("output").innerHTML = "";
}

function Example() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.Chap.One').style.display = "block"; // Show chapter 1
}

function showConditionals() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.Chap.Two').style.display = "block"; // Show chapter 2
}

function showLoops() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.Chap.Three').style.display = "block"; // Show chapter 3
}


function f_4() {
  resetOutput();
  document.getElementById("menu").style.display = "none";
  document.querySelector('.Chap.Four').style.display = "block"; // Show chapter 4
}

function backToMenu() {
  resetOutput();
  document.querySelectorAll('.Chap').forEach(Chap => {
      Chap.style.display = "none"; // Hide all chapters
  });
  document.getElementById("menu").style.display = "block"; // Show menu
}
backToMenu();

//Chapte One
// Exmaples:1
function NamePart1(){
  console.log("Hello , World!");
}

//Chapte Two
//Exmaples:
function ExampleOne(){
   let result = 5 + 3;
   console.log(result) // result is 8

}

function ExampleTwo(){
  let isEqual = 2 === 3;
  console.log(isEqual) //  isEqual is false

}
function ExampleThree(){
  let isTrue = true && false;  
  console.log(isTrue) // false

}
function Example2(){
  let isTrue = true || false;  
  console.log(isTrue) // true
}
function Example3(){
  let isTrue = !true;  
  console.log(isTrue) // false
}
function Example4(){
  let age = parseInt(prompt("Enter your age:"));
  let message = age > 18 ? "You are an adult." : "You are a junior."; 
  displayOutput()// Adult

}
function Example5(){
  let num = 10;
  let strNum = "5";
  console.log(num > strNum); 

}
/*
function Postfix(){
let x = 8;
let y = x--; // y will be 8, and x will be 7
}
function Prefix(){
let x = 15;
let y = --x; // y will be 14, and x will be 14
}
*/


//Chapte Thee
//Exmaples:
function Example3 (){
  const age = 30;
  const message = `My age is ${age} years. I live in Mogadishu.`;

}
function Temporary(){
  let a = 5;
  let b = 10;
  let temp = a;
  a = b;
  b = temp;
  console.log("After swapping: a = " + a + ", b = " + b);

}
function Arithmetic(){
  let a = 5;
  let b = 10;

  a = a + b; 
  b = a - b; 
  a = a - b;
  console.log("After swapping: a = " + a + ", b = " + b);
}

function if_statement() {
  let number = prompt("Enter an integer:");
  if (number >= 0) {
      displayOutput("You entered a positive integer: " + number);
  } else {
      displayOutput("You entered a negative integer: " + number);
  }
}

function if_else() {
  let number = prompt("Enter an integer:");
  if (number % 2 === 0) {
      displayOutput(number + " is an even number.");
  } else {
      displayOutput(number + " is an odd number.");
  }
}

function nested_If() {
  let marks = parseInt(prompt("Enter the student's marks (0-100):"));

  if (marks >= 0 && marks <= 100) {
      if (marks >= 90) {
          displayOutput("Grade: A");
      } else if (marks >= 80) {
          displayOutput("Grade: B");
      } else if (marks >= 70) {
          displayOutput("Grade: C");
      } else if (marks >= 60) {
          displayOutput("Grade: D");
      } else {
          displayOutput("Grade: F");
      }
  } else {
      displayOutput("Please enter valid marks between 0 and 100.");
  }
}

function switch_Program() {
  let day = parseInt(prompt("Enter a number for the day of the week (1-7):"));
  switch (day) {
      case 1: displayOutput("It's Sunday."); break;
      case 2: displayOutput("It's Monday."); break;
      case 3: displayOutput("It's Tuesday."); break;
      case 4: displayOutput("It's Wednesday."); break;
      case 5: displayOutput("It's Thursday."); break;
      case 6: displayOutput("It's Friday."); break;
      case 7: displayOutput("It's Saturday."); break;
      default: displayOutput("Please enter a valid day between 1 and 7.");
  }
}

function ty_Operatr() {
  let age = parseInt(prompt("Enter your age:"));
  let message = age > 18 ? "You are an adult." : "You are a junior.";
  displayOutput(message);
}

function complexIf() {
  let score = prompt("Enter your score (0-100):");
  if (score >= 90) {
      displayOutput("You got an A!");
  } else if (score >= 80) {
      displayOutput("You got a B!");
      
  } else if (score >= 70) {
      displayOutput("You got a C!");
  } else if (score >= 60) {
      displayOutput("You got a D!");
  } else {
      displayOutput("You got an F.");
  }
}

function ageCheck() {
  let age = prompt("Enter your age:");
  if (age < 13) {
      displayOutput("You are a child.");
  } else if (age < 20) {
      displayOutput("You are a tenager.");
  } else {
      displayOutput("You are an adult.");
  }
}

//// Loops Example \\\\
function f_Loop() {
  let sum = 0;
  let num = parseInt(prompt("Enter a positive integer:"));
  for (let count = 1; count <= num; ++count) {
      sum += count;
  }
  displayOutput("The sum of integers from 1 to " + num + " is: " + sum);
}

function w_Loop() {
  let i = 1;
  let output = "Counting to 5:<br>";
  while (i <= 5) {
      output += i + " ";
      i++;
  }
  displayOutput(output);
}

function dW_Loop() {
  let i = 1;
  let output = "Counting to 5 (do...while):<br>";
  do {
      output += i + " ";
      i++;
  } while (i <= 5);
  displayOutput(output);
}

function L_break() {
  let output = "Loop with break:<br>";
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          break;
      }
      output += i + " ";
  }
  displayOutput(output);
}

function lW_Continue() {
  let output = "Loop with continue:<br>";
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          continue; //// Skip the number 3 \\\\
      }
      output += i + " ";
  }
  displayOutput(output);
}

function infiniteLoop() {
  let output = "Counting to 5 (infinite loop with break):<br>";
  let i = 1;
  while (true) {
      if (i > 5) {
          break;
      }
      output += i + " ";
      i++;
  }
  displayOutput(output);
}



/// Lab Exam \\\\

function Names0() {
console.log(`Ali\nJamac\nAli`);

}

// Function to display messages based on the current time
function displayTimeMessages() {
  // Get the current date and time
  const now = new Date();
  
  // Get the current hour
  const currentHour = now.getHours();

  // Switch statement to display messages for each hour from 5 AM to the current hour
  for (let hour = 5; hour <= currentHour; hour++) {
      switch (hour) {
          case 5:
              console.log("It's 5:00 AM - Time to wake up!");
              break;
          case 6:
              console.log("It's 6:00 AM - Good morning!");
              break;
          case 7:
              console.log("It's 7:00 AM - Time for breakfast!");
              break;
          case 8:
              console.log("It's 8:00 AM - Start your day!");
              break;
          case 9:
              console.log("It's 9:00 AM - Let's get productive!");
              break;
          case 10:
              console.log("It's 10:00 AM - Keep going!");
              break;
          case 11:
              console.log("It's 11:00 AM - Almost lunchtime!");
              break;
          case 12:
              console.log("It's 12:00 PM - Lunchtime!");
              break;
          case 13:
              console.log("It's 1:00 PM - Time to relax a bit!");
              break;
          case 14:
              console.log("It's 2:00 PM - Keep up the good work!");
              break;
          case 15:
              console.log("It's 3:00 PM - Afternoon slump time!");
              break;
          case 16:
              console.log("It's 4:00 PM - Almost there!");
              break;
          case 17:
              console.log("It's 5:00 PM - Time to wrap up the day!");
              break;
          case 18:
              console.log("It's 6:00 PM - Time to head home!");
              break;
          case 19:
              console.log("It's 7:00 PM - Time for dinner!");
              break;
          case 20:
              console.log("It's 8:00 PM - Relax and enjoy your evening!");
              break;
          case 21:
              console.log("It's 9:00 PM - Wind down for the day!");
              break;
          case 22:
              console.log("It's 10:00 PM - Time to get ready for bed!");
              break;
          case 23:
              console.log("It's 11:00 PM - Good night!");
              break;
          default:
              console.log("It's past midnight!");
      }
  }
}

// Call the function to display the messages
displayTimeMessages();




  /////////////////////////////////////////// chapters \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // Display function to output me_1
function layOutput(me_1) {
  document.getElementById("output_1").innerHTML += me_1 + "<br>";
}

function pesetOutput() {
  document.getElementById("output_1").innerHTML = "";
}

// Main Menu Functionality
function Conditionals() {
  pesetOutput();
  document.getElementById("").style.display = "none";
  document.querySelector('.').style.display = "block"; 
}

function showLoops() {
  pesetOutput();
  document.getElementById("").style.display = "none";
  document.querySelector('').style.display = "block"; 
}

function backToMenu() {
  pesetOutput();
}
/////////////////////////////////////////////////  Chapter One ///////////////////////////////////////////////////////////

// Chapter One
// Example 1
function NamePart1() {
 const name = "Hello, World!";
 document.getElementById("output_11").innerHTML = name;
}

///////////////////////////////////////////////// Chapter Two ///////////////////////////////////////////////////////////

// Chapter Two
// Example 1
function ExampleOne() {
 let result = 5 + 3;
 console.log(result); 
 document.getElementById("output_1").innerHTML = result;
}


// // Example 2
function ExampleTwo() {
 let isEqual = 2 === 3;
 console.log(isEqual); 
 document.getElementById("output_1").innerHTML = isEqual;
}

// Example 3
function ExampleThree() {
 let isTrue = true && false;
 console.log(isTrue); 
 document.getElementById("output_1").innerHTML = isTrue;
}

// Example 4
function Example4() {
 let isTru = true || false;
 console.log(isTru); 
 document.getElementById("output_1").innerHTML = isTru;
}

// Example 5
function Example5() {
 let isTre = !true;
 console.log(isTre); 
 document.getElementById("output_1").innerHTML = isTre;
}

// Example 6: Ternary Operator
function Example6() {
 let age = parseInt(prompt("Enter your age:"));
 let message = age > 18 ? "You are an adult." : "You are a junior.";
 console.log(message); 
 document.getElementById("output_1").innerHTML = message ;

}

// Example 7: Comparison with Different Types
function Example7() {
 let num = 10;
 let strNum = "5";
 console.log(num > strNum); 
 document.getElementById("output_1").innerHTML =  num > strNum;
}

// Example 8: Postfix and Prefix
function Postfix() {
 let x = 8;
 let y = x--; 
 console.log(`Postfix: x=${x}, y=${y}`);
 document.getElementById("output_1").innerHTML =  x = y;
}

function Prefix() {
 let x = 15;
 let y = --x; 
 console.log(`Prefix: x=${x}, y=${y}`);
 document.getElementById("output_1").innerHTML =  x = y ;
}

////////////////////////////////////////////// Display function to output me_2 ///////////////////////////////////////////////////////

// Display function to output me_2
function layOut(me_2) {
 document.getElementById("output_2").innerHTML += me_2 + "<br>";
}

function pesOutput() {
 document.getElementById("output_2").innerHTML = "";
}


function backTo() {
 pesOutput();
}



///////////////////////////////////////////////////// Chapter Three ///////////////////////////////////////////////////////

// Chapter Three
// Example 1: Template Literals
function Example8() {
 const age = 3000;
 const message = `My age is ${age} years. I live in Mogadishu.`;
 console.log(message,);
 document.getElementById("output_2").innerHTML =  message;

}

// Example 2: Swapping Variables (Temporary Variable)
function Temporary() {
 let a = 5;
 let b = 10;
 let temp = a;
 a = b;
 b = temp;
 console.log(`After swapping: a = ${a}, b = ${b}`);
 document.getElementById("output_2").innerHTML =   a, b;
}

// Example 3: Swapping Variables (Arithmetic)
function Arithmetic() {
 let a = 5;
 let b = 10;

 a = a + b;
 b = a - b;
 a = a - b;
 console.log(`After swapping: a = ${a}, b = ${b}`);
 document.getElementById("output_2").innerHTML = a, b ;

}
// Example 4: If Statement
function if_statement() {
  let number = parseInt(prompt("Enter an integer:"));
  if (number >= 0) {
    layOut(`You entered a positive integer: ${number}`); 
  } else {
     
      document.getElementById("output_2").innerHTML = number;  

  }
}

// Example 5: If-Else Statement
function if_else() {
  let number = parseInt(prompt("Enter an integer:"));
  if (number % 2 === 0) {
    layOut(`${number} is an even number.`);  
  } else {
    layOut(`${number} is an odd number.`);  
    document.getElementById("output_2").innerHTML = number; 
  }
}


// Example 6: Nested If
function nested_If() {
 let marks = parseInt(prompt("Enter the student's marks (0-100):"));

 if (marks >= 0 && marks <= 100) {
     if (marks >= 90) {
         console.log("Grade: A");
     } else if (marks >= 80) {
         console.log("Grade: B");
     } else if (marks >= 70) {
         console.log("Grade: C");
     } else if (marks >= 60) {
         console.log("Grade: D");
     } else {
         console.log("Grade: F");
     }
 } else {
     console.log("Please enter valid marks between 0 and 100.");
     document.getElementById("output_2").innerHTML = marks;
 }
}
// Example 6: Switch Statement:
function switch_Program() {
 let day = parseInt(prompt("Enter a number for the day of the week (1-7):"));
 let outputElement = document.getElementById("output_2");

 if (outputElement) {
     switch (day) {
         case 1:
             outputElement.innerHTML = "It's  Saturday.";
             break;
         case 2:
             outputElement.innerHTML = "It's  Sunday.";
             break;
         case 3:
             outputElement.innerHTML = "It's  Monday.";
             break;
         case 4:
             outputElement.innerHTML = "It's  Tuesday.";
             break;
         case 5:
             outputElement.innerHTML = "It's  Wednesday.";
             break;
         case 6:
             outputElement.innerHTML = "It's Thursday.";
             break;
         case 7:
             outputElement.innerHTML = "It's Friday .";
             break;
         default:
             outputElement.innerHTML = "Please enter a valid day between 1 and 7.";
     }
 } 
}


// Example 8: For Loop
function f_Loop() {
 let sum = 0;
 let num = parseInt(prompt("Enter a positive integer:"));
 let outputElement = document.getElementById("output_2");

 if (num > 0) {
     for (let count = 1; count <= num; ++count) {
         sum += count;
     }
     if (outputElement) {
         outputElement.innerHTML = `The sum of integers from 1 to ${num} is: ${sum}`;
     } 
 } else {
     alert("Please enter a positive integer.");
 }
}
////////////////////////////////////////////////// Chapter Four //////////////////////////////////////////////////////////




// ///// Chapter Four \\\\\
// Examples \\

// // Example 1: function
function Hello() {
 console.log("Hello, world!"); 
 const outputElement = document.getElementById("output_4"); 
 if (outputElement) {
     outputElement.textContent = "Hello, world!"; 
 } 
}


// Example 2: Function with Parameter
function Gren(name) {
 console.log(`Hello, ${name}!`); 
 const outputElement = document.getElementById("output_4"); 
 if (outputElement) {
     outputElement.textContent = `Hello, ${name}!`; 
 }
}

// Call the function
Gren("Mohamed");

// Example 3: Function with Return
function add(a, b) {
 return a + b;
}

function displaySum() {
 const results = add(3, 5);
 const outputElement = document.getElementById("output_4");
 if (outputElement) {
     outputElement.textContent = `The result is: ${results}`;
 }
}



// Example 4: Global and Local Scope
var globalVariable = "I'm in global scope";

function printGlobal() {
  console.log(globalVariable); 
  const outputElement = document.getElementById("output_4"); 
  if (outputElement) {
      outputElement.textContent = globalVariable; 
  }
}

printGlobal(); 
console.log(globalVariable); 

// Local variable inside a function
function printLocal() {
  var localVariable = "I'm in local scope";
  console.log(localVariable); 
  const outputElement = document.getElementById("output_4"); 
  if (outputElement) {
      outputElement.textContent = localVariable; 
  }
}

printLocal(); 

// Block scope variable
if (true) {
  let blockVariable = "I'm in block scope";
  console.log(blockVariable); 
}


// Example 5: Arrow Functions
const sayHelloArrow = () => "Hello, world!";
console.log(sayHelloArrow()); 

const outputElement = document.getElementById("output_4");
if (outputElement) {
  outputElement.textContent = sayHelloArrow(); 
} 

// Arrow function that doubles a number
const doubleNumber = (number) => number * 2;
console.log(doubleNumber(3)); 
if (outputElement) {
  outputElement.textContent += `\nDouble of 3 is: ${doubleNumber(3)}`;
}

// Arrow function that adds two numbers
const addNumbers = (a, b) => a + b;
console.log(addNumbers(3, 5)); 
if (outputElement) {
  outputElement.textContent += `\nSum of 3 and 5 is: ${addNumbers(3, 5)}`; 
}


function doSomething(callback = () => {
  console.log("Default callback executed.");
}) {
  console.log("Doing something...");
  const outputElement = document.getElementById("output_4"); 
  if (outputElement) {
      outputElement.textContent = "Doing something..."; 
  }
  callback(); 
}

// Call doSomething without a callback
doSomething();

// Call doSomething with a custom callback
doSomething(() => {
  console.log("Custom callback executed!");
});


function onComplete() {
 console.log("Operation complete!");
 const outputElement = document.getElementById("output_4");
 if (outputElement) {
     outputElement.textContent += "\nOperation complete!";
 } 
}

// Call the main function with the callback
doSomething(onComplete);

// Example 7: 
setTimeout(() => {
 console.log("This is an arrow function callback executed after 2 seconds.");
}, 2000);

setTimeout(function () {
 console.log("This is a regular function callback executed after 2 seconds.");
}, 2000);



/////////////////////////////////////////////// Chapter : Five /////////////////////////////////////////////////////////////

// Chapter : Five
// Exmaples
function updateText() {
  //Array Literal:
   const names = ["Ahmet, Mohamet, Ali"]
   document.getElementById("message").innerHTML = names;
  
}

//
function Names() {
  //Array Constructor:
  const name = new Array("Ahmet, Mohamet, Ali");
  document.getElementById("message").innerHTML = name;
}

function Arrays() {
  //Empty Array: 
  const myArray = [];
  myArray [0] = "first";
  myArray [1] = "second";
  document.getElementById("message").innerHTML = myArray;
}


function Arrays_Elemant() {
  //Array.from():
  const arrayFromStr = Array.from('Hello');
  document.getElementById("message").innerHTML = arrayFromStr;
}


function Arrays_5() {
  //Array.from():
  const sourceArray = ['1,2,3'];
  const newArray = ['...sourceArray'];
  document.getElementById("message").innerHTML = newArray;
}


function Arrays_6() {
  //Array.of:
  const myArray = Array.of ('1,2,3')
  document.getElementById("message").innerHTML = myArray;
}

function Arrays_7() {
  //Accessing Array Elements
  const fruits = ["Apple","Banana","Cherry"];
  document.getElementById("change").innerHTML = fruits;
}


function Arrays_8() {
  //Accessing Array Elements
  const firstFruit = fruits [0];
  document.getElementById("change").innerHTML = fruits;
}



function Arrays_9() {
 //Accessing Array Elements
 const fruits = ["apple", "banana", "cherry"];
 document.getElementById("change").innerHTML = fruits;
}



function Arrays_10() {
 //Access the first element (index 0)
 const firstFruit = fruits[0];  // 'apple'
 document.getElementById("change").innerHTML = firstFruit;
}


function Arrays_11() {
 //Adding Elements:
 //Push Method:
 const fruits = ["Apple","Banana"];
  fruits.push = ("mango")
 document.getElementById("change").innerHTML = fruits;
}


function Arrays_12() {
 //Unshift Method:
 const fruits = ["Banana","mango"];
  fruits.unshift = ("Apple")
 document.getElementById("change").innerHTML = fruits;
}


function Arrays_13() {
 //Updating Elements:
 const fruits = ["Apple", "Banana", "Cherry"];
  fruits [1] = "mango";
 document.getElementById("change").innerHTML = fruits;
}


//Removing Elements :

function Arrays_14() {
 //Pop Method:
 const fruits = ["Apple", "Banana", "Cherry"];
  fruits.pop ();
 document.getElementById("change").innerHTML = fruits;
}

function Arrays_15() {
 //Shift Method:
 const fruits = ["Apple", "Banana", "mango"];
  fruits.shift ();
 document.getElementById("change").innerHTML = fruits;
}


function Arrays_16() {
 //Splice Method:
 const fruits = ["Apple", "Banana", "mango", "tomato"];
  fruits.splice (1,2);
 document.getElementById("change").innerHTML = fruits;
}

// Iterating Through Arrays:
// For Loop
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach() Method
fruits.forEach(function(fruit) {
  console.log(fruit);
});

//for...of Loop
for (const fruit of fruits) {
 console.log(fruit);
}

//map() Method 
const numbers = [1,2,3];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);


//////////////////

// filter
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

// reduce
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(function(total, num) {
  return total + num;
}, 0);
console.log(sum); // Output: 10

// every
const numbers3 = [2, 4, 6, 8];
const allEven = numbers3.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // Output: true

// some
const numbers4 = [1, 3, 5, 8];
const hasEven = numbers4.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEven); // Output: true


// forEach() Method
fruits.forEach((fruit, index) => {
 console.log('fruit at index ${index} is ${fruit}');
});

//Creating a Two-Dimensional Array
const matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6

console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][1]); // Output: 5
console.log(matrix[2][2]); // Output: 9

// Iterating Over a Two-Dimensional Array 
for (let i = 0; i < matrix.length; i++) {
 for (let j = 0; j < matrix[i].length; j++) {
     console.log(matrix[i][j]);
 }
}



// Function to check if a character is a vowel
function isVowel(char) {
 return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Function to filter vowels and consonants from a name
function filterVowelsAndConsonants(name) {
 // Convert the name to an array of characters
 const characters = name.split('');

 // Filter vowels
 const vowels = characters.filter(char => isVowel(char));

 // Filter consonants
 const consonants = characters.filter(char => !isVowel(char) && /[a-zA-Z]/.test(char));

 return {
     vowels: vowels,
     consonants: consonants
 };
}

// Example usage with the name "Ahmet"
const name = "Ahmet";
const result = filterVowelsAndConsonants(name);

console.log("Vowels: ", result.vowels); 
console.log("Consonants: ", result.consonants);



// Exmaple
const Person = {
 Name: "Ahmed",
 Age: 25,
 Work: "Arday"
};

console.log(Person.Work); 

// Exmaple

class Person_c {
 constructor(fristName, listName, age) {
     this.fristName = fristName;
     this.listName = listName;
     this.age = age;
     
 }
}

const person1 = new Person_c("Hassan", 35, "Ali");
console.log(person1.age);
console.log(person1["listName"]);

person1.email = "Hassan.Ali@email.com";
person1.age = 31;

// Exmaple


const person_2 = {
 fristName: "Mohamet",
 lastName: "Ali",
 getFullName: function () {
    return this.fristName + " " + this.listName ;
 }
 }
 console.log( person_2.getFullName());

// Exmaple
const person = {
 name: 'Amina',
 educ_level: 'Bachelor',
 gra_status: 'Active'
 }
 for(let index in person){
    console.log(`${index}: ${person[index]}`)
 }

 
// // Exmaple
function Qof(firstmagac, da, shaqo) {
 this.firstmagac = firstmagac;
 this.da = da;             
 this.shaqo = shaqo;       
}

// Create objects
const qof4 = new Qof("Ali", 30, "Arday");
const qof5 = new Qof("Fatima", 28, "Macalimad");

// Log properties
console.log(qof4.da);           
console.log(qof5["firstmagac"]); 

   
const jsonString = '{"name": "Ahmet Abdu"}'; 
const jsonObject = JSON.parse(jsonString); 
console.log(jsonObject.name); 

const person_l = { name: "Ahmet Abdu", age: 20 };
const jsonStringified = JSON.stringify(person_l); 
console.log(jsonStringified); 


// Define the JSON object
const data = {
 person: {
   name: "Mohamed Ali",
   age: 30
 },
 hobbies: ["reciting quran", "praying", "reading", "swimming"]
};

// Access and log the data
console.log(`Name: ${data.person.name}`);
console.log(`Age: ${data.person.age}`);
console.log("Hobbies:");
data.hobbies.forEach((hobby, index) => {
 console.log(`  ${index + 1}. ${hobby}`);
});

/////////////////////////////////////////////// Chapter Sex /////////////////////////////////////////////////////////////

// Chapter : Sex
//Exmaples:1
let ContectElement = document.getElementById("content");
ContectElement.style.background = "blue";
ContectElement.style.color = "white";


//Exmaples:2
let boxElements = document.getElementsByClassName("box");
for (let i = 0; i < boxElements.length; i++) {
 boxElements[i].style.border = "3px dashed black";
}

let paragraphElements = document.getElementsByTagName("h4");
for (let i = 0; i < paragraphElements.length; i++) {
 paragraphElements[i].style.fontStyle = "italic";
 paragraphElements[i].style.margin = "10px";
 paragraphElements[i].style.color = "red";
}


//Exmaple:3

// let creatElement = document.creatElement("p");

// const element = document.querySelector("p");
// console.log(element); 

// let allParagraphs = document.querySelectorAll("p");

// let allBoxes = document.querySelectorAll("div.box");


// Create a new <p> element
let createElement = document.createElement("p");
createElement.textContent = "This is a new paragraph."; 

document.body.appendChild(createElement); 

const element1 = document.querySelector("p");
console.log(element1); 

let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); 

let allBoxes = document.querySelectorAll("div.box");
console.log(allBoxes); 



////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////// Chapter Seven /////////////////////////////////////////////////////////////

// Chapter : Seven

//Exmaple:1
const element = document.getElementById("MyButtom");
element.addEventListener("click", myFunction);

function myFunction() {
  alert("Buttom Cliked!")
}

// //Exmaple:2
let elements = document.getElementById("myElement");

// MouseOver Event
elements.addEventListener("mouseover", function () {
  elements.style.backgroundColor = "green"; 
});

// MouseOut Event
elements.addEventListener("mouseout", function () {
  elements.style.backgroundColor = "blue"; 
});

// //Exmaple:3
const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");

// Listen for keydown events
textInput.addEventListener("keydown", function (event) {
  outputDiv.innerText = `Keydown: ${event.key}`;
});


// Listen for keypress events
textInput.addEventListener("keypress", function (event) {
  outputDiv.innerText += `\nKeypress: ${event.key}`;
});

// Listen for keyup events
textInput.addEventListener("keyup", function (event) {
  outputDiv.innerText += `\nKeyup: ${event.key}`;
});

// //Exmaple:3
//Focus events
const textInput1 = document.getElementById("textInput1");
const output2Div = document.getElementById("output2");

// Handle the focus event
textInput.addEventListener("focus", function () {
  updateOutput("Element focused!", "focused");
});

// Handle the blur event
textInput.addEventListener("blur", function () {
  updateOutput("Element blurred!", "blurred");
});

// Update the output message and class
function updateOutput(message, className) {
  outputDiv.innerText = message;
  outputDiv.className = className;
}


//Focus events Example: //
const textInput0 = document.getElementById("textInput");
const outputDiv4 = document.getElementById("output");
const form = document.getElementById("myForm");

textInput.addEventListener("input", function () {
  if (textInput.value !== "") {
      updateOutput("Input changed!", "valid");
  } else {
      updateOutput("Input changed with empty", "invalid");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  updateOutput("Form submitted!", "valid");
});

function updateOutput(message, className) {
  outputDiv.innerText = message;
  outputDiv.className = className;
}

const parenList = document.getElementById("ParentList");

// Event delegation using a single event listener on the parent element
parenList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
      alert("Clicked on: " + event.target.innerHTML);
  }

});

/////////////////////////////////////////////// Chapter Eight /////////////////////////////////////////////////////////////

// Chapter : Eight
// Exmaple From:

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.classList.remove("d-none");
      isValid = false;
  } else {
      emailError.classList.add("d-none");
  }

  // Password validation
  if (!password || password.length < 6) {
      passwordError.classList.remove("d-none");
      isValid = false;
  } else {
      passwordError.classList.add("d-none");
  }

  // Submit the form if valid
  if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
  }
});

////////////////////////////////////////////// Exit Program \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function exit() {
  layOutput("Exiting the program.bye");
}

///////////////

function exit_2() {
 layOut("Exiting the program.bye");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
