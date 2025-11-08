    // david

    let question = document.querySelectorAll(".ques-1-container");

    const items = document.querySelectorAll('.item');

    question.forEach(el => {
        el.addEventListener('click', function () {
            // questy.forEach(item => item.classList.remove('active')); // clear others
            this.classList.toggle('active'); // add to clicked one
        });
    });

    // translate animaiton
    // let translateElement("");
    document.querySelector(".banner-img-wrapper");
    setInterval(

    )