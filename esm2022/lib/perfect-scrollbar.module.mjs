import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForceNativeScrollDirective } from './force-native-scroll.directive';
import { PerfectScrollbarComponent } from './perfect-scrollbar.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import * as i0 from "@angular/core";
class PerfectScrollbarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PerfectScrollbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: PerfectScrollbarModule, declarations: [PerfectScrollbarComponent,
            PerfectScrollbarDirective,
            ForceNativeScrollDirective], imports: [CommonModule], exports: [CommonModule,
            PerfectScrollbarComponent,
            PerfectScrollbarDirective,
            ForceNativeScrollDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PerfectScrollbarModule, imports: [CommonModule, CommonModule] }); }
}
export { PerfectScrollbarModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PerfectScrollbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PerfectScrollbarComponent,
                        PerfectScrollbarDirective,
                        ForceNativeScrollDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CommonModule,
                        PerfectScrollbarComponent,
                        PerfectScrollbarDirective,
                        ForceNativeScrollDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWN1LXBlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9saWIvcGVyZmVjdC1zY3JvbGxiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUUxRSxNQWdCYSxzQkFBc0I7OEdBQXRCLHNCQUFzQjsrR0FBdEIsc0JBQXNCLGlCQWQvQix5QkFBeUI7WUFDekIseUJBQXlCO1lBQ3pCLDBCQUEwQixhQUcxQixZQUFZLGFBR1osWUFBWTtZQUNaLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsMEJBQTBCOytHQUdqQixzQkFBc0IsWUFUL0IsWUFBWSxFQUdaLFlBQVk7O1NBTUgsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBaEJsQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9yY2VOYXRpdmVTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL2ZvcmNlLW5hdGl2ZS1zY3JvbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJDb21wb25lbnQgfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQZXJmZWN0U2Nyb2xsYmFyQ29tcG9uZW50LFxuICAgIFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmUsXG4gICAgRm9yY2VOYXRpdmVTY3JvbGxEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFBlcmZlY3RTY3JvbGxiYXJDb21wb25lbnQsXG4gICAgUGVyZmVjdFNjcm9sbGJhckRpcmVjdGl2ZSxcbiAgICBGb3JjZU5hdGl2ZVNjcm9sbERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUgeyB9XG4iXX0=