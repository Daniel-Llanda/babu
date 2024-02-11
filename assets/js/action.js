var btn_yes = document.getElementById('btn-yes');
var btn_no = document.getElementById('btn-no');
var img_jump = document.getElementById('jump');
var option_holder = document.getElementById('option-holder');
var content = document.getElementById('content');
var main = document.getElementById('main');
var text = document.getElementById('text');

let paddingTop = 0.5;
let paddingRight = 1;
let fontsize = 1;

btn_no.addEventListener("click", function(){
    paddingTop += 0.5;
    paddingRight += 1;
    fontsize += 1;
    btn_yes.style.padding = `${paddingTop}rem ${paddingRight}rem`;
    btn_yes.style.fontSize = `${fontsize}rem `;

    if (paddingTop == 2.5) {
        Swal.fire({
            text: "wala kang magagawa sakin kana",
            icon: "warning"
        });
        btn_no.style.display = "none";
    }
    
});

btn_yes.addEventListener("click", function(){
    img_jump.src = "assets/image/i-love-you-ily.gif";
    btn_yes.style.display = "none";
    btn_no.style.display = "none";
    text.innerHTML = "pakiss nga!!";

    const btn = document.createElement("button");
    btn.innerHTML = "LOVE";
    btn.classList.add("love-letter");
    option_holder.appendChild(btn);

    btn.addEventListener("click", function(){
        content.remove();
        const title = document.createElement("h2");
        title.innerHTML = "This letter will open after the countdown";
        title.id = 'title';
        main.appendChild(title);

        // Create the countdown div
        const countdown = document.createElement('div');
        countdown.id = 'countdown';

        // Create the unordered list
        const ul = document.createElement('ul');

        // Create list items for days, hours, minutes, and seconds
        const listItems = ['days', 'hours', 'minutes', 'seconds'];
        listItems.forEach(item => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.id = item;
            li.appendChild(span);
            li.appendChild(document.createTextNode(item.charAt(0).toUpperCase() + item.slice(1)));
            ul.appendChild(li);
        });

        // Append the ul to the countdown div
        countdown.appendChild(ul);

        // Append the countdown div to the body or any other desired element
        main.appendChild(countdown);
        (function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
          
            let birthday = "February 14, 2024 00:00:00",
                countDown = new Date(birthday).getTime(),
                x = setInterval(function() {    
          
                  let now = new Date().getTime(),
                      distance = countDown - now;
          
                  document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          
                  //do something later when date is reached
                  if (distance < 0) {
                    let countdown = document.getElementById("countdown");
                    countdown.remove();
                    title.innerHTML = "🖤 BABU 🖤";
                    const letterholder = document.createElement('div');
                    letterholder.id = "letterholder";
                    
                    main.appendChild(letterholder)
                    const letter = document.createElement('p');
                    letter.textContent = `Happy Valentines,Happy Second Anniversary and Happy Birthday to the most amazing woman in my life! I am overflowing with joy and gratitude as I get to celebrate another year of love, happiness, and countless memories by your side.

From the moment you entered my life, you have brought an abundance of love, warmth, and light. Being with you has transformed me in ways I could never have imagined. You have become the beating of my heart, the reason for my smile, and the strength that keeps me going.

Today, I celebrate not only the incredible person you are but also the incredible journey we have embarked on together. I am blessed to have you as my partner, my confidante, and my forever love.

Happy Second Anniversary, my love, and Happy Birthday! May this year bring you all the love, joy, and blessings that your heart desires. Thank you for being the anchor of my life, and here's to many more beautiful years together!`
                    letterholder.appendChild(letter)
                    clearInterval(x);
                  }
                  //seconds
                }, 0)
            }());

    });

});




