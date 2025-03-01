Feature: New User Order Placement



  Scenario: New user places an order successfully
    Given the user launches application
    And the user hovers over the "Men" category in the main menu
    And the user hovers over the "Tops" sub-category and selects "Tanks"
    And the user selects the product "Rocco Gym Tank"
    Then the product name should be displayed in the Product Detail page
    And the product price should be displayed
    When the user selects product size "XS"
    And the user selects product color "Blue"
    And the user sets the quantity to "4"
    And the user adds the product to the cart
    And the user waits for the cart count to update
    And the user opens the cart
    And the user clicks the checkout button
    Then the checkout page should load
    When the user enters checkout details:
      | email        | [DynamicEmail] |
      | firstName   | [DynamicFirstName]                     |
      | lastName   | [DynamicLastName]     |
      | streetAddress      | 6789 N Willi           |
      | city        | Portland                     |
      | region      | Oregon                  |
      | postCode | 986451                |
      | mobileNo  | 1231231231                |
      | shippingMethod    | flatrate           |
    And the user continues to the review page
    Then the review page should load
    And the product quantity should be displayed in the review page
    And the product name should be displayed in the review page
    When the user places the order
    Then the order success page should load
    And an order number should be generated

