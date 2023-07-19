import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  breakpoint = 2;
  showButton = false;

  calculateBreakpoint(width:number): number{
    if(width < 578){
      return 1;
    } else if(width < 806){
      return 2;
    } else if (width < 1028){
      return 3;
    } else if(width < 1270){
      return 4;
    } else{
      return 5;
    }
  }

  ngOnInit() {
    this.breakpoint = this.calculateBreakpoint(window.innerWidth);
  }

  onResize(event: any) {
    this.breakpoint = this.calculateBreakpoint(event.target.innerWidth);
  }

  @HostListener('window:scroll')
  onScroll(): void{
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop) > 300;
  }
  scrollToTop(): void{
    window.scrollTo({top: 0,behavior: 'smooth'});
  }
}
