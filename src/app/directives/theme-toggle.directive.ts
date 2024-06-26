import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appThemeToggle]'
})
export class ThemeToggleDirective {

  constructor() { }

  @HostListener('click') onClick() {
    const theme = localStorage.getItem('theme');
    const browserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme !== null) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (browserDark) {
      document.documentElement.classList.add('dark');
    }

    document.documentElement.classList.toggle('dark', !document.documentElement.classList.contains('dark'));
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }
}
