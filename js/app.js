var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    autoplayTimeout:1000,
    Type: Boolean,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
$("#sid-btn-1").hover(
    function() {
        $(".hover_txt_1").text("Hello World !");
    },function() {
        $(".hover_txt_1").text("");
    }
);
$("#sid-btn-2").hover(
    function(){
        $(".hover_txt_2").text("Hello World !");
    },function(){
        $(".hover_txt_2").text("")
    }
)
$("#sid-btn-3").hover(
    function(){
        $(".hover_txt_3").text("Hello World !");
    },function(){
        $(".hover_txt_3").text("")
    }
)
$("#sid-btn-4").hover(
    function(){
        $(".hover_txt_4").text("Hello World !");
    },function(){
        $(".hover_txt_4").text("")
    }
)
$("#cate_gories_sub_add").hover(
    function(){
        $("#cate_gories_sub_add").append(`
                <nav class="cate_gories_sub">
                    <ul>
                    <li><a href="#">Women's & Girls' Fashion</a></li>
                    <li><a href="#">Men's & Boys' Fashion</a></li>
                    <li><a href="#">Electronic Accessories</a></li>
                    <li><a href="#">TV & Home Appliances</a></li>
                    <li><a href="#">Electronics Device</a></li>
                    <li><a href="#">Mother & Baby</a></li>
                    <li><a href="#">Automotive & Motorbike</a></li>
                    <li><a href="#">Sports & Outdoors</a></li>
                    <li><a href="#">Home & Lifestyle</a></li>
                    <li><a href="#">Groceries</a></li>
                    <li><a href="#">Health & Beauty</a></li>
                    <li><a href="#">Watches, Bags, Jewellery</a></li>
                    </ul>
                </nav>
            `)
    },
    function(){
        $(".cate_gories_sub").hide()
    },
);
$("#body_detail").append(`
    <!-- Header Start -->
  <header>
    <div class="container-fluid bg-color">
      <div class="row">
        <div class="col-12 menu">
          <nav>
            <ul>
              <li><a href="#">SAVE MORE ON APP</a></li>
              <li><a href="#">BECOME A SELLAR</a></li>
              <li><a href="#">HELP & SUPPORT</a></li>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#">SIGN UP</a></li>
              <li><a href="#">EN</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-1 logo">
              <a href="#"><img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="ERROR"></a>
            </div>
            <div class="col-4">
              <div class="search">
                <form action="#">
                  <input type="search" placeholder="Search in Daraz" style="margin-bottom: 0px;">
                  <button type="submit"><i class="lnr lnr-magnifier"></i></button>
                </form>
              </div>
            </div>
            <div class="col-2">
              <div class="cart">
                <a href="#"><i class="lnr lnr-cart"></i></a>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <nav class="details-page-menu">
                  <ul>
                    <li><a href="#">mistry box daraz today</a></li>
                    <li><a href="#">smart watchmistry box daraz today 59</a></li>
                    <li><a href="#">box daraz today 59</a></li>
                </nav>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
<!-- Header End -->
 <!-- Categories bar start -->
  <section style="background-color: #FFFFFF;">
    <div class="container">
      <div class="row">
        <div class="col-12 cate_gories">
          <a id="cate_gories_sub_add" href="#">Categories <i class="fa-solid fa-angle-down"></i></a>
        </div>
      </div>
    </div>
  </section>
 <!-- Categories bar End -->
<!-- pagination start -->
 <section>
    <div class="container">
        <div class="row">
            <div class="col-12 Breadcrumb-main">
              <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Health & Beauty</a></li>
                  <li class="breadcrumb-item"><a href="#">Hair Care</a></li>
                  <li class="breadcrumb-item"><a href="#">Hair Oils</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Jui Multi-Vitamin Hair Oil 350 ml</li>
                </ol>
              </nav>
            </div>
        </div>
    </div>
 </section>
<!-- pagination End -->
<!-- gallery section Start -->
 <section>
  <div class="b_g_color">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="xzoom-container">
            <img class="xzoom"  src="https://img.drz.lazcdn.com/static/bd/p/7fd224c3cb143cc281506704f7512d9a.jpg_720x720q80.jpg_.webp" xoriginal="https://img.drz.lazcdn.com/static/bd/p/7fd224c3cb143cc281506704f7512d9a.jpg_720x720q80.jpg_.webp"/>
            <div class="xzoom-thumbs mt-3">
              <a href="https://img.drz.lazcdn.com/static/bd/p/7fd224c3cb143cc281506704f7512d9a.jpg_720x720q80.jpg_.webp"><img class="xzoom-gallery" width="80" src="https://img.drz.lazcdn.com/static/bd/p/7fd224c3cb143cc281506704f7512d9a.jpg_720x720q80.jpg_.webp"></a>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
 </section>
<!-- gallery section End -->
<!-- customae cure section start -->
<section>
    <div class="container" style="margin-top: 80px;">
      <div class="row">
        <div class="col-3 customer_care">
          <p>Customer Care</p>
          <a href="#">Help Center</a><br>
          <a href="#">How to Buy</a><br>
          <a href="#">Returns & Refunds</a><br>
          <a href="#">Contact Us</a><br>
          <a href="#">Terms & Conditions</a><br>
          <a href="#">CCMS - Control Complain Management System</a><br>
        </div>
        <div class="col-3 about_daraz">
          <p>Daraz</p>
          <a href="#">About Daraz</a><br>
          <a href="#">Digital Payments</a><br>
          <a href="#">Daraz Card</a><br>
          <a href="#">Daraz Blog</a><br>
          <a href="#">Daraz Cares</a><br>
          <a href="#">Daraz Mart</a><br>
          <a href="#">Privacy Policy</a><br>
          <a href="#">Daraz App</a><br>
          <a href="#">Daraz Exclusives</a><br>
          <a href="#">Daraz Donates</a><br>
          <a href="#">Daraz University</a><br>
          <a href="#">Sell on Daraz</a><br>
          <a href="#">Code of Conduct</a><br>
          <a href="#">Join the Daraz Affiliate Program</a><br>
        </div>
        <div class="col-3">
          <div class="row logo_of_daraz">
            <div class="col-2">
              <img src="https://img.lazcdn.com/us/domino/5edde8a0-bbf7-42cf-8799-022d5510b54b_BD-60-60.png" alt="ERROR">
            </div>
            <div class="col-10">
              <h6>Happy Shopping</h6>
              <p>Download App</p>
            </div>
          </div>
        </div>
        <div class="col-3 payment_systems">
          <div class="row">
            <div class="col-5"><a href="#"><img src="https://img.lazcdn.com/us/domino/e1486716-675d-495a-ba5f-0435b55ca3f4_BD-126-42.png" alt="ERROR"></a></div>
            <div class="col-5"><a href="#"><img src="https://img.lazcdn.com/us/domino/84b7eda1-c90a-4f39-b056-dbec1cc76c2f_BD-126-42.png" alt="ERROR"></a></div>
            <div class="col-2"></div>
          </div>
          <div class="row">
            <div class="col-5" style="margin-top: 10px;"><a href="#"><img src="https://img.lazcdn.com/us/domino/38759af8-163f-4d76-99d4-bc69cfe2e324_BD-126-42.png" alt="ERROR"></a></div>
            <div class="col-7"></div>
          </div>
        </div>
      </div>
    </div>
   </section>
  <!-- customae cure section end -->
<!-- Payment Methods Section Start -->
<section style="background-color: #FFFFFF;margin-top: 50px;">
    <div class="container">
      <div class="row">
        <div class="col-4 payment_methods">
          <p>Payment Methods</p>
          <img src="https://img.lazcdn.com/us/domino/dd7d3db1-047c-4e65-b89e-d710eb539976_BD-139-84.png" alt="ERROR">
          <img src="https://img.lazcdn.com/us/domino/27fcee2a-7768-48b2-b369-faf91829bf76_BD-140-84.png" alt="ERROR">
          <img src="https://img.lazcdn.com/us/domino/e369d9f9-eb41-428c-b0c2-07bd60ffdc6e_BD-63-48.png" alt="ERROR">
          <img src="https://img.lazcdn.com/us/domino/29d575f6-594f-4f9f-82f3-dbbe78a4ae0e_BD-145-84.png" alt="ERROR">
          <img src="https://img.lazcdn.com/us/domino/9fcd39bd-e3e2-49f0-ad52-bfe54080562d_BD-144-84.png" alt="ERROR">
          <img src="https://img.lazcdn.com/us/domino/dbfdbbea-19ca-4be1-9b8f-ecb1fabdc6f7_BD-145-86.png" alt="ERROR"><br>
          <img style="margin-bottom: 50px;" src="https://img.lazcdn.com/us/domino/395e474e-f67e-4a29-9521-5bc693ca53df_BD-144-84.png" alt="ERROR">
          <img style="margin-bottom: 50px;" src="https://img.lazcdn.com/us/domino/7eff036e-acff-4560-890c-fde8e1bb053e_BD-144-84.png" alt="ERROR">
          <img style="margin-bottom: 50px;" src="https://img.lazcdn.com/us/domino/71587ea9-6e32-4728-b251-4513236a8ba5_BD-144-84.png" alt="ERROR">
        </div>
        <div class="col-2 Verified">
          <p>Verified by</p>
          <img src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="ERROR">
        </div>
        <div class="col-2 dbid">
          <p>DBID</p>
          <span>Registration ID : 304903094</span>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
   </section>
  <!-- Payment Methods Section End -->
  <!-- footer Section Start -->
   <footer style="background-color: #FFFFFF;padding-bottom: 40px;">
    <div class="container">
      <div class="row">
        <div class="col-5 daraz_international">
          <p>Daraz International</p>
          <img src="https://img.lazcdn.com/us/domino/be86b237-3425-4f99-9177-e0d420ece837_BD-84-84.png" alt="ERROR">
          <a href="#">Pakistan</a>
          <img src="https://img.lazcdn.com/us/domino/b9a34bd0-721d-451b-b828-4575bde3d2b5_BD-84-84.png" alt="ERROR">
          <a href="#">Bangladesh</a>
          <img src="https://img.lazcdn.com/us/domino/2fb836db-3d37-4bb6-92e8-3af677a5503c_BD-84-84.png" alt="ERROR">
          <a href="#">Sri Lanka</a>
          <img src="https://img.lazcdn.com/us/domino/d1af7d07-f74e-44d2-8d27-e2dc6e5ea70c_BD-84-84.png" alt="ERROR">
          <a href="#">Myanmar</a>
          <img src="https://img.lazcdn.com/us/domino/187cdce2-c2da-4b05-a96e-e5b0386c654d_BD-86-86.png" alt="ERROR">
          <a href="#">Nepal</a>
        </div>
        <div class="col-4 follow">
          <p>Follow Us</p>
          <a href="#"><img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png" alt="ERROR"></a>
          <a href="#"><img src="https://img.lazcdn.com/us/domino/dc8270ce-0d81-4e34-a4c8-0d7e82ac5d5f_BD-76-76.png" alt="ERROR"></a>
          <a href="#"><img src="https://img.lazcdn.com/us/domino/cc9e593f-adae-428c-abae-e55953feea31_BD-76-76.png" alt="ERROR"></a>
          <a href="#"><img src="https://img.lazcdn.com/us/domino/f65e9f63-e19e-4fa6-bdfd-35158b2e21d8_BD-76-76.png" alt="ERROR"></a>
          <a href="#"><img src="https://img.lazcdn.com/us/domino/3f1d2d6a-1d36-4eb4-82ff-1e4511f6d293_BD-75-76.png" alt="ERROR"></a>
        </div>
        <div class="col-3 rm">
          <p>© Daraz 2025 <a target="_blank" href="https://www.facebook.com/devloperrayhan">Developer Rayhan</a></p>
        </div>
      </div>
    </div>
   </footer>
  <!-- footer Section End -->
    `)
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    console.log(scroll);
    if (scroll > 500) {
        $("header").addClass("menu_fixed").fadeIn();
    } else {
        $("header").removeClass("menu_fixed");
    }
});
