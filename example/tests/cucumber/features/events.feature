Feature: Template events example specification

  As a meteor testing manual reader
  I want to see how to test events
  So that I can become a test ninja

  Scenario: Hello world in English
    Given I am on the home page
    When I click on the "English" button
    Then I should see "Hello World"

  Scenario: Hello world in French
    Given I am on the home page
    When I click on the "French" button
    Then I should see "Bonjour monde"