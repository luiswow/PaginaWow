import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-leveo',
  templateUrl: './leveo.component.html',
  styleUrls: ['./leveo.component.css']
})
export class LeveoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer
    
    ) { }
    
  
    

    urlSinProcesar = "//www.youtube.com/embed/BCr7y4SLhck?rel=0";
    //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
    urlSaneada = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar);


    urlSinProcesar2 = "//www.youtube.com/embed/jr2JB8DSENM?rel=0";
    //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
    urlSaneadas = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar2);


    urlSinProcesar3 = "//www.youtube.com/embed/PWqGpq0-yh0?rel=0";
    //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
    urlSaneada3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar3);


    urlSinProcesar4 = "//www.youtube.com/embed/jgkAVRwPV9I?rel=0";
    //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
    urlSaneada4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar4);


    urlSinProcesar5 = "//www.youtube.com/embed/3DJzixGrGe4?rel=0";
    //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
    urlSaneada5= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar5);
    

  ngOnInit(
    
  ): void {
  
    
  }



}
