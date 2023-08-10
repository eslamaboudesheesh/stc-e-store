import { Lang } from './../../core/enums/lang.enum';
import { TranslationService } from './../../core/services/translation/translation.service';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * This Directive is used to handle the RTL Classes for HTML Elements.
 *
 * Based on the Current Language from TranslationService it will set rtl class.
 *
 * Usage: use [inRtl] Selector on HTML element and it will add rtl class when change the language.
 */

@Directive({
  selector: '[inRtl]',
})
export class RtlDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private translate: TranslationService
  ) {
    this.switchElementDirection();
  }

  /**
   * used to switch rtl class based on the chosen language from TranslationService.
   */
  switchElementDirection() {
    this.translate.currentLanguage$.subscribe((language) => {
      switch (language) {
        case Lang.english:
          this.renderer.removeClass(this.elRef.nativeElement, 'rtl');
          break;
        case Lang.arabic:
          this.renderer.addClass(this.elRef.nativeElement, 'rtl');
          break;
        default:
          break;
      }
    });
  }
}
