Feature: Search functionality
  As a user I want to login into carsguide website

  @Smoke
  Scenario Outline:  Search the buy car with model
    Given I am on homepage
    When  I mouse hover on buy+sell tab
    And   I click Search Cars
    Then  I navigate to new and used car search page
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on Find My Next Car tab
    Then  I should see the make "<make>" in results
    Examples:
      | make       | model    | location            | price    |
      | Audi       | Q8       | NSW - New England   | $150,000 |
      | Honda      | Jazz     | NSW - Newcastle     | $25,000  |
      | Hyundai    | I40      | WA - Perth          | $20,000  |
      | Jeep       | Compass  | SA - York Peninsula | $30,000  |
      | Land Rover | Defender | QLD - Gold Coast    | $90,000  |
      | Peugeot    | 3008     | NSW - South Coast   | $35,000  |

