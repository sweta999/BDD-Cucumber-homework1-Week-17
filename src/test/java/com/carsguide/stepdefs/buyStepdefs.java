package com.carsguide.stepdefs;

import com.carsguide.pages.AllNewandUsedCars;
import com.carsguide.pages.HomePage;

import com.carsguide.pages.NewUsedCarSearchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class buyStepdefs {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().hoverBuySellTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() throws InterruptedException {
        Thread.sleep(3000);
        new HomePage().clickSearchCars();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        Assert.assertEquals("New & Used Car Search - carsguide", new NewUsedCarSearchPage().setVerifyText());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new NewUsedCarSearchPage().setSelectMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new NewUsedCarSearchPage().setSelectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new NewUsedCarSearchPage().setSelectLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new NewUsedCarSearchPage().setSelectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewUsedCarSearchPage().setFindMyNextCar();
    }


    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
       Assert.assertTrue(make, new AllNewandUsedCars().getMakeResult().contains(make));
    }
}
