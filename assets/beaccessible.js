$(document).ready(function(){
    // Announce product filter change on the products page

    const selectedFilterCats = $('#selected-filter-cat');
    const shopAllFilter = $('.collections-sidebar-left #shopAll');
    const notShopAllfilters = $('.collections-sidebar-left .isotope-filter').not('#shopAll');
    const filteredProductList = $('#AjaxinateLoop');
    let selectedFilters = [];

    $('.collections-sidebar-left .isotope-filter').click(function() {
        const $this = $(this);
        const filterTitle = $this.text();
        let checked = $this.attr('aria-checked');

        //if shopAll selected
        if ($this.data('filter') === ".product-category--all-products") {
            selectedFilters = [];
            selectedFilterCats.text("Shop All Products");

            //aria-checked false on all other filters
            $.each(notShopAllfilters, function(i, filter) {
                filter.setAttribute('aria-checked','false')
            });
            
        }

        //if any other filter selected
        else {
            //if unchecking checked filter
            if (checked == "true") {
                const index = selectedFilters.indexOf(filterTitle);
                if (index > -1) {
                    selectedFilters.splice(index, 1);
                    selectedFilterCats.text('Shop Products: ' + selectedFilters);
                    checked = false;
                    $this.attr('aria-checked','false');
                    console.log(filterTitle, ' ', checked);
                }  
                
                if (selectedFilters.length == 0) {
                    shopAllFilter.attr('aria-checked','true');
                    selectedFilterCats.text("Shop All Products");
                }
            }

            //if checking unchecked filter
            else {
                selectedFilters.push(filterTitle);
                selectedFilterCats.text('Shop Products: ' + selectedFilters);
                checked = true;
                $this.attr('aria-checked','true');
                shopAllFilter.attr('aria-checked','false');
                console.log(filterTitle, ' ', checked);
            }    
        }

        filteredProductList.focus();

    });


    // Products page product color switch 
    const colorNavItem = $('*[data-color]');

    colorNavItem.click(function(event) {
        //prevent clicking on the wrapping <a> that goes to product page
        event.preventDefault();
    });

    //location switcher trap focus
    $('#location-focusguard-top').on('focus', function() {
        // "last" focus guard got focus: set focus to the first field
        $('.location-switcher-nav-list li:last-child a').focus();
    });
    
    $('#location-focusguard-bottom').on('focus', function() {
        // "first" focus guard got focus: set focus to the last field
        $('.closeLocationModal').focus();
    });

    //A purchase with Impact trap focus
    $('#impact-focusguard-top').on('focus', function() {
        $('#shop-with-impact-dropdown iframe').focus();
    });
    
    $('#impact-focusguard-bottom').on('focus', function() {
        $('#shop-with-impact-dropdown .icon-close-circle').focus();
    });

    //Cart trap focus
    $('#cart-focusguard-top').on('focus', function() {
        $('#sidebar .cart-summary__action .btn').focus();
    });
    
    $('#cart-focusguard-bottom').on('focus', function() {
        // alert('TEST');
        $('#sidebar .toggle__sidebar.sidebar__close').focus();       
    });
    

    //"complex" form field autofocus & focus label styles, 
    //because moved label above input and css "+" selector no longer works
    $('.input-complex input').on('focus', function() {
        $(this).siblings('label').css({
            'border-top': '1px solid #36a9a7',
            'border-bottom': '1px solid #36a9a7',
            'border-left': '1px solid #36a9a7',
            'color': '#36a9a7'
        })
    })

    $('.input-complex input[autofocus]').siblings('label').css({
        'border-top': '1px solid #36a9a7',
        'border-bottom': '1px solid #36a9a7',
        'border-left': '1px solid #36a9a7',
        'color': '#36a9a7'
    })

    $('.input-complex input').on('focusout', function() {
        $(this).siblings('label').css({
            'border-top': '1px solid #e5e3e3',
            'border-bottom': '1px solid #e5e3e3',
            'border-left': '1px solid #e5e3e3',
            'color': '#747475'
        })
    })

});

