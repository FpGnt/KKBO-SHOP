function hide_unhide() {
    $('.cable-choose button').click(function(){
       
             var $this = $(this);
             var x = document.getElementById("add_to_cart");
             if (!$this.hasClass('btn-success')) {
                x.style.display = "none";
    } else {
       x.style.display = "block";
    }
    })

    }

