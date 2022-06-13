<!-- Swiper -->
<section id="news-slider-1">
  <div class="container-fluid slider-container blue-slider-row">
    <div class="row news-sldier-1-row">
      <div class="col-12 news-col">
        <div class="red-box">
          dasdasd
        </div>
      </div>
      <div class="col-12 news-col">
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev prev-custom"></div>
            <div class="swiper-button-next next-custom"></div>
        <div class="news">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper"
              style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms !important;">
             
              <div class="swiper-slide">
                <div class="post-wrapper">
                  <div class="slider-post">
                    <img src="https://zvezdara.rs/wp-content/uploads/2021/10/161021-opstinazvezdara-590x500.jpg" alt=""
                      srcset="">
                    <div class="slider-post-text">
                      <p>Datum</p>
                      <p>tekst</p>
                    </div>
                  </div>
                  <div class="news-button">
                      <button class="btn btn-danger"> Dugme</button>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="post-wrapper">
                  <div class="slider-post">
                    <img src="https://zvezdara.rs/wp-content/uploads/2021/11/241012-opstina-590x500.jpg" alt=""
                      srcset="">
                    <div class="slider-post-text">
                      <p>Datum</p>
                      <p>tekst</p>
                    </div>
                  </div>
                  <div class="news-button">
                      <button class="btn btn-danger"> Dugme</button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="post-wrapper">
                  <div class="slider-post">
                    <img src="https://zvezdara.rs/wp-content/uploads/2021/12/011121-vsz1-590x500.jpg" alt=""
                      srcset="">
                    <div class="slider-post-text">
                      <p>Datum</p>
                      <p>tekst</p>
                    </div>
                  </div>
                  <div class="news-button">
                      <button class="btn btn-danger"> Dugme</button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="post-wrapper">
                  <div class="slider-post">
                    <img src="https://zvezdara.rs/wp-content/uploads/2021/11/291121javno-zdravlje1-590x449.jpg" alt=""
                      srcset="">
                    <div class="slider-post-text">
                      <p>Datum</p>
                      <p>tekst</p>
                    </div>
                  </div>
                  <div class="news-button">
                      <button class="btn btn-danger"> Dugme</button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="post-wrapper">
                  <div class="slider-post">
                    <img src="https://zvezdara.rs/wp-content/uploads/2021/10/161021-opstinazvezdara-590x500.jpg" alt=""
                      srcset="">
                    <div class="slider-post-text">
                      <p>Datum</p>
                      <p>tekst</p>
                    </div>
                  </div>
                  <div class="news-button">
                      <button class="btn btn-danger"> Dugme</button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- If we need navigation buttons
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  var MySwiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
</script>