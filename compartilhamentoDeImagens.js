  /*****************
    
    INICIO COMPARTILHAMENTO DE IMAGENS
    
    ******************/




    //Funções de compartilhamento
    function shareOnFacebook(e){
        e.preventDefault();
        let url = this.getAttribute('href');
        let modal = window.open(url,'_blank');
    }

    function shareWhatsApp(e){
        e.preventDefault();
        let url = this.getAttribute('href');
        let modal = window.open(url,'_blank');
    }

    function shareTwitter(e){
        e.preventDefault();
        let url = this.getAttribute('href');
        let modal = window.open(url,'_blank');
    }

    function sharePinterest(e){
        e.preventDefault();
        let url = this.getAttribute('href');
        let modal = window.open(url,'_blank');
    }



    const infografico = document.querySelectorAll('.infografico');


    let socialMedia = '<div style=" position: absolute; top: 0; left: 0; margin-top: 0px; z-index: 9999; width: 40px; ">'; 
    socialMedia += '<div style="width: 40px;height: 40px;background: #4064AD;"><a class="facebookShare" style="color:#FFF;" href="#"><i style=" margin-top: 12px; " class="fa fa-facebook"></i></a></div>';
    socialMedia += '<div style="width: 40px;height: 40px;background: #28AD00;"><a class="whatsAppShare" style="color:#FFF;" href="#"><i style=" margin-top: 12px; " class="fa fa-whatsapp"></i></a></div>';
    socialMedia += '<div style="width: 40px;height: 40px;background: #29A4DA;"><a class="twitterShare" style="color:#FFF;" href="#"><i style=" margin-top: 12px; " class="fa fa-twitter"></i></a></div>';
    socialMedia += '<div style="width: 40px;height: 40px;background: #DE0014;"><a class="pinteresetShare" style="color:#FFF;" href="#"><i style=" margin-top: 12px; " class="fa fa-pinterest"></i></a></div>';
    socialMedia += '</div>';
    infografico.forEach(function(v){
        v.innerHTML += socialMedia;
    });

    const selfPage = window.location.href;
    const titlePage = document.querySelector('title').innerText;
    const facebookShare = document.querySelectorAll('.facebookShare');
    const whatsAppShare = document.querySelectorAll('.whatsAppShare');
    const twitterShare = document.querySelectorAll('.twitterShare');
    const pinteresetShare = document.querySelectorAll('.pinteresetShare');

    facebookShare.forEach(function(v){
        v.onclick = function(e){
            e.preventDefault();
            let url = "https://www.facebook.com/sharer/sharer.php?u="+selfPage;
            let modal = window.open(url,'Compartilhe','height=400,width=350');
        }
    });

    whatsAppShare.forEach(function(v){
        v.onclick = function(e){
            e.preventDefault();
            let url = "https://web.whatsapp.com/send?text="+selfPage;
            let modal = window.open(url,'Compartilhe','height=200,width=150');
        }
    });

    twitterShare.forEach(function(v){
        v.onclick = function(e){
            e.preventDefault();
            let url = "https://twitter.com/home?status="+selfPage;
            let modal = window.open(url,'Compartilhe','height=200,width=150');
        }
    });

    pinteresetShare.forEach(function(v){
        v.onclick = function(e){
            e.preventDefault();
            let url = "https://pinterest.com/pin/create/button/?url=&media="+selfPage+"&description="+titlePage;
            let modal = window.open(url,'Compartilhe','height=200,width=150');
        }
    });

    /*****************
    
    FIM COMPARTILHAMENTO DE IMAGENS
    
    ******************/