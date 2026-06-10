Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given User is on the adactin login page
    When User enter the valid username and valid password and clicks login button
    Then User should be navigated to the search hotel page

  Scenario: Login with invalid credentials
    Given User is on the adactin login page
    When User enter the "invaliduser" and "invalidpass" and clicks login button
    Then User should see the error message "Invalid login credentials"
