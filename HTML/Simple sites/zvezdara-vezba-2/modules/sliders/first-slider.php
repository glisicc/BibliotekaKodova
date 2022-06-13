
<section id="first-slider">
    <div class="container-fluid slider-container">
        <div class="row">
                    <!-- Slider main container -->
                    <div class="swiper" style="width: 100%;">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                        <!-- Slides -->

                        <?php
                            $x = 1;
                            while($x <= 3) {
                        ?>
                            <div class="swiper-slide">
                            <div class="row" style="width: 100%;">
                                <div class="col-md-8 set-padding">
                                <img src="https://zvezdara.rs/wp-content/uploads/2021/11/101121-vakcinacijavml-slajder222-e1636552406815.jpg" alt="">

                                    <div class="img-hover-left">
                                        <div class="img-arrow">
                                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    
                                    <div class="img-hover-right">
                                        <div class="img-arrow">
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    
                                </div>
                                <div class="col-md-4 slider-right">
                                    <div class="tagovi">
                                        <button class="slider-tag">dadasda</button>
                                        <button class="slider-tag">asda</button>
                                        <button class="slider-tag">dassd</button>
                                    </div>
                                    <div class="tagovi">
                                        Datum
                                    </div>
                                    <div class="tagovi">
                                        <p>
                                            КРЕИРАЈМО ОПШТИНСКИ БУЏЕТ ЗАЈЕДНО Поштоване суграђанке и суграђани, У току је поступак припреме нацрта буџета Градске општине Звездара за 2022. годину. Позивамо грађане да се укључе у процес планирања буџета...
                                        </p>
                                    </div>
                                    <div class="tagovi">
                                        <button class="slider-tag" style="width: 100px; height: 40px;">dadasda</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                            $x++;
                            }
                        ?>

                        <!-- If we need pagination -->
                        <!-- <div class="swiper-pagination"></div> -->
                    
                        <!-- If we need navigation buttons -->
                        <!-- <div class="swiper-button-prev"></div> -->
                        <!-- <div class="swiper-button-next"></div> -->
                    
                        <!-- If we need scrollbar -->
                        <!-- <div class="swiper-scrollbar"></div> -->
                        
                    </div>
        </div>
    </div>
    </section>

    <!-- ----- script za slider js ------ -->
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script>
        const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: 'true',
    autoHeight: true,
    speed: 2000, //brzina transition
    autoplay: {
    delay: 3000,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.img-hover-right',
        prevEl: '.img-hover-left',
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    </script>

