import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
class ForceNativeScrollDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        ['ps__child', 'ps__child--consume'].forEach((className) => {
            this.renderer.addClass(el?.nativeElement, className);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ForceNativeScrollDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.3", type: ForceNativeScrollDirective, selector: "[forceNativeScrolling]", ngImport: i0 }); }
}
export { ForceNativeScrollDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ForceNativeScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[forceNativeScrolling]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yY2UtbmF0aXZlLXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tY3UtcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2xpYi9mb3JjZS1uYXRpdmUtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQzs7QUFFakUsTUFHYSwwQkFBMEI7SUFFckMsWUFBb0IsUUFBbUIsRUFBRSxFQUFjO1FBQW5DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckMsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FOVSwwQkFBMEI7a0dBQTFCLDBCQUEwQjs7U0FBMUIsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBSHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZm9yY2VOYXRpdmVTY3JvbGxpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JjZU5hdGl2ZVNjcm9sbERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBlbDogRWxlbWVudFJlZikge1xuICAgIFsncHNfX2NoaWxkJywgJ3BzX19jaGlsZC0tY29uc3VtZSddLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbD8ubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=