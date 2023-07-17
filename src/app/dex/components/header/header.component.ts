import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dex-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDarkTheme: boolean = false;

  constructor(private renderer: Renderer2){
      const storedTheme = localStorage.getItem('darkTheme');
      console.log(storedTheme);
      if(storedTheme){
          this.isDarkTheme = storedTheme === 'true';
          this.applyTheme(this.isDarkTheme);
      }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme(this.isDarkTheme);
    localStorage.setItem('darkTheme', this.isDarkTheme.toString());
  }

  private applyTheme(isDark: boolean) {
    console.log(isDark);
    const body =  document.body;
    if (isDark) {
      this.renderer.addClass(body, 'dark-theme');
      this.renderer.removeClass(body, 'light-theme');
    } else {
      this.renderer.addClass(body, 'light-theme');
      this.renderer.removeClass(body, 'dark-theme');
    }
  }
}

    


