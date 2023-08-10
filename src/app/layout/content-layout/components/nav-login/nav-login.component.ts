import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { Lang } from 'src/app/core/enums/lang.enum';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss'],
})
export class NavLoginComponent implements OnInit {
  @Input() currentUser!: any;
  currentLanguage: string | undefined;
  @Output() isLanguageChanged = new EventEmitter();
  @Output() onLogout = new EventEmitter();
  isDesktop: boolean = false;
  isDesktopMood: boolean = false;
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private translationService: TranslationService
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 992px)')
      .subscribe((result) => {
        this.isDesktop = result.matches;
        if (this.isDesktop) {
          // Perform actions for desktop mode
          this.isDesktopMood = true;
        } else {
          // Perform actions for non-desktop mode
          this.isDesktopMood = false;
        }
      });

    this.currentLanguage = this.translationService.getLanguage();
  }

  handleLogout() {
    this.authService.LogOut();
    this.router.navigateByUrl('/login');
  }
  changeLang(lang: Lang | string) {
    this.translationService.setLanguage(lang);
    this.currentLanguage = lang;
    this.isLanguageChanged.emit(lang);
  }
}
