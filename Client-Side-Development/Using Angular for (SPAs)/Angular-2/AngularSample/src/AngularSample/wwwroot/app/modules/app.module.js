System.register(["@angular/core", "@angular/platform-browser", "../components/app.component", "./app-routing.module", "@angular/http", "../components/home.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, app_component_1, app_routing_module_1, http_1, home_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZUFBUSxDQUFDO3dCQUNOLFlBQVksRUFBRTs0QkFDViw0QkFBWTs0QkFDWiw4QkFBYTt5QkFDaEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNMLGdDQUFhOzRCQUNiLGlCQUFVOzRCQUNWLHFDQUFnQjt5QkFDbkI7d0JBQ0QsU0FBUyxFQUFFLEVBQ1Y7d0JBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztxQkFDNUIsQ0FBQzs7NkJBQUE7Z0JBR0YsZ0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlDQUVDLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9ICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9ICAgICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICAgICAgIGZyb20gXCIuLi9jb21wb25lbnRzL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSAgIGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSAgICAgIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuIl19
