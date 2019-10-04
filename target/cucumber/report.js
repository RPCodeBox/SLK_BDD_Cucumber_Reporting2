$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SimpleFeatureFile1.feature");
formatter.feature({
  "line": 1,
  "name": "Advanced Cucumber test result reporting",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web application is in running state",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_application_is_in_running_state()"
});
formatter.result({
  "duration": 81118412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_browser_is_launched()"
});
formatter.result({
  "duration": 66560,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User login",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Home page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Following fields should be shown username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Valid user name and password is used",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Register option should not be visible",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.home_page_is_launched()"
});
formatter.result({
  "duration": 76800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.click_on_login()"
});
formatter.result({
  "duration": 41529,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.following_fields_should_be_shown_username_and_password()"
});
formatter.result({
  "duration": 35840,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.valid_user_name_and_password_is_used()"
});
formatter.result({
  "duration": 43235,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.login_should_be_successful()"
});
formatter.result({
  "duration": 59733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.register_option_should_not_be_visible()"
});
formatter.result({
  "duration": 38685,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web application is in running state",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_application_is_in_running_state()"
});
formatter.result({
  "duration": 44374,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_browser_is_launched()"
});
formatter.result({
  "duration": 32427,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User change address",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;user-change-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is already logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "When user edits address",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Editing address should be possible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_is_already_logged_in()"
});
formatter.result({
  "duration": 39253,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.when_user_edits_address()"
});
formatter.result({
  "duration": 34703,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.editing_address_should_be_possible()"
});
formatter.result({
  "duration": 34133,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Home page loading on different browsers",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches following browser \"\u003cbrowser name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User verifies home page title",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home page title validation should be successful",
  "keyword": "When "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;",
  "rows": [
    {
      "cells": [
        "browser name"
      ],
      "line": 29,
      "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 30,
      "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;2"
    },
    {
      "cells": [
        "mozilla"
      ],
      "line": 31,
      "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;3"
    },
    {
      "cells": [
        "internet explorer"
      ],
      "line": 32,
      "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web application is in running state",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_application_is_in_running_state()"
});
formatter.result({
  "duration": 44942,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_browser_is_launched()"
});
formatter.result({
  "duration": 32996,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Home page loading on different browsers",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches following browser \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User verifies home page title",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home page title validation should be successful",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 33
    }
  ],
  "location": "StepDefinitions_CucumberProject.user_launches_following_browser(String)"
});
formatter.result({
  "duration": 1748195,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_verifies_home_page_title()"
});
formatter.result({
  "duration": 54614,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.home_page_title_validation_should_be_successful()"
});
formatter.result({
  "duration": 37547,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web application is in running state",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_application_is_in_running_state()"
});
formatter.result({
  "duration": 45511,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_browser_is_launched()"
});
formatter.result({
  "duration": 30152,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Home page loading on different browsers",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches following browser \"mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User verifies home page title",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home page title validation should be successful",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "mozilla",
      "offset": 33
    }
  ],
  "location": "StepDefinitions_CucumberProject.user_launches_following_browser(String)"
});
formatter.result({
  "duration": 72249,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_verifies_home_page_title()"
});
formatter.result({
  "duration": 47218,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.home_page_title_validation_should_be_successful()"
});
formatter.result({
  "duration": 36409,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web application is in running state",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_application_is_in_running_state()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.web_browser_is_launched()"
});
formatter.result({
  "duration": 32426,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Home page loading on different browsers",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;home-page-loading-on-different-browsers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@homePageTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches following browser \"internet explorer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User verifies home page title",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home page title validation should be successful",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "internet explorer",
      "offset": 33
    }
  ],
  "location": "StepDefinitions_CucumberProject.user_launches_following_browser(String)"
});
formatter.result({
  "duration": 66560,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_verifies_home_page_title()"
});
formatter.result({
  "duration": 34702,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.home_page_title_validation_should_be_successful()"
});
formatter.result({
  "duration": 32995,
  "status": "passed"
});
formatter.uri("SimpleFeatureFile2.feature");
formatter.feature({
  "line": 1,
  "name": "Advanced Cucumber test result reporting",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User log out",
  "description": "",
  "id": "advanced-cucumber-test-result-reporting;user-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@homePageTestOther"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is already logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User log out should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cookies should not be deleted",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_is_already_logged_in()"
});
formatter.result({
  "duration": 53475,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 40391,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.user_log_out_should_be_successful()"
});
formatter.result({
  "duration": 37547,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_CucumberProject.cookies_should_not_be_deleted()"
});
formatter.result({
  "duration": 2046862,
  "error_message": "java.lang.AssertionError: Log::  ********** cookies_getting_deleted_due_to_some_isses\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat imademethink_cucumber_advanced_reporting.StepImplimentations.StepImplementation_CucumberProject.cookies_should_not_be_deleted(StepImplementation_CucumberProject.java:62)\r\n\tat imademethink_cucumber_advanced_reporting.StepDefinitions.StepDefinitions_CucumberProject.cookies_should_not_be_deleted(StepDefinitions_CucumberProject.java:79)\r\n\tat ✽.But Cookies should not be deleted(SimpleFeatureFile2.feature:8)\r\n",
  "status": "failed"
});
});