# NGX Oracle Data Visualization

The NGX Oracle Data Visualization module allows you to seamlessly integrate Oracle Analytics Visualizations into your angular applications.

### Installation

To install the ngx-oracle-dv module, follow these steps:

1. Install `ngx-oracle-dv` module in your project
```
npm install ngx-oracle-dv
```



2. Next, you need to add the Oracle Analytics Visualizations embedding script to the `index.html` file of your project. Add the following code snippet within the `<head>` section:
```
<script
    src="<oac instance url>/dv/ui/api/v1/plugins/embedding/standalone/embedding.js"
    type="application/javascript">
</script>
```



3. Import the NgxOracleDvModule into your application module. Open the module file (e.g., `app.module.ts`) and add the import statement:
```
import { NgxOracleDvModule } from 'ngx-oracle-dv';
...
@NgModule({
  ...
  imports: [
    ...
    NgxOracleDvModule
  ],
  ...
})
```



4. Finally, you can use the `ngx-oracle-dv` component within your project's HTML files.
Place the following code snippet wherever you want to display the visualization:
```
<ngx-oracle-dv projectPath="/@Catalog/users/john_doe/sample_workbook"></ngx-oracle-dv>
```

You can also customize the component's behavior by providing additional properties like `activePage`, `activeTabId`, `filters`, and `projectOptions`. Refer to the **"Props"** section below for more details.



**Note:** This component requires Single Sign-On to be enabled between Oracle Analytics Cloud and your application. During testing, you can run the application in the same browser where you are signed into Oracle Analytics Cloud to bypass the Single Sign-On requirement.


### Props

`projectPath` (required):
Specifies the repository path of the workbook that you want to render.

`activePage` (optional):
Specifies whether a canvas or insight other than the default is rendered. Valid values are 'canvas' and 'insight'.

`activeTabId` (optional):
Specifies the ID of the canvas or the story page that you want to show. It can be either a string or a number.

`filters` (optional):
Specifies the filters that you want to apply to the visualization. It can be either a string or an array of strings.

`projectOptions` (optional):
Specifies the project options that you want to apply to the visualization. It can be either a string or an array of strings.


These properties allow you to customize the displayed visualization according to your requirements.

### Contributors
Manuel Pinto [(manuel@pinto.dev)](mailto:manuel@pinto.dev)

Joella Fernandes [(fernandes@joella.dev)](mailto:fernandes@joella.dev)