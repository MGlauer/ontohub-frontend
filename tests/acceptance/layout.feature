Feature: Layout

  Scenario: The top bar is displayed
    Given I am on the "index" page
    Then I should see the top bar

  Scenario: The footer is displayed
    Given I am on the "index" page
    Then I should see the app footer
