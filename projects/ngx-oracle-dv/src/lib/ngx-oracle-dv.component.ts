import { AfterViewInit, Component, Input, OnInit, Renderer2 } from '@angular/core';

declare const window: any;

@Component({
  selector: 'ngx-oracle-dv[project-path], oracle-dv[project-path]',
  template: `<div id="ngxOracleDv" style={{style}}></div>`,
  styles: []
})
export class NgxOracleDvComponent implements OnInit, AfterViewInit {
  /**
   * Container styles
   * 
   * Default value:
   * {
   * width: "100%",
   * height: "100%"
   * }
   */
  @Input() style: Record<any,any> = {
      width: "100%",
      height: "100%"
  };
  /**
  * (Required) Specifies the repository path of the workbook that you want to render.
  */
  @Input('project-path') projectPath!: string;
  /**
   * (Optional) Specifies whether a canvas or insight other than the default is rendered. When you specify active-page, you also use active-tab-id to specify the exact canvas or story page that you’re showing. Valid values are canvas and insight.
   * 
   * Default value: 'canvas'
   */
  @Input('active-page') activePage = 'canvas';
  /**
   * (Optional) Specifies the ID of the canvas or the story page that you’re showing.
   * 
   * Default value: '1'
   */
  @Input('active-tab-id') activeTabId = '1';
  /**
   * (Optional) Allows the programmatic passing of filter values to an embedded workbook.
   * 
   * Default value: []
   */
  @Input('filters') filters: Array<Record<any,any>> = [];

  /*
  * (Optional) Project options
  *
  * Default value:
  * {
  * bDisableMobileLayout: false,
  * bShowFilterBar: true
  * }
  */
  @Input('project-options') projectOptions =
    {
      bDisableMobileLayout: false,
      bShowFilterBar: true
    };

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Init Knockout if projectPath is defined
    if (this.projectPath) {
    this.initKnockout();
    }
  }

  ngAfterViewInit() {
    // Generate Oracle Data Visualization
    const elem = document.createElement('oracle-dv');
    elem.setAttribute('project-path', this.projectPath);
    elem.setAttribute('active-page', this.activePage);
    elem.setAttribute('active-tab-id', this.activeTabId);
    elem.setAttribute('filters', JSON.stringify(this.filters));
    elem.setAttribute('project-options', JSON.stringify(this.projectOptions));

    document.getElementById('ngxOracleDv')?.appendChild(elem);
  }

  // Initialize Knockout
  initKnockout() {
    window.requirejs(
      [
        'knockout',
        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojcomposite',
        'jet-composites/oracle-dv/loader',
      ],
      function (ko: any) {
        ko.applyBindings();
      }
    )
  }

}
