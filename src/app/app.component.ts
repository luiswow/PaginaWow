import { Component } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public boton(){
    $(document).ready(function(){
      $('.ir-arriba').click(function(){
      $('body,html').animate({
        scrollTop: '0px'
      });
      });
      $(window).scroll(function(){
        if($(this).scrollTop() > 0){
          $('.ir-arriba').slideDown(300);

        }else {
          $('.ir-arriba').slideUp(300);


        }

      });
        });
  }
 
}
