# Issue Description
1 Using v-model and @change together
2 Dynamically change :data-source
3 At this time, when clicking the component to change the options, it cannot be synchronized to v-model

# After testing, it is found that only version ^2018.3.1025 does not have this problem
## has the issue with this version (^2023.2.718)
```js
{
 ...
  "dependencies": {
    "@progress/kendo-datasource-vue-wrapper": "^2023.2.718",
    "@progress/kendo-dropdowns-vue-wrapper": "^2023.2.718",
    "@progress/kendo-layout-vue-wrapper": "^2023.2.718",
    "@progress/kendo-theme-bootstrap": "^6.6.0",
    "@progress/kendo-ui": "^2023.2.718",
            
    "vue": "2.6.14"
  },
  ...
}
```

## has the issue with this version (^2019.3.1023)
```js
{
 ...
  "dependencies": {
    "@progress/kendo-datasource-vue-wrapper": "^2019.3.1023",
    "@progress/kendo-dropdowns-vue-wrapper": "^2019.3.1023",
    "@progress/kendo-layout-vue-wrapper": "^2019.3.1023",
    "@progress/kendo-theme-bootstrap": "^3.2.0",
    "@progress/kendo-ui": "^2019.3.1023",
    "vue": "2.6.14"
  }
  ...
}
```

## has no the issue with this version (^2018.3.1025)
```js
{
 ...
  "dependencies": {
    "@progress/kendo-datasource-vue-wrapper": "^2018.3.1025",
    "@progress/kendo-dropdowns-vue-wrapper": "^2018.3.1025",
    "@progress/kendo-layout-vue-wrapper": "^2018.3.1025",
    "@progress/kendo-theme-bootstrap": "^3.2.0",
    "@progress/kendo-ui": "^2018.3.1219",
            
    "vue": "2.6.14"
  }
  ...
}
```
	