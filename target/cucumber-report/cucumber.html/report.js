$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to login into carsguide website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "Q8",
        "NSW - New England",
        "$150,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "Jazz",
        "NSW - Newcastle",
        "$25,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Hyundai",
        "I40",
        "WA - Perth",
        "$20,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "SA - York Peninsula",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Land Rover",
        "Defender",
        "QLD - Gold Coast",
        "$90,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Peugeot",
        "3008",
        "NSW - South Coast",
        "$35,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 56005281000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Q8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 4399623700,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1282468900,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 12215608400,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 352998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1319063800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q8",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 435356100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 389700100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 388052800,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 16812280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 93688200,
  "status": "passed"
});
formatter.after({
  "duration": 4281750600,
  "status": "passed"
});
formatter.before({
  "duration": 34627233400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Jazz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2744871000,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 11378541200,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 296144900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 572310600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jazz",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 452877000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 393569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 391449200,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 38943027200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 124897500,
  "status": "passed"
});
formatter.after({
  "duration": 5292790500,
  "status": "passed"
});
formatter.before({
  "duration": 25783824900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"I40\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 281429100,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 10928391100,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 330447600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 414313300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I40",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 437397600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 399711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 374809200,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 37259300900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 147732600,
  "status": "passed"
});
formatter.after({
  "duration": 1852541200,
  "status": "passed"
});
formatter.before({
  "duration": 34829882400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Compass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"SA - York Peninsula\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 301428000,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 19677047800,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 931628000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 466866900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 637264900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - York Peninsula",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 388132400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 377509700,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 21476257300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 83329500,
  "status": "passed"
});
formatter.after({
  "duration": 1960856100,
  "status": "passed"
});
formatter.before({
  "duration": 30676265800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Defender\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"QLD - Gold Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 273185500,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 13849439400,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 972386800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 409000400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Defender",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 408622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Gold Coast",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 420650500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 427873600,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23708346500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 111422400,
  "status": "passed"
});
formatter.after({
  "duration": 1438590400,
  "status": "passed"
});
formatter.before({
  "duration": 24438208700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Peugeot\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"3008\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - South Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Peugeot\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 250133500,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 13117769200,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 74602700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 15
    }
  ],
  "location": "buyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1459021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3008",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 378685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - South Coast",
      "offset": 19
    }
  ],
  "location": "buyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 391839100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "buyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 392149700,
  "status": "passed"
});
formatter.match({
  "location": "buyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 19782179300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 23
    }
  ],
  "location": "buyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 98028400,
  "status": "passed"
});
formatter.after({
  "duration": 1904556600,
  "status": "passed"
});
});