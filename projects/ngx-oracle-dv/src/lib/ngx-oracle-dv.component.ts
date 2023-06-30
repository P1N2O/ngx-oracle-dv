import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

declare const window: any;

@Component({
  selector: 'ngx-oracle-dv',
  template: `
  <div id="odvContainer" style={{style}}>

      <!-- Oracle DV -->
      <!-- <oracle-dv #oracleDv *ngIf="projectPath else noProjectPath"
      [project-path]="projectPath"
      [active-page]="activePage"
      [active-tab-id]="activeTabId"
      [filters]="filters"></oracle-dv> -->

      <!-- No Project Path Error -->
      <!-- <ng-template #noProjectPath> -->
        <div *ngIf="!projectPath" role="alert">
          <h4>No project path!</h4>
          <p>Please specify the project path.</p>
        </div>
      <!-- </ng-template> -->

    </div>
  `,
  styles: [
  ]
})
export class NgxOracleDvComponent implements AfterViewInit {
  // Knockout
  knockout = window.requirejs(
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
  );

  @ViewChild('oracleDv', {static:true}) oracleDv: any;

  /**
   * Container stlyes
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
  @Input() projectPath!:string;
  /**
   * (Optional) Specifies whether a canvas or insight other than the default is rendered. When you specify active-page, you also use active-tab-id to specify the exact canvas or story page that you’re showing. Valid values are canvas and insight.
   * 
   * Default value: 'canvas'
   */
  @Input() activePage = 'canvas';
  /**
   * (Optional) Specifies the ID of the canvas or the story page that you’re showing.
   * 
   * Default value: '1'
   */
  @Input() activeTabId = '1';
  /**
   * (Optional) Allows the programmatic passing of filter values to an embedded workbook.
   * 
   * Default value: []
   */
  @Input() filters: Array<Record<any,any>> = [];

  /*
  * (Optional) Project options
  *
  * Default value:
  * {
  * bDisableMobileLayout: false,
  * bShowFilterBar: true
  * }
  */
  @Input() projectOptions =
    {
      bDisableMobileLayout: false,
      bShowFilterBar: true
    };

  constructor() {
      // Call this.knockout when input is received from parent component to projectPath
    if (this.projectPath) {
      this.knockout;
    }
  }

  ngAfterViewInit() {
    // Generate Oracle DV element
    const oracleDv = document.createElement('oracle-dv');
    oracleDv.setAttribute('project-path', this.projectPath);
    oracleDv.setAttribute('active-page', this.activePage);
    oracleDv.setAttribute('active-tab-id', this.activeTabId);
    oracleDv.setAttribute('filters', JSON.stringify(this.filters));
    oracleDv.setAttribute('project-options', JSON.stringify(this.projectOptions));

    document.getElementById('odvContainer')?.appendChild(oracleDv);
  }

}
