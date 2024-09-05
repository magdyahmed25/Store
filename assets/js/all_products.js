// open $ close filter

var filter = document.querySelector(".filter")

function open_close_filter() {
    filter.classList.toggle("active");
}





fetch('assets/js/items.json')
        .then(response => response.json())
        .then(data =>{
    
            const oproducts_dev = document.getElementById("products_dev")


            all_products_json = data   

            data.forEach(product => {

                const old_price_pargrahp = product.old_price ? ` <p class="old_price">$${product.old_price} </p>` : "";

                        const present_disc_div = product.old_price ? `  <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span> ` : "";
                        products_dev.innerHTML +=   
                           

                     `
                        <div class="product swiper-slide">

                            <div class="icons">
                                <span>
                                    <i onclick ="addToCart(${product.id}, this)"  class="fa-solid fa-cart-plus"></i>
                                </span>

                                <span>
                                    <i class="fa-solid fa-heart">
                                    </i>
                                </span>

                                <span>
                                    <i class="fa-solid fa-share"></i>
                                </span>
                            </div>

                            
                            ${present_disc_div }
                           


                            <div class="img-product">
                                <img src="${product.img}">

                                <img class="img-hover" src="${product.img_hover}">
                            </div>

                            <h3 class="name-product">
                                <a href="#"> ${product.name} </a>
                            </h3>

                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div class="price">
                                <p>
                                    <span>
                                        $${product.price} 
                                    </span>
                                </p>

                                <p class="old_price">
                                    ${old_price_pargrahp} 
                                </p>
                            </div>


                        </div>
                     `
                        

            });

        
        })      