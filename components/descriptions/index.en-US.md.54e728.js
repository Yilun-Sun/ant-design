(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/descriptions/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/descriptions/index.en-US.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/descriptions/index.en-US.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"Display multiple read-only fields in groups.\"\n    ],\n    [\n      \"h2\",\n      \"When To Use\"\n    ],\n    [\n      \"p\",\n      \"Commonly displayed on the details page.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Data Display\",\n    \"title\": \"Descriptions\",\n    \"cols\": 1,\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg\",\n    \"filename\": \"components/descriptions/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#When-To-Use\",\n          \"title\": \"When To Use\"\n        },\n        \"When To Use\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Descriptions\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"Whether to display the border\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"colon\"\n          ],\n          [\n            \"td\",\n            \"Change default props \",\n            [\n              \"code\",\n              \"colon\"\n            ],\n            \" value of Descriptions.Item\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"column\"\n          ],\n          [\n            \"td\",\n            \"The number of \",\n            [\n              \"code\",\n              \"DescriptionItems\"\n            ],\n            \" in a row,could be a number or a object like \",\n            [\n              \"code\",\n              \"{ xs: 8, sm: 16, md: 24}\"\n            ],\n            \",(Only set \",\n            [\n              \"code\",\n              \"bordered={true}\"\n            ],\n            \" to take effect)\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"3\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"contentStyle\"\n          ],\n          [\n            \"td\",\n            \"Customize content style\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.10.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"extra\"\n          ],\n          [\n            \"td\",\n            \"The action area of the description list, placed at the top-right\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.5.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"labelStyle\"\n          ],\n          [\n            \"td\",\n            \"Customize label style\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.10.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"layout\"\n          ],\n          [\n            \"td\",\n            \"Define description layout\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"horizontal\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"vertical\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"horizontal\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"Set the size of the list. Can be set to \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \",\",\n            [\n              \"code\",\n              \"small\"\n            ],\n            \", or not filled\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"The title of the description list, placed at the top\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"DescriptionItem\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"contentStyle\"\n          ],\n          [\n            \"td\",\n            \"Customize content style\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.9.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"label\"\n          ],\n          [\n            \"td\",\n            \"The description of the content\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"labelStyle\"\n          ],\n          [\n            \"td\",\n            \"Customize label style\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.9.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"span\"\n          ],\n          [\n            \"td\",\n            \"The number of columns included\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"1\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"The number of span Description.Item. Span={2} takes up the width of two DescriptionItems. When both \",\n        [\n          \"code\",\n          \"style\"\n        ],\n        \" and \",\n        [\n          \"code\",\n          \"labelStyle\"\n        ],\n        \"(or \",\n        [\n          \"code\",\n          \"contentStyle\"\n        ],\n        \") configured, both of them will work. And next one will overwrite first when conflict.\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/descriptions/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);