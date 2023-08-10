import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Lang } from 'src/app/core/enums/lang.enum';
import { TranslationService } from 'src/app/core/services/translation/translation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  currentLanguage: string | undefined;
  @Output() isLanguageChanged = new EventEmitter();

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {}
  ngOnInit(): void {
    this.currentLanguage = this.translationService.getLanguage();
  }
  changeLang(lang: Lang | string) {
    this.translationService.setLanguage(lang);
    this.currentLanguage = lang;
    this.isLanguageChanged.emit(lang);
    // window.location.reload();
  }
}
